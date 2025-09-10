import { headers } from "next/headers";
import Image from "next/image";

interface IProps {
  children: React.ReactNode;
}
const AuthLayout = async ({ children }: IProps) => {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname");
  console.log(pathname);
  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex items-center justify-between">
          <Image src={"/logo.svg"} width={100} height={54} alt="Logo" />
          <></>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
