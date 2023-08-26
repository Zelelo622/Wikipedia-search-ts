import axios from "axios";
import SearchStore from "../store/SearchStore";
import { ISearchInfo, ISearchResult } from "../types/types";

export const searchWikipedia = async (searchStore: SearchStore) => {
  if (searchStore.searchQuery === "") return;
  const endpoint = `https://ru.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=40&srsearch=${searchStore.searchQuery}`;
  axios.get(endpoint).then((res) => {
    const persons: {
      query: { search: ISearchResult[]; searchinfo: ISearchInfo };
    } = res.data;
    searchStore.setSearchResult(persons.query.search);
    searchStore.setSearchInfo(persons.query.searchinfo);
  });
};
