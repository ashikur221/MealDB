import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="bg-black lg:flex items-center lg:justify-around py-5">
                <div className="">
                    <img src="https://res.cloudinary.com/dramj404v/image/upload/v1736998571/Softvance/MealDB/tmeuwiao1nykev1tcot5.png" alt="" />
                </div>
                <div className="text-white hidden lg:block">
                    <ul className='flex gap-10'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Menu</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;