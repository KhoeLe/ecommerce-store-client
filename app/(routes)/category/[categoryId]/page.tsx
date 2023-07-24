"use client";

import BillBoard from "@/components/ui/billboard";
import { useCategoryId, useProductFeatured } from "@/hooks";
import Filter from "./components/filter";
import { useColor } from "@/hooks/useColors";
import { useSizes } from "@/hooks/useSizes";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "./components/mobile-filter";
import Loading from "./loading";
import { useMemo } from "react";

interface Props {
    params: {
        categoryId: string;
    };
    searchParams: {
        colorId: string;
        sizeId: string;
    };
}

function CategoryPage({ params, searchParams }: Props) {
    const { data } = useCategoryId(params.categoryId);
    const {
        data: products,
        isLoading,
    } = useProductFeatured({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    });
    const sizes: Size[] | undefined = useSizes().data as Size[] | undefined;
    const colors: Color[] | undefined = useColor().data as Color[] | undefined;

    const combinedData = useMemo(() => {
        return [...(colors || []), ...(sizes || [])];
    }, [colors, sizes]);

    return (
        <>
            {!isLoading ? (
                <div className="bg-white">
                    <div className="space-y-10 pb-10">
                        <BillBoard data={data?.billboard} />
                    </div>

                    <div className="px-4 sm:px-6 lg:px-8 pb-24">
                        <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                            {/* for filter mobile */}
                            <MobileFilter sizes={combinedData} colors={combinedData} />
                            <div className="hidden md:block lg:block">
                                <Filter
                                    data={combinedData}
                                    name="Color"
                                    valueKey="colorId"
                                />
                                <Filter
                                    data={combinedData}
                                    name="Size"
                                    valueKey="sizeId"
                                />
                            </div>

                            <div className="mt-6 lg:col-span-4 lg:mt-0">
                                {products?.length === 0 && <NoResults />}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                    {products?.map((item) => (
                                        <ProductCard
                                            key={item.id}
                                            data={item}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default CategoryPage;
