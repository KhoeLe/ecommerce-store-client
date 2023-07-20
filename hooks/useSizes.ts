import { getSizes } from "@/actions";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useSizes = () => {
    return useQuery<Color, Error>({
        queryFn: async () => {
            const data = await getSizes();
            return data;
        },
        queryKey: [CONSTANT.QUERY_KEY.SIZE],
        
    });
};
