import React, { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import MealIngredient from './mealComponents/MealIngredient';
import MealCategory from './mealComponents/MealCategory';
import MealArea from './mealComponents/MealArea';

const Meals = () => {

    const [searchMeal, setSearchMeal] = useState([]);
    const [named, setNamed] = useState();

    const [mealIngredient, setMealIngredient] = useState([]);
    const [categoryMeal, setCategoryMeal]=useState([]);
    const [areaMeal, setAreaMeal]=useState([]);

    const axiosPublic = useAxiosPublic();
    const { data: meals = [] } = useQuery({
        queryKey: ['meals'],
        queryFn: async () => {
            const res = await axiosPublic.get('/search.php?f=a');
            return res.data?.meals;
        }
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const letter = form.letter.value;
        console.log(letter);

        const result = await axiosPublic.get(`/search.php?f=${letter}`)
        setSearchMeal(result.data?.meals);
    }

    const handleNameSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        console.log(name);

        const result = await axiosPublic.get(`/search.php?s=${name}`)
        setNamed(result.data?.meals[0]);
    }

    const handleIngridentSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const ingredient = form.ingredient.value;
        // console.log(ingredient);

        const result = await axiosPublic.get(`/filter.php?i=${ingredient}`)
        setMealIngredient(result.data?.meals);
    }

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        // console.log(ingredient);

        const result = await axiosPublic.get(`/filter.php?c=${category}`)
        setCategoryMeal(result.data?.meals);
    }

    const handleAreaSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const area = form.area.value;
        // console.log(ingredient);

        const result = await axiosPublic.get(`/filter.php?a=${area}`)
        setAreaMeal(result.data?.meals);
    }


    // console.log(mealIngredient);

    return (
        <div className='py-10'>
            <p className="text-center text-4xl font-bold py-10">We have so many Meals</p>
            <p className="text-center text-[12px]">Search by Meal's First letter</p>

            {/* Forms to search meals by first letter  */}
            <div className=" w-1/2 mx-auto py-10">
                <form action="" onSubmit={handleSubmit}>
                    <div className="">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" name='letter' className="grow" placeholder="Search by meal's first letter" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>

                    </div>
                    <div className="flex justify-center py-3">
                        <button className='bg-blue-500 text-white p-3 rounded-md'>Search</button>
                    </div>
                </form>
            </div>

            {/* search result  */}
            <div className="w-10/12 mx-auto">
                {
                    searchMeal ?
                        <div className="">
                            <div className="font-bold text-center text-2xl">Your search result</div>

                            <div className="flex flex-wrap rounded-lg p-5 ">
                                {
                                    searchMeal?.map((item, index) =>
                                        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border hover:rounded-lg hover:shadow hover:shadow-blue-500 ">
                                            <Link to={`/details/${item.idMeal}`} className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block border rounded-lg" src={item?.strMealThumb} />
                                            </Link>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item?.strCategory}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">The {item.strMeal}</h2>
                                                <p className="mt-1 text-[12px]">{item?.strInstructions.slice(0, 150)}</p>
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                        :
                        <div className="w-1/3 mx-auto">
                            No data found
                            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1737007422/Softvance/MealDB/e0frlhxli8okzv8kht3c.png" alt="" />
                        </div>

                }
            </div>

            {/* some of our meals  */}
            <div className="w-10/12 mx-auto">
                <section className="text-gray-600 body-font">
                    <div className="container px-5  mx-auto">
                        <div className="text-center text-2xl font-bold py-10">Some of our meals</div>
                        <div className="flex flex-wrap -m-4">
                            {
                                meals?.map((item, index) =>
                                    <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border hover:rounded-lg hover:shadow hover:shadow-blue-500 ">
                                        <Link to={`/details/${item.idMeal}`} className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block border rounded-lg" src={item?.strMealThumb} />
                                        </Link>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item?.strCategory}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">The {item.strMeal}</h2>
                                            <p className="mt-1 text-[12px]">{item?.strInstructions.slice(0, 150)}</p>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </section>
            </div>

            <div className="Search by name py-20">
                <div className="">
                    <p className="text-center text-2xl font-bold">Search by Meal's Name</p>
                    <div className=" w-1/2 mx-auto py-10">
                        <form action="" onSubmit={handleNameSubmit}>
                            <div className="">
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name='name' className="grow" placeholder="Search by meal Name" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>

                            </div>
                            <div className="flex justify-center py-3">
                                <button className='bg-blue-500 text-white p-3 rounded-md'>Search</button>
                            </div>
                        </form>
                    </div>
                </div>

                {
                    named ? <>
                        <div className='w-10/12 mx-auto'>
                            <p className="text-4xl text-center font-bold py-10">Your Search Result</p>
                            <div className="border rounded-lg shadow-lg">
                                <section className="text-gray-600 body-font overflow-hidden">
                                    <div className="container px-5  mx-auto">
                                        <div className="lg:w-4/5 mx-auto flex items-center flex-wrap">
                                            <img alt="ecommerce" className="lg:w-1/2 w-full  h-96 object-cover object-center rounded" src={named?.strMealThumb} />
                                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{named?.strCategory}</h2>
                                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{named?.strMeal}</h1>
                                                <p className=""> {named?.strTags}</p>

                                                <div className="flex mb-4">
                                                    <span className="flex items-center">
                                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                                        </svg>
                                                        <span className="text-gray-600 ml-3"></span>
                                                    </span>
                                                    <p className="font-bold">{named?.strArea}  </p>

                                                </div>
                                                <p className="leading-relaxed text-[12px]">{named?.strInstructions?.slice(0, 850)}</p>
                                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                                    <div className="flex">
                                                        <span className="mr-3 text-black font-bold">Ingredients:</span>
                                                        <p className="">{named?.strIngredient1}, {named?.strIngredient2}, {named?.strIngredient3}, {named?.strIngredient4}, {named?.strIngredient5}</p>
                                                    </div>

                                                </div>
                                                <div className="flex">
                                                    <div>
                                                        <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
                                                    </div>

                                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </> : <></>
                }
            </div>

            <div className="Search by ingredient py-20">
                <MealIngredient />

                <div className=" py-10">
                    <p className="text-center text-2xl font-bold">Search by Meal's ingreditents</p>
                    <div className=" w-1/2 mx-auto py-10">
                        <form action="" onSubmit={handleIngridentSubmit}>
                            <div className="">
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name='ingredient' className="grow" placeholder="Search by meal ingredient" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>

                            </div>
                            <div className="flex justify-center py-3">
                                <button className='bg-blue-500 text-white p-3 rounded-md'>Search</button>
                            </div>
                        </form>
                    </div>
                </div>

                {
                    mealIngredient ? <>
                        <div className='w-10/12 mx-auto'>
                            <p className="text-4xl text-center font-bold py-10">Your Search Result</p>
                            <div className="flex flex-wrap -m-4">
                                {
                                    mealIngredient?.map((item, index) =>
                                        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border hover:rounded-lg hover:shadow hover:shadow-blue-500 ">
                                            <Link to={`/details/${item.idMeal}`} className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block border rounded-lg" src={item?.strMealThumb} />
                                            </Link>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item?.idMeal}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">The {item.strMeal}</h2>
                                                {/* <p className="mt-1 text-[12px]">{item?.strInstructions.slice(0, 150)}</p> */}
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </> : <>
                        <div className="w-1/3 mx-auto">
                            No data found
                            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1737007422/Softvance/MealDB/e0frlhxli8okzv8kht3c.png" alt="" />
                        </div>
                    </>
                }
            </div>


            <div className="Search by category py-20">
                <MealCategory/>

                <div className=" py-10">
                    <p className="text-center text-2xl font-bold">Search by Meal's Category</p>
                    <div className=" w-1/2 mx-auto py-10">
                        <form action="" onSubmit={handleCategorySubmit}>
                            <div className="">
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name='category' className="grow" placeholder="Search by meal category" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>

                            </div>
                            <div className="flex justify-center py-3">
                                <button className='bg-blue-500 text-white p-3 rounded-md'>Search</button>
                            </div>
                        </form>
                    </div>
                </div>

                {
                    categoryMeal ? <>
                        <div className='w-10/12 mx-auto'>
                            <p className="text-4xl text-center font-bold py-10">Your Search Result</p>
                            <div className="flex flex-wrap -m-4">
                                {
                                    categoryMeal?.map((item, index) =>
                                        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border hover:rounded-lg hover:shadow hover:shadow-blue-500 ">
                                            <Link to={`/details/${item.idMeal}`} className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block border rounded-lg" src={item?.strMealThumb} />
                                            </Link>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item?.idMeal}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">The {item.strMeal}</h2>
                                                {/* <p className="mt-1 text-[12px]">{item?.strInstructions.slice(0, 150)}</p> */}
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </> : <>
                        <div className="w-1/3 mx-auto">
                            No data found
                            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1737007422/Softvance/MealDB/e0frlhxli8okzv8kht3c.png" alt="" />
                        </div>
                    </>
                }
            </div>


            <div className="Search by area py-20">
                <MealArea/>

                <div className=" py-10">
                    <p className="text-center text-2xl font-bold">Search by Meal's Area</p>
                    <div className=" w-1/2 mx-auto py-10">
                        <form action="" onSubmit={handleAreaSubmit}>
                            <div className="">
                                <label className="input input-bordered flex items-center gap-2">
                                    <input type="text" name='area' className="grow" placeholder="Search by area" />
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 16 16"
                                        fill="currentColor"
                                        className="h-4 w-4 opacity-70">
                                        <path
                                            fillRule="evenodd"
                                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                            clipRule="evenodd" />
                                    </svg>
                                </label>

                            </div>
                            <div className="flex justify-center py-3">
                                <button className='bg-blue-500 text-white p-3 rounded-md'>Search</button>
                            </div>
                        </form>
                    </div>
                </div>

                {
                    categoryMeal ? <>
                        <div className='w-10/12 mx-auto'>
                            <p className="text-4xl text-center font-bold py-10">Your Search Result</p>
                            <div className="flex flex-wrap -m-4">
                                {
                                    areaMeal?.map((item, index) =>
                                        <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border hover:rounded-lg hover:shadow hover:shadow-blue-500 ">
                                            <Link to={`/details/${item.idMeal}`} className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block border rounded-lg" src={item?.strMealThumb} />
                                            </Link>
                                            <div className="mt-4">
                                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item?.idMeal}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">The {item.strMeal}</h2>
                                                {/* <p className="mt-1 text-[12px]">{item?.strInstructions.slice(0, 150)}</p> */}
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </> : <>
                        <div className="w-1/3 mx-auto">
                            No data found
                            <img src="https://res.cloudinary.com/dramj404v/image/upload/v1737007422/Softvance/MealDB/e0frlhxli8okzv8kht3c.png" alt="" />
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Meals;