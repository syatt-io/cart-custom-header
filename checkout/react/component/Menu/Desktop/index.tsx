import React, { useEffect, useState } from 'react'
import { Categories, Departments } from '../../../interfaces'
import './styles.scss'


const Desktop = ({ items }: Departments) => {
  const [overDepartment, setOverDepartment] = useState<[]>([])
  const [overCategory, setOverCategory] = useState({ category: [], brands: [] })
  const [allCategories, setAllCategories] = useState('')
  const [allCategories2, setAllCategories2] = useState('')
  const [overSubCategory, setOverSubCategory] = useState({
    category: [],
    name: '',
  })

  const handlerOverCategory = (category, brands, all_categories) => {
    setOverSubCategory({ category: [], name: '' })
    setAllCategories(all_categories)
    setOverCategory((prev: any) => {
      return {
        ...prev,
        category,
        brands,
      }
    })
  }

  const handlerOverSubCategory = (category, name, all_categories) => {
    setAllCategories2(all_categories)
    setOverSubCategory((prev) => {
      return {
        ...prev,
        category,
        name,
      }
    })
  }

  const handlesOnmouseout = () => {
    setOverDepartment([])
    setOverCategory({ category: [], brands: [] })
    setOverSubCategory({ category: [], name: '' })
  }

  const handlerItem = (department) => {
    setOverDepartment(department)
    setOverCategory((prev: any) => {
      return {
        ...prev,
        category: department[0]?.menu,
        brands: department[0]?.brands,
      }
    })
  }

  useEffect(() => {}, [allCategories, allCategories2, overDepartment, overCategory, overSubCategory])

  return (
    <>
      <div className="departments-sections">
        <ul className="departments_group">
          {items?.map((item) => (
            <li
              onMouseOver={() => handlerItem(item?.menu)}
              className={`departments_group__item ${overDepartment === item?.menu ? 'departments_group__item--active' : ''}`}
            >
              <a className="departments_group__item__link" href={item.slug}>
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
      {overDepartment?.length > 0 ? (
        <div className="megamenu" onMouseLeave={handlesOnmouseout}>
          {overDepartment?.length > 0 ? (
            <div className="categories_container">
              <div className="categories_container__categories">
                <ul
                  className={`categories_container__categories__group ${overCategory?.category?.length > 0 ? 'border-left' : null
                    }`}
                >
                  {overDepartment.map((department: any) => (
                    <li
                      className={`categories_group__item ${department.menu === overCategory.category
                          ? 'active'
                          : ''
                        }`}
                      onMouseOver={() =>
                        handlerOverCategory(
                          department.menu,
                          department.brands,
                          department.all_categories
                        )
                      }
                    >
                      <a
                        className="categories_group__item__link"
                        href={department.slug}
                      >
                        {department.name}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="container-cate">
                  <ul className="categories_group__cate">
                    {overCategory !== undefined ? (
                      overCategory?.category?.map((category: Categories) => (
                        <li
                          className={`categories__item 
                           ${category.name === overSubCategory.name && 'active'}
                           ${category.name === overSubCategory.name &&
                            category.menu?.length == 0 &&
                            'brand-active'
                            }
                            `}
                          onMouseOver={() =>
                            handlerOverSubCategory(category.menu, category.name, category.all_categories)
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
                      <div />
                    )}
                    {overCategory?.category.length > 0 && (
                      <li className="categories_group__subcate_all-brands">
                        <a href={allCategories}>SHOP ALL</a>
                      </li>
                    )}
                  </ul>

                  {overSubCategory?.category?.length === 0 ? (
                    <div className="container-brands">
                      {overCategory?.category?.length > 0 && (
                        <>
                          <h4 className="mega-menu__brands-title">
                            TOP BRANDS
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
                        {overCategory?.brands.length > 0 ? (
                          <li className="categories_group__subcate_all-brands">
                            <a href={allCategories}>Shop All Brands</a>
                          </li>
                        ) : null}
                      </ul>
                    </div>
                  ) : (
                    <ul className="categories_group__subcate gray">
                      {overSubCategory?.category
                        ?.slice(0, 18)
                        ?.map((subcategory: Categories) => (
                          <li className="categories_group__subcate_item">
                            <a href={subcategory.slug}>{subcategory.name}</a>
                          </li>
                        ))}
                      <li className="categories_group__subcate_all-brands absolute">
                        <a href={allCategories2}>Shop More</a>
                      </li>
                    </ul>
                  )}
                </div>
                <div
                  style={{
                    borderLeft:
                      overCategory.category.length > 0
                        ? '1px solid #dbdbdb'
                        : 'none',
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
