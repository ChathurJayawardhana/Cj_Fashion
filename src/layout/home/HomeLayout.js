import React from 'react'
import HeaderLayout from '../common/HeaderLayout'
import FooterLayout from '../common/FooterLayout'
import CarasoulLaout from './CarasoulLaout'
import ButtonlistLayout from './ButtonlistLayout'
import About from '../../component/home/carasoul/About'
import { fetchProductListBegin,fetchProductList } from '../../store/actions/productAction'
import { useDispatch } from 'react-redux'

export default function HomeLayout() {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(fetchProductListBegin());
    dispatch(fetchProductList());
  },[]);
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
