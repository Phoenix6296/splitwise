"use client";
import { useState } from "react";
import { Modal, Input, Button } from "../../common";
import Image from "next/image";
import { SEARCH_QUERY } from "@/utils/constant";
import { handleResetPassword } from "@/utils/apis/auth";

export const ForgotPasswordModal = ({ visible, setVisible }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const closeModal = () => {
    setEmail("");
    setLoading(false);
    setSuccess(false);
    setVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResetPassword(email, setLoading, setSuccess);
  };

  return (
    <Modal title="Reset Password" isVisible={visible} onClose={closeModal}>
      {!success ? (
        <form
          onSubmit={handleSubmit}
          className="p-5 md:w-[500px] w-full flex gap-5 items-center justify-between"
        >
          <div className="flex flex-col gap-5 w-full">
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              title="Send Reset Link"
              type="submit"
              loading={loading}
              className="bg-primary text-white"
            />
          </div>
        </form>
      ) : (
        <div className="p-5 md:w-[500px] w-full flex flex-col gap-5 items-center justify-between">
          <Image
            src="/Assets/email-gif.gif"
            height={200}
            width={200}
            alt="Email Sent"
          />
          <Button
            prefixIcon={"/Assets/gmail-logo.png"}
            title="Take me to my email"
            className="bg-primary text-white"
            onClick={() => {
              window.open(
                `https://mail.google.com/mail/u/?authuser=${email}#search/${SEARCH_QUERY}`
              );
              setVisible(false);
            }}
          />
        </div>
      )}
    </Modal>
  );
};
