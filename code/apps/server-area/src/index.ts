import { Hono } from "hono";
import { upgradeWebSocket } from "hono/cloudflare-workers";
import { createAreaServer } from "@repo/backend/areaServer";

const app = new Hono();
let areaServer: ReturnType<typeof createAreaServer> | null = null;

app.get(
  "/ws",
  upgradeWebSocket((c) => {
    return {
      onMessage(event, ws) {
        areaServer = createAreaServer((message) => {
          ws.send(JSON.stringify(message));
        });
        areaServer.receiveAndSend(event.data.toString());
      },
      onClose() {
        if (areaServer) {
          areaServer.rejectAllPendingRequests("Connection is closed");
          areaServer = null;
        }
      },
    };
  }),
);
