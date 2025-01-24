import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return <div className="w-[90%] mx-auto max-w-screen-xl">{children}</div>
}
