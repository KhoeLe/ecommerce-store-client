"use server";

const URL = `https://next13-ecommerce-admin.vercel.app/api/c4fc8d10-e419-4c27-9124-5ac7030e581f/categories`;

export const getCategories = async () => {
    const res = await fetch(URL);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
};