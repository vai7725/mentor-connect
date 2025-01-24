import SideNav from '@/components/uiComponents/sideNav'
import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  const user = await currentUser()

  return <div></div>
}
