"use client";
import { useProductFeatured } from "@/hooks";
import ProductList from "./ui/product-list";
import Loading from "@/app/(routes)/loading";

function ProductFeatured() {
    const { data, isLoading, isFetching, isError } = useProductFeatured({
        isFeatured: true,
    });

    return (
        <>
            {!isFetching ? (
                <div className="space-y-4">
                    <ProductList title="Product Featured" data={data} />
                </div>
            ) : (
                <div>
                    <Loading />
                </div>
            )}
        </>
    );
}

export default ProductFeatured;
