import { isAuthenticated } from "@/lib/actions/auth.action";
import Image from "next/image";
import { redirect } from "next/navigation";

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="py-10 px-22">
      <div className="flex justify-between gap-2 py-5 mb-10">
        <div className="flex gap-2">
          <Image src="logo.svg" alt="logo" width={32} height={32} />
          <h1 className="text-2xl font-semibold tracking-wide text-[#DDDFFF]">
            PrepWise
          </h1>
        </div>
        <div className="bg-linear-to-r from-orange-200 to-slate-400 p-1 rounded-full">
          <Image
            className="rounded-full"
            src="profile.svg"
            alt="logo"
            width={32}
            height={32}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default RootLayout;
