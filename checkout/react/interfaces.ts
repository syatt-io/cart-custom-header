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

  export interface OrderForm {
    allowManualPrice: boolean
    canEditData: boolean
    checkedInPickupPointId: boolean | null
    clientPreferencesData: ClientPreferencesData
    clientProfileData: ClientProfileData
    commercialConditionData: any // 🚧 Without information from official documentation
    customData: any // Fields by apps, users definition
    giftRegistryData: any // 🚧 Work in progress This guide is currently being written and published as content becomes available.
    hooksData: any // 🚧 Work in progress This guide is currently being written and published as content becomes available.
    items: Item[]
    invoiceData: any // 🚧 Work in progress This guide is currently being written and published as content becomes available.
    itemsOrdination: ItemsOrdination
    marketingData: MarketingData
    messages: Messages[]
    openTextField: OpenTextField
    paymentData: PaymentData
    products: any // 🚧 Work in progress This guide is currently being written and published as content becomes available.
    ratesAndBenefitsData: RatesAndBenefitsData
    salesChannel: string
    selectableGifts: any[] // 🚧 Work in progress This guide is currently being written and published as content becomes available.
    sellers: Seller[]
    shippingData: ShippingData
    storeId: string | null // 🚧 Work in progress This guide is currently being written and published as content becomes available.
    storePreferencesData: StorePreferencesData
    subscriptionData: any // 🚧 Without information from official documentation
    totalizers: Total[]
    value: number
    loggedIn: boolean
  }
  