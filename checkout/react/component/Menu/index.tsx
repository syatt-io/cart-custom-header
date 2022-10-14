import React, { useEffect, useState } from 'react'
import { items } from './data'
import './styles.scss'

const Menu = () => {
  const [overDepartament, setOverDepartament] = useState<any>([])
  const [overCategory, setOverCategory] = useState({ category: [], brands: [] })
  const [overSubCategory, setOverSubCategory] = useState({
    category: [],
    name: '',
  })

  const handlerOverSubCategory = (category, name) => {
    setOverSubCategory((prev: any) => {
      return {
        ...prev,
        category,
        name,
      }
    })
  }

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

  const handlesOnmouseout = () => {
    setOverDepartament([])
    setOverCategory({ category: [], brands: [] })
    setOverSubCategory({ category: [], name: '' })
  }

  const handlerItem = (departament) => {
    setOverDepartament(departament)
    console.log('departament', departament)
  }

  useEffect(() => {
  }, [overDepartament, overCategory, overSubCategory])

  return (
    <>
      <ul className="departament_group">
        {items.map((item: any) => (
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
      {overDepartament?.length > 0 ? (
        <div className="megamenu" onMouseLeave={handlesOnmouseout}>
          {overDepartament?.length > 0 ? (
            <div className="categories_container">
              <div className="categories_container__categories">
                <ul className="categories_container__categories__group">
                  {overDepartament.map((departament: any) => (
                    <li
                      className={`categories_group__item ${
                        departament.menu === overCategory.category
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
                        {departament.name}s
                      </a>
                    </li>
                  ))}
                </ul>
                <div
                  className='container-cate'
                >
                  <ul className="categories_group__cate">
                    {overCategory !== undefined ? (
                      overCategory?.category?.map((category: any) => (
                        <li
                          className={`categories__item ${
                            category.name === overSubCategory.name
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
                      <div></div>
                    )}
                  </ul>
                  {overSubCategory?.category?.length === 0 ? (
										<div className='container-brands'>
											<h4 className='mega-menu__brands-title'>Top Brands</h4>
											<ul className="categories_group__subcate white">
                        {overCategory?.brands?.map((item: any) => (
                         <li className="categories_group__subcate_img">  <a href="">
                            <img src={item.image} />
                          </a>  </li>
                        ))}
                    </ul>
										</div>
                   
                  ) : (
										<ul className="categories_group__subcate gray">
                      {overSubCategory?.category?.map((subcategory: any) => (
                        <li>
                          <a href={subcategory.slug}>{subcategory.name}</a>
                        </li>
                      ))}
                    </ul>                    
                  )}
                </div>
                <div
                  style={{
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

export default Menu
