import Link from 'next/link'
import React from 'react'

type HeaderProps = {}

const Header = ({}: HeaderProps) => {
  return (
    <div className="py-4 text-4xl text-white">
      <Link href="/">Weather App</Link>
    </div>
  )
}

export default Header
