import React from 'react'

const Footer = () => {
     let date = new Date().getFullYear()
    return (
        <>
         <footer>
             <p>copyright ©{date}</p>
         </footer>
        </>
    )
}

export default Footer
