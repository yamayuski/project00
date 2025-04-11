import { authServer } from "@project00/backend/authServer";
import { Hono } from "hono";

const app = new Hono();

app.get("/api", async (c) => {
  const jsonRequest = await c.req.json();
  const response = await authServer.receive(jsonRequest);
  if (response) {
    return c.json(response);
  }
  // 204 No Content
  return c.body(null);
});

export default app;
