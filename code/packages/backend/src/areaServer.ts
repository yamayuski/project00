import type {
  AreaClientToServerMethods,
  AreaServer,
  AreaServerToClientMethods,
} from "@repo/shared/index";
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
    // TODO: Implement move logic
  });
  const rpcClient = new JSONRPCClient<AreaServerToClientMethods>((req) => {
    sendMessage(req);
  });
  const serverClient: TypedJSONRPCServerAndClient<
    AreaClientToServerMethods,
    AreaServerToClientMethods,
    void,
    void
  > = new JSONRPCServerAndClient(rpcServer, rpcClient);
  return serverClient;
}
