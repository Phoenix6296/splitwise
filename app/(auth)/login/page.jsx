"use client";
import { Button, Input, Layout } from "@/components/common";
import { handleLogin, handleGoogleLogin } from "@/utils/apis/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ForgotPasswordModal } from "@/components/Block/LandingPage";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    handleLogin(email, password, router);
  };

  return (
    <Layout className="pt-20 py-10 md:px-0 px-5">
      <form
        onSubmit={handleSubmit}
        className="md:w-[500px] w-full rounded-lg shadow-lg bg-white mx-auto md:p-10 p-5 py-10 flex flex-col gap-5 items-center justify-evenly"
      >
        <h1 className="text-4xl font-semibold">Login</h1>
        <Input
          label="Email Address*"
          type="email"
          onChange={handleInputChange}
        />
        <Input label="Password*" type="password" onChange={handleInputChange} />
        <Button title="Login" className="bg-primary text-white" type="submit" />
        <p
          className="text-primary cursor-pointer"
          onClick={() => setShow(true)}
        >
          Forgot your Password?
        </p>
        <p className="text-gray-500">or</p>
        <Button
          prefixIcon="/Assets/google-logo.png"
          title="Sign in with Google"
          className="border hover:shadow-md"
          onClick={() => handleGoogleLogin(router)}
        />
      </form>
      <ForgotPasswordModal visible={show} setVisible={setShow} />
    </Layout>
  );
}
