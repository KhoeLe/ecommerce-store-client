import BillBoard from "@/components/ui/billboard";
import Filter from "./components/filter";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import MobileFilter from "./components/mobile-filter";
import { getCategoryId, getColors, getProductsFeatured, getSizes } from "@/actions";

interface Props {
    params: {
        categoryId: string;
    };
    searchParams: {
        colorId: string;
        sizeId: string;
    };
}

async function CategoryPage({ params, searchParams }: Props) {

    const categoryId = await getCategoryId(params.categoryId)

    const products = await getProductsFeatured({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId,
    });

    const colors = await getColors()
    const sizes = await getSizes()

    return (
        <>
            <div className="bg-white">
                <div className="space-y-10 pb-10">
                    <BillBoard data={categoryId?.billboard} />
                </div>

                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* for filter mobile */}
                        <MobileFilter sizes={sizes} colors={colors} />
                        <div className="hidden md:block lg:block">
                            <Filter
                                data={colors}
                                name="Color"
                                valueKey="colorId"
                            />
                            <Filter
                                data={sizes}
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
        </>
    );
}

export default CategoryPage;
