import React from 'react'
import Skeleton from './Skeleton'

function BillBoardLoading() {
  return (
    <div className="w-full h-full p-8 ">
      <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

      </div>
    </div>
  )
}

export default BillBoardLoading
