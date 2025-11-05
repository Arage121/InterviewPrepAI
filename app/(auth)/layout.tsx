const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-linear-to-b from-[#101216] to-[#3d404c] min-h-screen">
      {children}
    </div>
  );
};

export default AuthLayout;
