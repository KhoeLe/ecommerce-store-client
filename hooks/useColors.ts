import { getColors } from "@/actions";
import { CONSTANT } from "@/lib/constant";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useColor = () => {
    const queryClient = useQueryClient();

    return useQuery<Color, Error>({
        queryFn: async () => {
          const data =  await getColors();
          return data
        },
        queryKey: [CONSTANT.QUERY_KEY.COLOR],
        initialData: () =>
            queryClient.getQueryData([CONSTANT.QUERY_KEY.COLOR]),
        initialDataUpdatedAt: () =>
            queryClient.getQueryState([CONSTANT.QUERY_KEY.COLOR])
                ?.dataUpdatedAt,
    });
};
