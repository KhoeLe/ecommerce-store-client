"use client"

import PreviewModal from "@/components/PreviewModal"
import { useEffect, useState } from "react"

function ModalProvider() {

    const [isMounted , setIsMounted] = useState<boolean>(false)

    useEffect(() => {
      setIsMounted(true)
    }, [])

  if(!isMounted) return null

    return (
        <>
        <PreviewModal />
        </>
    )
}

export default ModalProvider
