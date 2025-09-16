import { useMutation, useQuery } from "@tanstack/react-query";
import cusFetch from "./Utils/custom";
import { useGlobalContext } from "./GlobalContext";

export const useFetchImage = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["/"],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { data } = await cusFetch.get(`/photos`);
      return data;
    },
  });
  return { data, isError, isLoading };
};

export const useSearchImage = () => {
  const { searchVal } = useGlobalContext();
  const { data, isError, isLoading } = useQuery({
    queryKey: ["searchImage", searchVal],
    queryFn: async ({ queryKey }) => {
      const [, search] = queryKey;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { data } = await cusFetch.get(`/search/photos`, {
        params: { page: 1, query: search },
      });
      return data;
    },
    enabled: !!searchVal,
  });
  const isFetching = searchVal ? true : false;
  return { data, isError, isLoading, isFetching };
};

// export const useSearchImage = () =>{
//   const {mutate:searchImage, isError, isPending} = useMutation({
//     mutationFn: async(searchInput) => cusFetch.post("/",{searchInput})
//   })
// }
