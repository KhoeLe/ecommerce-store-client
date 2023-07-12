import { getSizes } from "@/actions";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useSizes = () => {
    const queryClient = useQueryClient();

    return useQuery<Color, Error>({
        queryFn: async () => {
          const data =  await getSizes();
          return data
        },
        queryKey: [CONSTANT.QUERY_KEY.SIZE ],
        initialData: () =>
            queryClient.getQueryData([CONSTANT.QUERY_KEY.SIZE]),
        initialDataUpdatedAt: () =>
            queryClient.getQueryState([CONSTANT.QUERY_KEY.SIZE])
                ?.dataUpdatedAt,
    });
};
