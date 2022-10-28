import React, { useEffect, useState } from 'react'

import useWindowDimensions from '../../hooks/useWindowDimensions'
import { items } from './data'
import Desktop from './Desktop'
import Mobile from './Mobile'

const Menu = () => {
  const [isMobile, setIsMobile] = useState<boolean>()
  const { width } = useWindowDimensions()

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
      !isMobile ? <Desktop items={items} /> : <Mobile items={items}/>
  )
}

export default Menu