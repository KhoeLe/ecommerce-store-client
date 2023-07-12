"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
interface Props {
  data: Category[]
}

function MainNav({data}: Props) {

  const pathname  = usePathname()

  const routes  = data?.map((route) => ({
    href: `/category/${route.id}`,
    label :  route.name,
    active: pathname === `/category/${route.id}`
  }))

  return (
    <div className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {routes.map((route) => (
          <Link key={route.href} href={route.href} className={cn(
            'text-sm font-medium transition-colors hover:text-black',
            route.active ? 'text-black' : 'text-neutral-500'
          )} >
            {route.label}
      </Link>
      ))}

    </div>
  )
}

export default MainNav
