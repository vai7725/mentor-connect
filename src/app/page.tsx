import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  const user = await currentUser()

  if (!user) return <div>Not signed in</div>

  return (
    <div>
      Hello {user?.fullName} 😁
      <img src={user?.imageUrl} alt="" />
    </div>
  )
}
