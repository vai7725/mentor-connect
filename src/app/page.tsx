import { currentUser } from '@clerk/nextjs/server'
import Image from 'next/image'

export default async function Page() {
  const user = await currentUser()

  if (!user) return <div>Not signed in</div>

  return (
    <div>
      Hello {user?.fullName} 😁
      <Image
        src={user?.imageUrl}
        alt={`${user?.fullName} image`}
        height={200}
        width={200}
        className="rounded-full"
      />
    </div>
  )
}
