import { makeAutoObservable } from "mobx";
import { ISearchInfo, ISearchResult } from "../types/types";

export default class SearchStore {
  private _searchQuery: string;
  private _searchResult: ISearchResult[];
  private _searchInfo: ISearchInfo;

  constructor() {
    this._searchQuery = "";
    this._searchResult = [];
    this._searchInfo = { totalhits: 0 };
    makeAutoObservable(this);
  }

  setSearchQuery(searchQuery: string) {
    this._searchQuery = searchQuery;
  }

  setSearchResult(searchResult: ISearchResult[]) {
    this._searchResult = searchResult;
  }

  setSearchInfo(searchInfo: ISearchInfo) {
    this._searchInfo = searchInfo;
  }

  get searchQuery(): string {
    return this._searchQuery;
  }

  get searchResult(): ISearchResult[] {
    return this._searchResult;
  }

  get searchInfo(): ISearchInfo {
    return this._searchInfo;
  }
}
