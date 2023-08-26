import { observer } from "mobx-react-lite";
import React, { FC, useContext } from "react";
import { Context } from "..";
import SearchSvg from "../assets/img/search.svg";

interface ISearchProps {
  handleSearch: () => void;
}

const Search: FC<ISearchProps> = observer(({ handleSearch }) => {
  const context = useContext(Context);

  if (!context) {
    return null;
  }

  const { searchStore } = context;

  return (
    <div className="search__wrapper">
      <h1 className="search__title">Wikipedia Search</h1>
      <form
        className="search__form"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          className="search__input"
          type="text"
          value={searchStore.searchQuery}
          placeholder="Поиск..."
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            searchStore.setSearchQuery(e.target.value);
          }}
        />
        <button className="search__btn" onClick={handleSearch}>
          <img src={SearchSvg} alt="Поиск" />
        </button>
      </form>
      <a
        className="search__btn-link"
        href="https://ru.wikipedia.org/wiki/Special:Random"
        target="_blank"
        rel="noreferrer"
      >
        Random!
      </a>
    </div>
  );
});

export default Search;
