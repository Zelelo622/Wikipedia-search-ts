import React, { FC, useContext } from "react";
import Search from "../components/Search";
import SearchResult from "../components/SearchResult";
import { Context } from "..";
import { searchWikipedia } from "../api/searchWikipedia";
import { observer } from "mobx-react-lite";

const HomePage: FC = observer(() => {
  const context = useContext(Context);

  if (!context) {
    return null;
  }

  const { searchStore } = context;

  const handleSearch = async () => {
    searchWikipedia(searchStore);
  };

  return (
    <main className="main">
      <section className="search">
        <div className="container">
          <Search handleSearch={handleSearch} />
          <SearchResult
            searchResult={searchStore.searchResult}
            searchInfo={searchStore.searchInfo}
          />
        </div>
      </section>
    </main>
  );
});

export default HomePage;
