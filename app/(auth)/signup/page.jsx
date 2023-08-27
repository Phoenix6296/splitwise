"use client";
import { useState } from "react";
import { Button, Input, Layout } from "@/components/common";
import { handleGoogleLogin, handleSignup } from "@/utils/apis/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = formData;
    handleSignup(name, email, password, router);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center gap-10 py-20">
        <div className="h-96">
          <Image src="/logo-icon.svg" width={200} height={100} alt="Logo" />
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center w-96 space-y-4"
        >
          <h1 className="text-4xl font-semibold w-full">Introduce Yourself</h1>
          <Input
            label="Hi there! My name is"
            type="text"
            onChange={handleInputChange}
          />
          <Input
            label="Here's my email address*"
            type="email"
            onChange={handleInputChange}
          />
          <Input
            label="And here's my password*"
            type="password"
            onChange={handleInputChange}
          />
          <Button
            title="Sign me up!"
            className="bg-primary text-white"
            type="submit"
          />
          <p className="text-gray-500">or</p>
          <Button
            type="button"
            prefixIcon="/Assets/google-logo.png"
            title="Sign up with Google"
            className="border hover:shadow-md"
            onClick={() => handleGoogleLogin(router)}
          />
        </form>
      </div>
    </Layout>
  );
}
