import type { JwtAccessPayload } from "../utils/jwt";

declare global {
  namespace Express {
    interface Request {
      user?: JwtAccessPayload;
    }
  }
}
