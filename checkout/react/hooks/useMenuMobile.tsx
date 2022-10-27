import React, { useEffect, useRef, useState } from 'react'
import './styles.scss'

interface MenuMobileProps {
    children?: any
    title?: string
    url?: string
    classNameGroup?: string
    classNameItem?: string
    showArrow?: boolean
    hasSubMenu?: boolean
    key: number
    onScroll?: () => void
}

const UseMenuMobile = ({
    onScroll,
    children,
    title,
    url,
    showArrow,
    hasSubMenu,
    key,
}: MenuMobileProps) => {
    const [active, setActive] = useState('')
    const [height, setHeight] = useState('0px')
    const [opacity, setOpacity] = useState('active-departament')
    const content = useRef<any>()
    const sensitive = useRef<any>()

    const toggleAccordion = () => {
        setActive(active === '' ? 'active' : '')
        setHeight(active === 'active' ? '0px' : `100vh`)
        setOpacity(active === 'active' ? 'active-departament' : 'rotate')
    }

    useEffect(() => {}, [active, height, opacity])

    return (
        <div>
            <div className={`container-menu`} ref={sensitive} key={key}>
                {hasSubMenu ? (
                    <div className="item-mobile">
                        <a className="item-mobile__link">{title}</a>
                        <button
                            className="item-mobile__button"
                            onScroll={onScroll}
                            onClick={toggleAccordion}
                        >
                            {showArrow ? <span className="" /> : ''}
                        </button>
                    </div>
                ) : (
                    <div className="item-mobile">
                        <a className="item-mobile__link" href={url}>
                            {title}
                        </a>
                    </div>
                )}

                <div
                    ref={content}
                    style={{ maxHeight: `${height}` }}
                    className={`accordion__content ${active === 'active' ? 'fadeIn' : 'fadeOut'}`}
                >
                    <div className="header-back">
                        <button
                            className="header-back__button"
                            type="button"
                            onClick={toggleAccordion}
                        > <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" className="svg-icon"><path d="M3.173 8.506l6.986 6.217a.99.99 0 010 1.496 1.129 1.129 0 01-1.506-.013L.842 9.242a.99.99 0 010-1.496L8.653.78a1.147 1.147 0 011.506 0 .99.99 0 010 1.496l-6.986 6.23zm-.537.994H2.5a1 1 0 110-2h.12l6.7-5.972c.042-.038.133-.038.175.003L2.799 7.5H15.5a1 1 0 010 2H2.787c4.477 3.977 6.712 5.968 6.707 5.973-.04.036-.124.035-.164-.003L2.636 9.5z" fill="#2296F3"></path></svg>
                            <span className="header-back__button__label">Back</span>
                        </button>
                        <h4 className="header-back__title">{title}</h4>
                    </div>
                    <div className="container_menu_mobile__body-mobile">{children}</div>
                </div>
            </div>
        </div>
    )
}
export default UseMenuMobile
