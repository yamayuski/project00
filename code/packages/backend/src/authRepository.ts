import { hashPassword } from "worker-password-auth";
import { AuthUser } from "./authUser";

function generateToken(size: number): string {
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  return Array.from(bytes)
    .map((byte) => String.fromCharCode(byte))
    .join("")
    .replace(/\+/g, "x")
    .replace(/\//g, "I")
    .slice(0, size);
}

export class AuthRepository {
  private users: Map<string, AuthUser> = new Map();

  async register(email: string, rawPassword: string) {
    if (this.users.has(email)) {
      throw new Error("User already exists");
    }
    this.users.set(email, new AuthUser(email, await hashPassword(rawPassword)));
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const storedUser = this.users.get(email);
    if (!storedUser || !(await storedUser.verifyPassword(password))) {
      throw new Error("Invalid email or password");
    }
    const token = generateToken(64);
    storedUser.setToken(token);
    return { token };
  }
}
