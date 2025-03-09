import React from 'react'
import './Header.css'

const Header = () => {
    return (
        
        <div className='header'>
            
            <div className='header-contents-left'>
                <div className='info'>
                <h2>Order your favourite food here</h2>
                <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
                </div>
                <button>View Menu</button>
                
            </div>
            <div className='header-contents-right'>
                <img src='/header_img.png' alt=''></img>
            </div>
        </div>
    )
}

export default Header
