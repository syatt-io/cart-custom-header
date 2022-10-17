export interface Departaments {
    items: {
      name: string
      slug: string
      departaments: {
        name: string
        slug: string
        brands: {
          image: string
          slug: string
        }[]
        menu: {
          name: string
          slug: string
          menu: {
            name: string
            slug: string
          }[]
        }[]
      }[]
    }[]
  }

  export interface Categories {
    name: string
    slug: string
    menu: []
    image: string
    category: any[];
    brands: any[];
  }