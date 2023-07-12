import ProductFeatured from "@/components/ProductFeatured";
import BillBoardDefault from "@/components/BillBoardDefault";

export default async function Home() {
    return (
        <>
            <div className="space-y-10 pb-10">
                <BillBoardDefault />
            </div>

            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductFeatured />
            </div>
        </>
    );
}
