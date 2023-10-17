import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { IPaginate } from '~Root/config/types';
import { IMyJournal } from '~Root/screens/MyJournal/types';
import axios from '~Root/config/axios';

const queryJournal = ({
  pageParam = 1,
  queryKey = [],
}: QueryFunctionContext): Promise<IPaginate<IMyJournal>> => {
  return axios.get(`/${queryKey[0]}?page=${pageParam}&query=${queryKey[1]}`);
};

export const useJournal = ({ query }: { query: string }) => {
  const result = useInfiniteQuery({
    queryKey: ['journal', query],
    queryFn: queryJournal,
    getNextPageParam: item => (item.page === item.pages ? null : item.page + 1),
  });

  return {
    result,
  };
};
