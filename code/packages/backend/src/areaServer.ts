import type {
  AreaClientToServerMethods,
  AreaServer,
  AreaServerToClientMethods,
} from "@project00/shared/index";
import {
  JSONRPCClient,
  JSONRPCServer,
  JSONRPCServerAndClient,
  type TypedJSONRPCServerAndClient,
} from "json-rpc-2.0";

export function createAreaServer(
  sendMessage: (message: unknown) => void,
): AreaServer {
  const rpcServer = new JSONRPCServer<AreaClientToServerMethods>();
  rpcServer.addMethod("move", ({ x, y }) => {
    console.log("Moving to coordinates:", x, y);
    // TODO: Implement move logic
  });
  const rpcClient = new JSONRPCClient<AreaServerToClientMethods>((req) => {
    sendMessage(req);
  });
  const serverClient = new JSONRPCServerAndClient(
    rpcServer,
    rpcClient,
  ) as unknown as TypedJSONRPCServerAndClient<
    AreaClientToServerMethods,
    AreaServerToClientMethods,
    void,
    void
  >;
  return serverClient;
}
