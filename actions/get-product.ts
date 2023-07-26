"use server";

import { revalidateTag } from "next/cache";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProductId = async (productId: string): Promise<Product> => {
    const res = await fetch(`${URL}/${productId}`);
    revalidateTag("productId");
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
