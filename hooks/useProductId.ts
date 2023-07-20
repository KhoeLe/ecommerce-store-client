"use client";

import { getProductId } from "@/actions/get-product";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useProductId = (productId: string) => {
    return useQuery<Product, Error>({
        queryKey: [CONSTANT.QUERY_KEY.PRODUCT_ID, productId],
        queryFn: async () => {
            const data = await getProductId(productId);
            return data;
        },
    });
};
