import "./Search.sass";
import useMediaQuery from "../../utils/hooks/useMediaQuery";
import { useEffect, useState } from "react";

export const Search = ({ handleSearch }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 900px)");

  useEffect(() => {
    if (isMobile) {
      handleOpenSearch()
    } else setIsSearchOpen(false)
  },[isMobile]);

  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  function submitSearch(event) {
    event.preventDefault();
  }

  return (
    <div className="search">
      <form
        className={isSearchOpen ? "search__form" : "search__form_type_hidden"}
        onSubmit={submitSearch}
      >
        <input
          type="text"
          className="search__input"
          onChange={handleSearch}
          placeholder="Найти..."
        />
      </form>
      <button
        className={
          isSearchOpen
            ? "search__button"
            : "search__button search__button_type_hidden"
        }
        onClick={isSearchOpen ? submitSearch : handleOpenSearch}
      ></button>
    </div>
  );
};
