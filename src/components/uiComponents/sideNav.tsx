import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HiMiniBars3BottomRight } from 'react-icons/hi2'

import React from 'react'
import Link from 'next/link'

type Props = {}

export default function SideNav({}: Props) {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden ml-2">
        <HiMiniBars3BottomRight className="h-6 w-6" />
      </SheetTrigger>
      <SheetContent>
        <ul>
          <li className="py-2 border-b border-gray-200">
            <Link href={'/'}>Home</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  )
}
