"use client";

import { useWixClient } from "@/hooks/useWixClient";
import { LoginState } from "@wix/sdk";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
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

  const router = useRouter()
  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn()
  if (isLoggedIn){
    router.push("/")
  }
  
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

      const handleSubmit = async (e) =>{
        e.preventDefault()
        setIsLoding(true)
        setError("")

        try {
          let response;
          switch(mode){
            case MODE.login:
              response = await wixClient.auth.login({
                email,
                password,
              });
              break;
            case MODE.register:
              response = await wixClient.auth.register({
                email,
                password,
                profile: {nickname: username},
              });
              break;
            case MODE.resetPassword:
              response = await wixClient.auth.sendPasswordResetEmail(
                email,
                window.location.href,
              );
              setMessage("Password reset email sent. Please check your e-mail.");
              break;
            
              case MODE.emailVerification:
              response = await wixClient.auth.processVerification({
                verificationCode: emailCode
              }
              );
                break;
              case LoginState.FAILURE:
                if (
                  response.errorCode === "invalidEmail" ||
                  response.errorCode === "invalidPassword"
                ) {
                  setError("Invalid email or password!");
                } else if (response.errorCode === "emailAlreadyExists") {
                  setError("Email already exists!");
                } else if (response.errorCode === "resetPassword") {
                  setError("You need to reset your password!");
                } else {
                  setError("Something went wrong!");
                }
              case LoginState.EMAIL_VERIFICATION_REQUIRED:
                setMode(MODE.emailVerification);
              case LoginState.OWNER_APPROVAL_REQUIRED:
                setMessage("Your account is pending approval");
            default:
              break;

            
          }

          switch(response?.loginState){
            case LoginState.SUCCESS:
              setMessage("Successful! You are being redirected.");
              const tokens = await wixClient.auth.getMemberTokensForDirectLogin(response.data.sessionToken)
              Cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
                expires: 2,
              });

              wixClient.auth.setTokens(tokens);
              router.push("/");
              break;
            default:
              break;
          }
        } catch(err){
          console.log(err)
          setError("Something went wrong!")
        } finally {
          setIsLoding(false)
        }

      }
  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 flex items-center justify-center">
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold">{formTitle}</h1>
        {mode === MODE.register ? (
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              className="ring ring-gray-300 rounded-md p-4"
              onChange={(e)=>setUsername(e.target.value)}
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
              onChange={(e)=>setEmail(e.target.value)}
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
              onChange={(e)=>setEmailCode(e.target.value)}
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
              onChange={(e)=>setPassword(e.target.value)}
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
