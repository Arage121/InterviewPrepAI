"use client";
import Image from "next/image";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const authFormSchema = (type: FormType) =>
  z.object({
    fullname:
      type === "sign-up"
        ? z.string().min(3, {
            message: "Username must be at least 3 characters.",
          })
        : z.string().optional(),
    email: z.email({ message: "Enter a valid email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    // profilePicture: z.any().optional(),
    // resume: z.any().optional(),
  });

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      // profilePicture: undefined,
      // resume: undefined,
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    try {
      if (type === "sign-up") {
        // sonner success toast needs to add
        router.push("/sign-in");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log("Error submitting form:", error);
    }
  };

  const fields = [
    {
      name: "fullname",
      label: "Full name",
      placeholder: "Enter your name",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
    },
    // {
    //   name: "profilePicture",
    //   label: "Profile Picture",
    //   placeholder: "Upload an image",
    //   type: "file",
    // },
    // {
    //   name: "resume",
    //   label: "Resume",
    //   placeholder: "Upload a pdf",
    //   type: "file",
    // },
  ];

  const isSignIn = type === "sign-in";

  return (
    <div className="w-full flex items-center justify-center min-h-screen p-20">
      <div className="space-y-8 border-3 border-[#82868a33] py-15 px-10 h-[88%] w-[39%] rounded-2xl text-white">
        <div className="text-center space-y-6">
          <div className="flex gap-4 items-center justify-center">
            <Image src="./logo.svg" alt="logo" height={32} width={38} />
            <h1 className="text-3xl text-[#DDDFFF]">InterviewPrepAI</h1>
          </div>
          <h2 className="text-2xl">Practice Job Interviews with AI</h2>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-center"
          >
            {fields
              .filter((field) => !(isSignIn && field.name === "fullname"))
              .map((fieldConfig) => (
                <FormField
                  key={fieldConfig.name}
                  control={form.control}
                  name={fieldConfig.name as any}
                  render={({ field }) => (
                    <FormItem className="gap-2">
                      <FormLabel>{fieldConfig.label}</FormLabel>
                      <FormControl
                        className={cn(
                          fieldConfig.type !== "file" &&
                            "focus-visible:ring-1 focus-visible:ring-input border-input rounded-full p-6 flex items-center justify-center bg-[#27282F]"
                        )}
                      >
                        {fieldConfig.type === "file" ? (
                          <div>
                            <label
                              htmlFor={fieldConfig.name}
                              className="w-full flex items-center gap-2 justify-center cursor-pointer bg-[#27282F] rounded-full py-4 px-6 border border-input hover:ring-1 transition"
                            >
                              <Upload size={18} />
                              <span className="text-sm text-gray-300">
                                {field.value
                                  ? field.value.name
                                  : fieldConfig.placeholder}
                              </span>
                            </label>

                            <input
                              id={fieldConfig.name}
                              type="file"
                              className="hidden"
                              accept={
                                fieldConfig.name === "profilePicture"
                                  ? "image/*"
                                  : ".pdf"
                              }
                              onChange={(e) =>
                                field.onChange(e.target.files?.[0])
                              }
                            />
                          </div>
                        ) : (
                          <Input
                            placeholder={fieldConfig.placeholder}
                            type={fieldConfig.type || "text"}
                            {...field}
                          />
                        )}
                      </FormControl>
                    </FormItem>
                  )}
                />
              ))}
            <div className="flex flex-col pt-2 gap-2">
              <Button
                type="submit"
                className="bg-[#CAC5FE] hover:bg-[#CAC5FE]/80 cursor-pointer rounded-full p-6 text-[#020408]"
              >
                {isSignIn ? "Sign In" : "Create an account"}
              </Button>
              <div>
                {!isSignIn
                  ? "Already have an account? "
                  : "Don't have an account? "}
                <Link
                  href={!isSignIn ? "/sign-in" : "/sign-up"}
                  className="text-blue-300 text-sm hover:underline underline-offset-3"
                >
                  {!isSignIn ? "Sign In" : "Sign Up"} Here
                </Link>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AuthForm;
