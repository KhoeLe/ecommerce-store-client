"use server";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategoryId = async (id: string) => {
    const res = await fetch(`${URL}/${id}`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
};
