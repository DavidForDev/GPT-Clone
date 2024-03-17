import { JwtDecodeOptions } from "jwt-decode";

export interface CreateUserTypes {
  email: string;
  password: string;
}

export interface DecodedTokenTypes extends JwtDecodeOptions {
  user_id: string;
  email: string;
}
