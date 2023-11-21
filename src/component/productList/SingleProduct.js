import React from 'react'
import Productimage from './singleproduct/Productimage'
import ProductName from './singleproduct/ProductName'
import ProductPrise from './singleproduct/ProductPrise'
import ProductSize from './singleproduct/ProductSize'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedProduct } from '../../store/actions/productAction'

//const product = {
 //   productName : "product 0",
 //   productType :"dress5",
  //  price:"8400",
 //   size:["xs","sm","L"],
   // images:[0,1],
   /* images :[
        "https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock",
        "https://www.shutterstock.com/image-photo/happy-asian-woman-holding-smartphone-260nw-2198262159.jpg"
    ],*/
//}

export default function ({product}) {
  const dispatch = useDispatch();
    const {images,productName,productType,price,size} = product;


     const handleClick = () => {
      dispatch(setSelectedProduct(product));
     };

      return (
    <div style={{padding:"8px"}} onClick={handleClick}>

        <Link to={"/details"} style={{textDecoration:"none",color:"black"}}>
            <div style={{padding:"5px",width:"100%",borderRadius:"10px",paddingBottom:"20px"}}>
            <Productimage images={images}/>
            <ProductName name={productName} type={productType}/>
            <ProductPrise value={price}/>
            <ProductSize avilableSize={size}/>
            </div>
        
        </Link>
    </div>
  )
}
