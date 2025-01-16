import React from 'react';
import MealCategory from './homeComponents/MealCategory';
import LatestMeal from './homeComponents/LatestMeal';
import Country from './homeComponents/Country';
import Ingredients from './homeComponents/Ingredients';

const Homepage = () => {
    return (
        <div>
            <Country/>
            <LatestMeal/>
            <MealCategory/>
            <Ingredients/>
        </div>
    );
};

export default Homepage;