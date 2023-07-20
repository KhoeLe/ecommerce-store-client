import { getCategories } from "@/actions";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useCategories = () => {
    return useQuery<Category, Error>({
        queryKey: [CONSTANT.QUERY_KEY.CATEGORIES],
        queryFn: async () => {
            const data = await getCategories();
            return data;
        },
    });
};
