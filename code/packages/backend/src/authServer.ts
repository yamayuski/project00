import type { AuthServer } from "@repo/shared/index";
import { JSONRPCServer } from "json-rpc-2.0";
import { AuthRepository } from "./authRepository";

export const authServer: AuthServer = new JSONRPCServer();
const repository = new AuthRepository();

authServer.addMethod("register", async ({ email, password }) => {
  await repository.register(email, password);
});

authServer.addMethod("login", async ({ email, password }) => {
  const { token } = await repository.login(email, password);
  return { token };
});

authServer.addMethod("joinToArea", async () => {
  return {
    areaId: "generated-area-id",
  };
});
