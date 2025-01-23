import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not signed in</div>;

  return (
    <div className="w-full min-h-screen flex items-center justify-around">
      Hello {user?.fullName} 😁
      <Image
        src={user?.imageUrl}
        alt={`${user?.fullName} image`}
        height={200}
        width={200}
        className="rounded-full"
      />
      <UserButton />
    </div>
  );
}
