"use server";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async () => {
    const res = await fetch(URL);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
};
