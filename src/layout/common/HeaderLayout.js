import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderLink from '../../component/common/header/HeaderLink';

const navLinks = [
  {
    text:"all items",
    link:"/all-items",

  },
  {
    text:"dressess",
    link:"/dresses",

  },
  {
    text:"seasosanal",
    link:"/seasosanal",

  },
  {
    text:"denims",
    link:"/denims",

  },
  {
    text:"tshirts",
    link:"/tshirts",

  },
  {
    text:"tops",
    link:"/tops",

  },
]

export default function HeaderLayout() {
  return (
    <div>
      <Navbar expand="lg"  style={{backgroundColor:"teal"}}>
      <Container fluid>
        <Navbar.Brand >
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/CJ_logo.svg/1200px-CJ_logo.svg.png'
          style={{width:"40px",height:"40px"}}
          />
          <span style={{paddingLeft:"15px"}}>CJfashion</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            //style={{ maxHeight: '100px' }}
            //navbarScroll
          >
            {navLinks.map((val,key) =>{
              return( 
                <div style={{padding:"0.5rem 1rem"}}>
                        <Nav.Item  key={key}>
                    <HeaderLink text={val.text} link={val.link}/>
                </Nav.Item> 
                </div>
               
              );
            })}

          
           
          </Nav>

          <Nav>
          <Nav.Item >
              <HeaderLink text={"cart"} link={"/cart"}/>
            </Nav.Item> 
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
