import { getBillBoards } from "@/actions/get-billboard";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useBillBoard = (id: string) => {
    return useQuery<Billboard, Error>({
        queryKey: [CONSTANT.QUERY_KEY.BILLBOARD, id],
        queryFn: async () => {
            const data = await getBillBoards(id);
            return data;
        },
    });
};
