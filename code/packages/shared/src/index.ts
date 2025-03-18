import type {
  TypedJSONRPCClient,
  TypedJSONRPCServer,
  TypedJSONRPCServerAndClient,
} from "json-rpc-2.0";

type AuthServerMethods = {
  register(params: { email: string; password: string }): void;
  login(params: { email: string; password: string }): { token: string };
  joinToArea(): { areaId: string };
};

export type AuthServer = TypedJSONRPCServer<AuthServerMethods>;
export type AuthClient = TypedJSONRPCClient<AuthServerMethods>;

export type AreaClientToServerMethods = {
  move(params: { x: number; y: number }): void;
};
export type AreaServerToClientMethods = {
  onJoined(params: { x: number; y: number }): void;
};

export type AreaServer = TypedJSONRPCServerAndClient<
  AreaClientToServerMethods,
  AreaServerToClientMethods
>;
export type AreaClient = TypedJSONRPCServerAndClient<
  AreaServerToClientMethods,
  AreaClientToServerMethods
>;
