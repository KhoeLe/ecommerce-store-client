"use client";

import { getProductId } from "@/actions/get-product";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useProductId = (productId: string) => {
    const queryClient = useQueryClient();

    return useQuery<Product, Error>({
        queryKey: [CONSTANT.QUERY_KEY.PRODUCT_ID, productId],
        queryFn: async () => {
            const data = await getProductId(productId);
            return data;
        },
        initialData: queryClient.getQueryData<Product>([
            CONSTANT.QUERY_KEY.PRODUCT_ID,
        ]),
        initialDataUpdatedAt: queryClient.getQueryState([
            CONSTANT.QUERY_KEY.PRODUCT_ID,
        ])?.dataUpdatedAt,
        staleTime: 1000,
    });
};
