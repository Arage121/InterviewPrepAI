import Logo from "@/public/assets/Logo.svg";
import Image from "next/image";

const AuthForm = ({ type }: { type: "sign-in" | "sign-up" }) => {
  return (
    <div className="w-full flex items-center justify-center min-h-screen">
      <div className="border-2 border-[#4B4D4F33] py-15 px-10 h-[88%] w-[39%] rounded-2xl">
        <div className="text-center flex flex-col gap-4">
          <div className="flex gap-4 items-center justify-center">
            <Image src={Logo} alt="logo" />
            <h1 className="text-3xl text-[#DDDFFF]">InterviewPrepAI</h1>
          </div>
          <h2 className="text-2xl">Practice Job Interviews with AI</h2>
          <p>{type === "sign-in" ? "Sign In" : "Sign Up"} Page</p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
