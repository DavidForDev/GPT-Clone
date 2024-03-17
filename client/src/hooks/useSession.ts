import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

// ----------- Types ------------ \\
import { DecodedTokenTypes } from "@/types/apollo/user.types";

export const useSession = async () => {
  try {
    const cookie = new Cookies();
    const token = await cookie.get("token");

    const decodedToken: DecodedTokenTypes = jwtDecode(token as string);

    return {
      user: {
        id: decodedToken.user_id,
        email: decodedToken.email,
      },
    };
  } catch (error) {
    throw error;
  }
};
