import ProductList from "./ui/product-list";

interface Props {
    title: string;
    data: Product[] | undefined;
}


async function ProductFeatured({ title, data }: Props) {

    return (
        <>
            <div className="space-y-4">
                <ProductList title="Product Featured" data={data} />
            </div>
        </>
    );
}

export default ProductFeatured;
