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
            src='data:image/png;base64,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'
            alt='Netflix Logo'
        />

    </div>
  )
}

export default Nav

