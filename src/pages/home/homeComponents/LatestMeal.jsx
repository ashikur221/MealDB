import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const LatestMeal = () => {

    const axiosPublic = useAxiosPublic();
    const { data: random = [] } = useQuery({
        queryKey: ['random'],
        queryFn: async () => {
            const res = await axiosPublic.get('/random.php');
            return res.data?.meals[0];
        }
    })

    // console.log(random);

    return (
        <div className='w-10/12 mx-auto'>
            <p className="text-4xl text-center font-bold py-10">Our latest meal</p>
            <div className="">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5  mx-auto">
                        <div className="lg:w-4/5 mx-auto flex items-center flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full  h-96 object-cover object-center rounded" src={random?.strMealThumb} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{random?.strCategory}</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{random?.strMeal}</h1>
                                <p className=""> {random?.strTags}</p>

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
                                    <p className="font-bold">{random?.strArea}  </p>

                                </div>
                                <p className="leading-relaxed text-[12px]">{random?.strInstructions?.slice(0, 850)}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    <div className="flex">
                                        <span className="mr-3 text-black font-bold">Ingredients:</span>
                                        <p className="">{random?.strIngredient1}, {random?.strIngredient2}, {random?.strIngredient3}, {random?.strIngredient4}, {random?.strIngredient5}</p>
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
    );
};

export default LatestMeal;