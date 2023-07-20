import React from 'react'
import Skeleton from './Skeleton'


interface Props {
    length: Product[] | undefined
}

function ProductCardLoading({ length }: Props) {
    return (
        <div className="w-full h-full p-8">
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {length?.map((_, i) => (
                    <div key={i} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
                        {/* Image & actions */}
                        <div className="aspect-square rounded-xl bg-gray-100 relative">
                            <div className="animate-pulse bg-gray-300 w-full h-full rounded-md"></div>
                        </div>

                        {/* Name */}
                        <div>
                            <div className="animate-pulse bg-gray-300 w-3/4 h-4 rounded-md mb-2"></div>
                            <div className="animate-pulse bg-gray-300 w-1/2 h-4 rounded-md"></div>
                        </div>

                        {/* Price */}
                        <div className="flex items-center justify-between">

                            <div className="animate-pulse bg-gray-300 w-1/4 h-4 rounded-md"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductCardLoading
