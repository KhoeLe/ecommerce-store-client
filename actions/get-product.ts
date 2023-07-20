"use server";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const getProductId = async (productId: string): Promise<Product> => {
    const res = await fetch(`${URL}/${productId}`, {
        cache: "no-cache",
    });
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
    return res.json();
};
