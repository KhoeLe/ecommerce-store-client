"use client";
import { useProductFeatured } from "@/hooks";
import ProductList from "./ui/product-list";
import ProductCardLoading from "./ui/product-card-loading";

function ProductFeatured() {
    const { data, isLoading, isFetching, isError, } = useProductFeatured({
        isFeatured: true,
    });

    return (
        <>
            {isLoading ? (
                <div className="space-y-4">

                    <ProductCardLoading />
                </div>
            ) : isError ? (
                <div>Something went wrong while fetching data...</div>
            ) : (
                <div className="space-y-4">
                    <ProductList title="Product Featured" data={data} />
                </div>
            )}
        </>
    );
}

export default ProductFeatured;
