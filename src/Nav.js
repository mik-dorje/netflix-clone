import React from 'react'
import "./Nav.css"





function Nav() {

    const [show, handleShow] = React.useState(false);



    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }
            else{
                handleShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, [])

    return (

    //use this method to add class for particular case just like show and hide class in vanilla javascript 
    <div className={`nav ${show && "nav__black"}`}>
        <img 
            className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
            alt='Netflix Logo'
        />
        <img
            className='nav__avatar'
            src='https://cdn.iconscout.com/icon/free/png-64/netflix-3521600-2945044.png'
            alt='Netflix Logo'
        />

    </div>
  )
}

export default Nav

