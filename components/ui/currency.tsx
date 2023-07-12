"use client"

import { formatter } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface Props {
    value?: string | number;
}

function Currency({ value = 0 }: Props) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="font-semibold">{formatter.format(Number(value))}</div>
    );
}

export default Currency;
