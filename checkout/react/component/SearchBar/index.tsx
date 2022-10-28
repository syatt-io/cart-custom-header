import React, { useEffect, useRef, useState } from 'react'
import useOutsideClick from '../../hooks/useOutsideClick'
import './styles.scss'

const SearchBar = () => {
  const [search, setSearch] = useState<string>()
  const [showSearch, setShowSearch] = useState(false)
  const box = useRef(null)

  useOutsideClick(box, 'click', () => {
    setShowSearch(false)
  })

  const handleOnChange = (event) => {
    setSearch(event.target.value)
  }

  const handlerSubmit = () => {
      location.href = `/${search}?_q=${search}&map=ft`
       setShowSearch(false)
  }

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
       if(search !== ''){
         handlerSubmit()
       }
      }
    }

    document.addEventListener('keydown', keyDownHandler)

    return () => {
      document.removeEventListener('keydown', keyDownHandler)
    }
  }, [search])

  useEffect(() => {
    return () => {
      console.log('fin!')
    }
  }, [search])

  return (
    <div ref={box}>
      <button
        className="menu-mobile-hanburguer"
        onClick={() => setShowSearch(!showSearch)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="22"
          viewBox="0 0 22 22"
          className="svg-icon svg-icon--header-search"
          data-header-search-trigger-target=""
        >
          <title>Search</title>
          <path d="M20.347 18.486l-4.366-4.345a8.767 8.767 0 001.751-5.275C17.732 3.99 13.764 0 8.866 0 3.99 0 0 3.968 0 8.866a8.864 8.864 0 0013.809 7.359l4.41 4.41c.289.289.688.444 1.065.444.376 0 .775-.155 1.063-.443a1.553 1.553 0 000-2.15zM3.014 8.866c0-3.236 2.638-5.874 5.852-5.874s5.852 2.638 5.852 5.852c0 3.214-2.616 5.874-5.852 5.874S3.014 12.08 3.014 8.866z"></path>
        </svg>
        {showSearch && <span className='header__utilities-item-arrow' />}
      </button>
      {showSearch && (
        <section className="header-search">
          <form className="header-search__form" onSubmit={handlerSubmit}>
            <input
              placeholder="What can we help you find?"
              className="header-search__input"
              onChange={(e) => handleOnChange(e)}
              type="text"
              name="search-bar"
              value={search}
              autoComplete="off"
            />
          </form>
        </section>
      )}
    </div>
  )
}

export default SearchBar
