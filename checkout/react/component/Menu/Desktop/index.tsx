import React, { useEffect, useState } from 'react'
import { Categories, Departaments } from '../../../interfaces'
import './styles.scss'


const Desktop = ({ items }: Departaments) => {
  const [overDepartament, setOverDepartament] = useState<any>([])
  const [overCategory, setOverCategory] = useState({ category: [], brands: [] })
  const [overSubCategory, setOverSubCategory] = useState({
    category: [],
    name: '',
  })

  const handlerOverCategory = (category, brands) => {
    setOverSubCategory({ category: [], name: '' })
    setOverCategory((prev: any) => {
      return {
        ...prev,
        category,
        brands,
      }
    })
  }

  const handlerOverSubCategory = (category, name) => {
    setOverSubCategory((prev: any) => {
      return {
        ...prev,
        category,
        name,
      }
    })
  }

  const handlesOnmouseout = () => {
    //setOverDepartament([])
    //setOverCategory({ category: [], brands: [] })
    //setOverSubCategory({ category: [], name: '' })
  }

  const handlerItem = (departament) => {
    setOverDepartament(departament)
    setOverCategory((prev: any) => {
      return {
        ...prev,
        category: departament[0]?.menu,
        brands: departament[0]?.brands,
      }
    })
  }

  useEffect(() => {console.log(overDepartament, overCategory) }, [overDepartament, overCategory, overSubCategory])

  return (
    <>
      <div className="departaments-sections">
        <ul className="departament_group">
          {items?.map((item) => (
            <li
              onMouseOver={() => handlerItem(item?.departaments)}
              className="departament_group__item"
            >
              <a className="departament_group__item__link" href={item.slug}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="header__contact">
          <div className="header__contact-phone">1-800-463-3000</div>
          <div className="header__contact-email">support@cosmo.ca</div>
        </div>
      </div>
      { overDepartament?.length > 0 ? (
        <div className="megamenu" onMouseLeave={handlesOnmouseout}>
          {overDepartament?.length > 0 ? (
            <div className="categories_container">
              <div className="categories_container__categories">
                <ul className={`categories_container__categories__group ${overCategory?.category?.length > 0 ? 'border-left' : null}`}>
                  {overDepartament.map((departament: any) => (
                    <li
                      className={`categories_group__item ${departament.menu === overCategory.category
                          ? 'active'
                          : ''
                        }`}
                      onMouseOver={() =>
                        handlerOverCategory(
                          departament.menu,
                          departament.brands
                        )
                      }
                    >
                      <a
                        className="categories_group__item__link"
                        href={departament.slug}
                      >
                        {departament.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="container-cate">
                  <ul className="categories_group__cate">
                    {overCategory !== undefined ? (
                      overCategory?.category?.map((category: Categories) => (
                        <li
                          className={`categories__item ${category.name === overSubCategory.name
                              ? 'active'
                              : ''
                            }`}
                          onMouseOver={() =>
                            handlerOverSubCategory(category.menu, category.name)
                          }
                        >
                          <a
                            className="categories__item__link"
                            href={category.slug}
                          >
                            {category.name}
                          </a>
                        </li>
                      ))
                    ) : (
                      <div/>
                    )}
                    {overCategory?.category.length > 0 
                      && 
                    <li className='categories_group__subcate_all-brands'><a href=''>SHOP ALL</a></li> }
                  </ul>

                  {overSubCategory?.category?.length === 0 ? (
                    <div className="container-brands">
                      {overCategory?.category?.length > 0 && (
                        <>
                          <h4 className="mega-menu__brands-title">
                            Top Brands
                          </h4>
                        </>
                      )}
                      <ul className="categories_group__subcate white">
                        {overCategory?.brands?.map((item: Categories) => (
                          <li className="categories_group__subcate_img">
                            {' '}
                            <a href="">
                              <img src={item.image} />
                            </a>{' '}
                          </li>

                        ))}
                        {overCategory?.brands.length > 0 
                        ? 
                        <li className='categories_group__subcate_all-brands'><a href=''>Shop All Brands</a></li>
                      : null}
                        
                      </ul>
                    </div>
                  ) : (
                    <ul className="categories_group__subcate gray">
                      {overSubCategory?.category?.slice(0, 18)?.map((subcategory: Categories) => (
                        <li className="categories_group__subcate_item">
                          <a href={subcategory.slug}>{subcategory.name}</a>
                        </li>
                       
                      ))}
                     <li className='categories_group__subcate_all-brands absolute'><a href=''>Shop More</a></li> 
                    </ul>
                  )}
                </div>
                <div
                  style={{
                    borderLeft: overCategory.category.length > 0 ? '1px solid #dbdbdb' : 'none',
                    width: '20%',
                    display: 'flex',
                    backgroundColor: '#fff',
                  }}
                />
              </div>
            </div>
          ) : (
            <div />
          )}
        </div>
      ) : null}
    </>
  )
}

//Menu.schema = {
//title: "MegaMenu Checkout",
//description: 'admin/editor.MegaMenu.description'
//}

export default Desktop
