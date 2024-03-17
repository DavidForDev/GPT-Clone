"use client";

import { useState } from "react";

// ------------- UI -------------- \\
import PrimaryButton from "@/components/UI/buttons/button.primary";
import PrimaryInput from "@/components/UI/inputs/input.primary";

// ------------- Components ------------ \\
import ErrorCard from "@/components/errors/errorCard";

// ------------ Apollo => Query ------------- \\
import { Query_Request } from "@/apollo/operations/requests/user.request";

// ------------ Context ------------- \\
import { useErrorContext } from "@/context/errorContext";

export default function Login() {
  const { signIn } = Query_Request;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // error Context
  const { setErrors, errors } = useErrorContext();

  const signInHandle = async () => {
    const { error } = await signIn({ email, password });

    setErrors((prev: any) => [...prev, error]);
  };

  return (
    <>
      <PrimaryInput type="text" labelName="enter address" setValue={setEmail} />
      <PrimaryInput
        type="password"
        labelName="Password"
        setValue={setPassword}
      />
      <PrimaryButton onClick={signInHandle}>continue</PrimaryButton>
      <ErrorCard data={errors} />
    </>
  );
}
