"use client";
import React, { useEffect, useState } from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/stores/useCart";
import { useRouter } from "next/navigation";

function NavbarActions() {
    const [mounted, setMounted] = useState<boolean>(false);

    const cart = useCart()
    const router  = useRouter()

    useEffect(() => {
        setMounted(true);
    }, [mounted]);

    const handleClick = () => {
        router.push("/cart")
    }

    if (!mounted) return null;

    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={handleClick} className="flex items-center bg-black px-4 py-2 rounded-full ">
                <ShoppingBag size={20} color={"white"} />
                <span className="ml-2 text-sm font-medium text-white">{cart.items.length}</span>
            </Button>
        </div>
    );
}

export default NavbarActions;
