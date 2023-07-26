import ProductFeatured from "@/components/ProductFeatured";
import { getBillBoards, getProductsFeatured } from "@/actions";
import BillBoard from "@/components/ui/billboard";

export const revalidate = 0;

export default async function Home() {

    const products = await getProductsFeatured({ isFeatured: true });
    const billBoard = await getBillBoards("f3ec1652-4379-4c5a-87aa-db6d5616cd74")

    return (
        <>
            <div className="space-y-10 pb-10">
                <BillBoard data={billBoard} />
            </div>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductFeatured data={products} title="Product Feature" />
            </div>
        </>
    );
}
