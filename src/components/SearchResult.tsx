import { observer } from "mobx-react-lite";
import React, { FC } from "react";
import { ISearchInfo, ISearchResult } from "../types/types";

interface ISearchResultProps {
  searchResult: ISearchResult[];
  searchInfo: ISearchInfo;
}

const SearchResult: FC<ISearchResultProps> = observer(
  ({ searchResult, searchInfo }) => {
    return (
      <div className="search__result">
        <p className="search__result-total">
          {searchInfo.totalhits ? "Search Result: " + searchInfo.totalhits : ""}
        </p>
        {searchResult.length === 0 ? (
          <h3 className="search__result-title">Ничего не найдено</h3>
        ) : (
          searchResult.map((result, i) => {
            const url = `https://ru.wikipedia.org/?curid=${result.pageid}`;
            return (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="search__result-link"
                key={i}
              >
                <div className="search__result-wrapper">
                  <h3 className="search__result-title">{result.title}</h3>
                  <p
                    className="search__result-text"
                    dangerouslySetInnerHTML={{ __html: result.snippet }}
                  ></p>
                </div>
              </a>
            );
          })
        )}
      </div>
    );
  }
);

export default SearchResult;
