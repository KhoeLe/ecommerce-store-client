import { getColors } from "@/actions";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useColor = () => {
    return useQuery<Color[], Error[]>({
        queryFn: async () => {
            const data = await getColors();
            return data;
        },
        queryKey: [CONSTANT.QUERY_KEY.COLOR],
    });
};
