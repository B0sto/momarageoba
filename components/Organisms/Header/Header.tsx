import HeaderRight from '@/components/Molecules/HeaderRight/HeaderRight'
import { SearchBar } from '@/components/Molecules/SearchBar/SearchBar'
import Logo from '@/public/Logo'
import React from 'react'

const Header = () => {
  return (
    <div className='flex pt-[30px] pb-[37px] items-center justify-between'>
        <Logo/>
        <SearchBar/>
        <HeaderRight/>
    </div>
  )
}

export default Header