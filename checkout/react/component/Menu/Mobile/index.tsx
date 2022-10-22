import React, { useEffect, useState, useRef } from 'react'
import { Categories, Departaments } from '../../../interfaces'
import useWindowDimensions from '../../../utils/useWindowDimensions';
import SearchBar from '../../SearchBar';
import './styles.scss'

const Mobile = ({ items }: Departaments) => {
    const { width } = useWindowDimensions()
    const [categories, setCategories] = useState<any>([])
    const [isMobile, setIsMobile] = useState<boolean>()
    const [name, setName] = useState<any>([])
    const [fadeProp, setFadeProp] = useState({ fade: "fade-in" })
    const [menu, setMenu] = useState(false)
    const [preCategories, setPreCategories] = useState([])

    const getCategories = (categories1, name1) => {
        setTimeout(() => {
            if (categories1.length > 0) {
                setCategories(categories1)
                setName(name1)
            }
            else {
                setFadeProp({ fade: 'fade-in' })
            }

        }, 1000);
        if (categories1 !== undefined) {
            setFadeProp({
                fade: 'fade-out'
            })
            setTimeout(() => {
                setFadeProp({
                    fade: 'fade-in'
                })
            }, 1000);
        }
    }

    const prevCategories = () => {
        setCategories(preCategories)
    }

    useEffect(() => {
        const fff = categories.filter((lol) => lol.name === name )
        console.log("fff",fff)
    
    }, [categories, name])
    
    useEffect(() => {
        if (width < 690) {
          setIsMobile(true)
        }
        else {
          setIsMobile(false)
        }
        return () => {
          console.log('isMobile')
        }
      }, [isMobile, width])

    return (
        <section className='container-menu-mobile'>
            <button className='menu-mobile-hanburguer' type="button" onClick={() => setMenu(!menu)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="19"
                    viewBox="0 0 26 19">
                    <title>Mobile Navigation</title>
                    <g fill-rule="evenodd">
                        <rect width="25.492" height="3" rx="1.5"></rect>
                        <rect y="8" width="25.492" height="3" rx="1.5"></rect>
                        <rect y="16" width="25.492" height="3" rx="1.5"></rect>
                    </g>
                </svg>
            </button>
            {isMobile && <SearchBar/> } 
            {menu ? <span className='overlay'>overlay</span> : null}
            <div
                className="container_menu_mobile"
                style={{ left: menu ? '0' : '-100%' }}
            >
                <section className="container_menu_mobile__header-mobile">
                    {categories.length === 0 ?
                        <button className='container_menu_mobile__header-mobile__close-button' type="button" onClick={() => setMenu(!menu)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971">
                                <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z"></path>
                            </svg>
                        </button> :
                        <div className='header-back'>
                            <button className='header-back__button' type="button" onClick={() => prevCategories()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" className="svg-icon"><path d="M3.173 8.506l6.986 6.217a.99.99 0 010 1.496 1.129 1.129 0 01-1.506-.013L.842 9.242a.99.99 0 010-1.496L8.653.78a1.147 1.147 0 011.506 0 .99.99 0 010 1.496l-6.986 6.23zm-.537.994H2.5a1 1 0 110-2h.12l6.7-5.972c.042-.038.133-.038.175.003L2.799 7.5H15.5a1 1 0 010 2H2.787c4.477 3.977 6.712 5.968 6.707 5.973-.04.036-.124.035-.164-.003L2.636 9.5z" fill="#2296F3"></path></svg>
                                <span className="header-back__button__label">Back</span></button>
                            <h4 className='header-back__title'>{name}</h4>
                        </div>
                    }

                </section>
                <>
                    <section className="container_menu_mobile__body-mobile">
                        {categories.length === 0 ?
                            <ul className={`container_menu_mobile-group ${fadeProp.fade}`}>
                                {items.map((departament) => (
                                    <li className="container_menu_mobile-group__item">
                                        <a
                                            href={departament.slug}
                                            className="container_menu_mobile-group__item__link"
                                        >
                                            {departament.name}
                                        </a>
                                        <button
                                            className="container_menu_mobile-group__item__button"
                                            onClick={() => getCategories(departament.departaments, departament.name)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175" className="svg-icon svg-icon--arrow-right"><path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path></svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            : <ul className={`container_menu_mobile-group ${fadeProp.fade}`}>
                                {categories.map((category) => (
                                    <li className="container_menu_mobile-group__item">
                                        <a
                                            href={category.slug}
                                            className="container_menu_mobile-group__item__link"
                                        >
                                            {category.name}
                                        </a>
                                        {category?.menu?.length > 0 ? 
                                        <button
                                            className="container_menu_mobile-group__item__button"
                                            onClick={() => getCategories(category?.menu, category.name)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175" className="svg-icon svg-icon--arrow-right"><path d="M360.731 229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1 0s-5.3 13.8 0 19.1l215.5 215.5-215.5 215.5c-5.3 5.3-5.3 13.8 0 19.1 2.6 2.6 6.1 4 9.5 4 3.4 0 6.9-1.3 9.5-4l225.1-225.1c5.3-5.2 5.3-13.8.1-19z"></path></svg>
                                        </button> : <p/>}
                                    </li>
                                ))}
                            </ul>}
                    </section>
                    {categories.length === 0 &&
                        <section className="container_menu_mobile__footer-mobile">
                            <p className='mobile-nav__phone-email'><strong>1-800-463-3000</strong>
                                <span>support@cosmo.ca</span>
                            </p>
                            <ul className='mobile-nav__actions'>
                                <li className='mobile-nav__action'><a href="">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18"><title>Graduation cap</title><path d="M18.246 4.453L10.132.157a1.349 1.349 0 00-1.264 0L.754 4.453C.29 4.699 0 5.187 0 5.727s.289 1.029.754 1.275l.836.443-.005 3.45c0 .683.283 1.315.78 1.733 2.37 1.993 4.756 2.989 7.14 2.989 1.436 0 2.87-.369 4.3-1.09-.345.577-.742 1.345-.742 1.837 0 .902.71 1.636 1.583 1.636s1.583-.734 1.583-1.636c0-.619-.625-1.672-.989-2.232l.001-.457c.466-.315.933-.657 1.397-1.05a2.241 2.241 0 00.78-1.722l.005-3.466.822-.435c.466-.246.755-.735.755-1.275 0-.54-.289-1.028-.754-1.274zM3.335 11.426a.955.955 0 01-.335-.74L3.005 8l5.937 3.066a1.337 1.337 0 001.23 0L14 9.089l-.004 3.592c-3.562 2.105-7.067 1.693-10.661-1.255zM14.5 16c-.275 0-.5-.14-.5-.31.013-.106.214-.376.5-.69.284.312.485.58.5.689-.003.172-.226.311-.5.311zm1.496-5.248c0 .295-.13.577-.345.751A15.63 15.63 0 0115 12l.004-3.492L16 8l-.004 2.752zm1.893-5.07L14.534 7.42 11.1 5.69c.008-.064.019-.124.019-.189A1.63 1.63 0 009.5 3.864 1.63 1.63 0 007.881 5.5 1.63 1.63 0 009.5 7.136c.386 0 .737-.143 1.015-.372l2.677 1.35-3.599 1.864a.206.206 0 01-.185 0L1.11 5.682a.204.204 0 010-.365l8.297-4.295a.206.206 0 01.185 0l8.297 4.296c.053.027.11.09.11.182s-.057.155-.11.182zM10 5.5a.5.5 0 11-1.002-.002A.5.5 0 0110 5.5z"></path></svg>
                                    School music educators
                                </a>
                                </li>
                                <li className='mobile-nav__action'><a href="/pages/our-story">Our story</a></li>
                            </ul>
                        </section>}
                </>
            </div>
        </section>
    )
}

export default Mobile
