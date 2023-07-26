import Info from "@/components/Info";
import Gallery from "@/components/gallery/Gallery";
import ProductList from "@/components/ui/product-list";
import { getProductId, getProductsFeatured } from "@/actions";

interface Props {
    params: {
        productId: string;
    };
}

async function ProductPage({ params }: Props) {

    const productId = await getProductId(params.productId);

    const products = await getProductsFeatured({ categoryId: productId?.category?.id });

    return (
        <>
            <div className="bg-white">
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        <Gallery images={productId?.images} />
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={productId} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <ProductList
                        title="Related Items"
                        data={products}
                    />
                </div>
            </div>
        </>
    );
}

export default ProductPage;
