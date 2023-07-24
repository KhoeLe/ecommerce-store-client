
import { Expand, ShoppingCart } from 'lucide-react'
import React, { MouseEventHandler } from 'react'
import IconButton from './icon-button'
import Image from "next/image";
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/stores/usePreviewModal';
import Currency from './currency';
import useCart from '@/stores/useCart';

interface Props {
  data: Product
}


function ProductCard({ data }: Props) {

  const previewModal = usePreviewModal()
  const cart = useCart()
  const router = useRouter()

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  const addToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  }

  const handleClick = () => {
    router.push(`/product/${data.id}`)
  }

  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div onClick={handleClick} className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images?.[0]?.url}
          alt={data.name}
          width={500}
          height={500}
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={addToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={data?.price} />
      </div>
    </div>
  )
}

export default ProductCard
