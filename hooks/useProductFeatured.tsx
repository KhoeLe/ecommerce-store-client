"use client"

import { getProductsFeatured } from "@/actions/get-products";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";


export const useProductFeatured = (query: Query) => {


  return useQuery<Product[], Error>({
    queryKey: [CONSTANT.QUERY_KEY.PRODUCTS_FEATURED, query],
    queryFn: () => {
      const data = getProductsFeatured(query);
      return data;
    },
  });

}
