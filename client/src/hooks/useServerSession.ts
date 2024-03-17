import { cookies as Cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

// ----------- Types ------------ \\
import { DecodedTokenTypes } from "@/types/apollo/user.types";

export const useServerSession = async () => {
  try {
    const cookie = Cookies();
    const token = cookie.get("token");

    const decodedToken: DecodedTokenTypes = jwtDecode(token?.value as string);

    return {
      user: {
        id: decodedToken.user_id,
        email: decodedToken.email,
      },
    };
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
};
