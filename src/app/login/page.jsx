"use client";

import React, { useState } from "react";

const MODE = {
  login: "LOGIN",
  register: "REGISTER",
  resetPassword: "RESET_PASSWORD",
  emailVerification: "EMAIL_VERIFICATION",
};

const Login = () => {
  const [mode, setMode] = useState(MODE.login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailCode, setEmailCode] = useState("");
  const [isLoading, setIsLoding] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const formTitle =
    mode === MODE.login
      ? "Login"
      : mode === MODE.register
      ? "Register"
      : mode === MODE.resetPassword
      ? "Reset Your Password"
      : "Verify Your Email";

  const buttonTitle =
    mode === MODE.login
      ? "Login"
      : mode === MODE.register
      ? "Register"
      : mode === MODE.resetPassword
      ? "Reset"
      : "Verify";
  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 flex items-center justify-center">
      <form className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.register ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="ring ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}
        {mode !== MODE.emailVerification ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="ring ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Verification Code</label>
            <input
              type="text"
              name="emailCode"
              placeholder="code"
              className="ring ring-gray-300 rounded-md p-4"
            />
          </div>
        )}

        {mode === MODE.login || mode === MODE.register ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              className="ring ring-gray-300 rounded-md p-4"
            />
          </div>
        ) : null}

        {mode === MODE.login && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.resetPassword)}
          >
            Forgot Password?
          </div>
        )}
        <button
          className="bg-secondary text-white p-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Loading ..." : buttonTitle}
        </button>
        {error && <div className="text-red-600">{error}</div>}
        {mode === MODE.login && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.register)}
          >
            {"Don't"} have an account?
          </div>
        )}
        {mode === MODE.register && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.login)}
          >
            Have an accoutn?
          </div>
        )}
        {mode === MODE.resetPassword && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={() => setMode(MODE.login)}
          >
            Go back to login
          </div>
        )}
        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  );
};

export default Login;
