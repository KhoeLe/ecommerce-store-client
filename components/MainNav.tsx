"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useMemo } from 'react'
import { usePathname } from 'next/navigation'
interface Props {
  data: Category[]
}

function MainNav({ data }: Props) {

  const pathname = usePathname()

  const routes = useMemo(() => {
    if (!data) return [];
    return data.map((route) => ({
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`
    }));
  }, [data, pathname]);


  return (
    <div className='mx-6 flex items-center space-x-4 lg:space-x-6'>
      {routes.map((route) => (
        <Link key={route.href} href={route.href} className={cn(
          'text-sm font-medium transition-colors hover:text-black',
          route.active ? 'text-black border-b-2 border-opacity-100 border-b-black' : 'text-neutral-500'
        )} >
          {route.label}
        </Link>
      ))}
    </div>
  )
}

export default MainNav
