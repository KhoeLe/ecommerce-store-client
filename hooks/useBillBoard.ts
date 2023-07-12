import { getBillBoards } from "@/actions/get-billboard";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useBillBoard = (id: string) => {
    const queryClient = useQueryClient();

    return useQuery<Billboard, Error>({
        queryFn: async () => {
          const data =  await getBillBoards(id);
          return data
        },
        queryKey: [CONSTANT.QUERY_KEY.BILLBOARD, id],
        initialData: () =>
            queryClient.getQueryData([CONSTANT.QUERY_KEY.BILLBOARD]),
        initialDataUpdatedAt: () =>
            queryClient.getQueryState([CONSTANT.QUERY_KEY.BILLBOARD])
                ?.dataUpdatedAt,
        staleTime: 1000,
    });
};
