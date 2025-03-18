import { verifyPassword } from "worker-password-auth";

export class AuthUser {
  private token: string | undefined;

  public constructor(
    public readonly email: string,
    private readonly hashedPassword: string,
  ) {}

  public async verifyPassword(rawPassword: string): Promise<boolean> {
    return verifyPassword(rawPassword, this.hashedPassword);
  }

  public setToken(token: string): void {
    this.token = token;
  }
}
