"use client"

import { getProductsFeatured } from "@/actions/get-products";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";


export const useProductFeatured = (query: Query) => {
    const queryClient = useQueryClient();

    return  useQuery<Product[], Error>({
      queryKey: [CONSTANT.QUERY_KEY.PRODUCTS_FEATURED, query],
      queryFn:  () => {
        const data = getProductsFeatured(query);
        return data;
      },
      initialData: queryClient.getQueryData<Product[]>([CONSTANT.QUERY_KEY.PRODUCTS_FEATURED]),
      initialDataUpdatedAt: queryClient.getQueryState([CONSTANT.QUERY_KEY.PRODUCTS_FEATURED])?.dataUpdatedAt,
      staleTime: 1000,
    });

}
