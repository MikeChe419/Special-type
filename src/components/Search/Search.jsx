import './Search.sass'

import React from 'react'
export const Search = () => {

  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchInput, setSearchInput] = React.useState('')


  const handleOpenSearch = () => {
    setIsSearchOpen(true)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    alert('запрос данных')
    ///запрос данных с апи или сторедж
    setIsSearchOpen(false)
  }

  const handleChangeValue = (event) => {
    const search = event.target.value.toLowerCase();
    setSearchInput(search);
  }

  function submitForm(event) {
    event.preventDefault()
  }

  return (
    <div className="search" >
      <form className={isSearchOpen ? "search__form" : 'search__form_type_hidden'} onSubmit={submitForm}>
        <input type="text" className="search__input" onChange={handleChangeValue} placeholder="Найти..." />
      </form>
      <button className={isSearchOpen ? "search__button" : 'search__button search__button_type_hidden'} onClick={isSearchOpen ? handleSearch : handleOpenSearch}></button>
    </div>
  )

}

