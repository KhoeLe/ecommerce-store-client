"use client";
import Info from "@/components/Info";
import Gallery from "@/components/gallery/Gallery";
import ProductList from "@/components/ui/product-list";
import { useProductFeatured, useProductId } from "@/hooks";
import Loading from "../../loading";

interface Props {
    params: {
        productId: string;
    };
}

function ProductPage({ params }: Props) {
    const {data: product} = useProductId(params.productId);
    const { data, isLoading, isFetching, error } = useProductFeatured({
        categoryId: product?.category?.id,
    });

    if (!data) {
        return null;
    }

    return (
        <>
            {!isFetching ? (
                <>
                    <div className="bg-white">
                        <div className="px-4 py-10 sm:px-6 lg:px-8">
                            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                                <Gallery images={product?.images} />
                                <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                                    <Info data={product as any} />
                                </div>
                            </div>
                            <hr className="my-10" />
                            <ProductList
                                    title="Related Items"
                                    data={data}
                                />
                        </div>
                    </div>
                </>
            ) : (
                <div>
                    <Loading />
                    </div>
            )}
        </>
    );
}

export default ProductPage;
