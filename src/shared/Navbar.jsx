import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="bg-black lg:flex items-center lg:justify-around py-5">
                <div className="">
                    <Link to={'/'}>
                        <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736998571/Softvance/MealDB/tmeuwiao1nykev1tcot5.png" alt="" />
                    </Link>
                </div>
                <div className="text-white hidden lg:block">
                    <ul className='flex gap-10'>
                        <Link to={'/'}><li>Home</li></Link>
                        <Link to={'/meals'}><li>Our Meals</li></Link>
                        <li>Contact Us</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;