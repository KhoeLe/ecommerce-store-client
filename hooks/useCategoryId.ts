"use client";

import { getCategoryId } from "@/actions/get-categoryId";
import { getProductId } from "@/actions/get-product";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useCategoryId = (id: string) => {
    const queryClient = useQueryClient();

    return useQuery<Category, Error>({
        queryKey: [CONSTANT.QUERY_KEY.CATEGORY_ID, id],
        queryFn: async () => {
            const data = await getCategoryId(id);
            return data;
        },
        initialData: queryClient.getQueryData<Category>([
            CONSTANT.QUERY_KEY.CATEGORY_ID,
        ]),
        initialDataUpdatedAt: queryClient.getQueryState([
            CONSTANT.QUERY_KEY.CATEGORY_ID,
        ])?.dataUpdatedAt,
        staleTime: 1000,
    });
};
