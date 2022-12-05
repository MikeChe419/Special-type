import './Search.sass'

import React from 'react'
export const Search = ({handleSearch}) => {

  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchInput, setSearchInput] = React.useState('')


  const handleOpenSearch = () => {
    setIsSearchOpen(true)
  }

  function submitSearch(event) {
    event.preventDefault()
  }

  return (
    <div className="search" >
      <form className={isSearchOpen ? "search__form" : 'search__form_type_hidden'} onSubmit={submitSearch}>
        <input type="text" className="search__input" onChange={handleSearch} placeholder="Найти..." />
      </form>
      <button className={isSearchOpen ? "search__button" : 'search__button search__button_type_hidden'} onClick={isSearchOpen ? submitSearch : handleOpenSearch}></button>
    </div>
  )

}

