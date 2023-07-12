interface Billboard {
    id: string;
    label: string;
    imageUrl: string;
}

interface Product {
    id: string;
    category: Category;
    name: string;
    price: string;
    isFeatured: boolean;
    size: Size;
    color: Color;
    images: Image[];
}

interface Category {
    id: string;
    name: string;
    billboard: Billboard;
}

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

interface Image {
    id: string;
    url: string;
    productId: string;
}


interface Color {
    id: string;
    name: string;
    value: string;
    storeId: string;
}

interface Size {
    id: string;
    name: string;
    value: string;
    storeId: string;
}
