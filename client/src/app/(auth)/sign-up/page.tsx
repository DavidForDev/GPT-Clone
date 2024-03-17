"use client";

import { useState } from "react";

// ------------ UI ------------- \\
import PrimaryButton from "@/components/UI/buttons/button.primary";
import PrimaryInput from "@/components/UI/inputs/input.primary";

// ------------ Components ------------- \\
import ErrorCard from "@/components/errors/errorCard";

// ------------ Apollo => Requests ------------- \\
import { Mutation_Request } from "@/apollo/operations/requests/user.request";

// ------------ Context ------------- \\
import { useErrorContext } from "@/context/errorContext";

export default function SignUp() {
  const { createUser } = Mutation_Request;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Error Context
  const { setErrors, errors } = useErrorContext();

  const signUpHandle = async () => {
    const { error } = await createUser({ email: email, password: password });

    setErrors((prev: any) => [...prev, error]);
  };

  return (
    <>
      <PrimaryInput
        type="text"
        labelName="enter email address"
        setValue={setEmail}
      />
      <PrimaryInput
        type="password"
        labelName="enter password"
        setValue={setPassword}
      />
      <PrimaryButton onClick={signUpHandle}>continue</PrimaryButton>
      <ErrorCard data={errors} />
    </>
  );
}
