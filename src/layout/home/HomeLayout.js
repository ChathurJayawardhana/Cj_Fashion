import React from 'react'
import HeaderLayout from '../common/HeaderLayout'
import FooterLayout from '../common/FooterLayout'
import CarasoulLaout from './CarasoulLaout'
import ButtonlistLayout from './ButtonlistLayout'
import About from '../../component/home/carasoul/About'

export default function HomeLayout() {
  return (
    <div>
    <HeaderLayout/>
     <CarasoulLaout/>
      <About/>
      <ButtonlistLayout/>
      <FooterLayout/>
    </div>
  )
}
