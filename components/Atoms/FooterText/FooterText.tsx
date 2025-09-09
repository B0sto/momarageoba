import React from 'react'

const FooterText = ({text}: {text: string}) => {
  return (
    <li className='text-[15px] font-lato text-[#253D4E] leading-[24px] cursor-pointer'>{text}</li>
  )
}

export default FooterText