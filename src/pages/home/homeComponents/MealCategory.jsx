import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const MealCategory = () => {

    const axiosPublic = useAxiosPublic();

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axiosPublic.get('/categories.php');
            return res.data.categories;
        },
    });

    // console.log(categories);

    return (
        <div>
            <p className="text-center text-4xl font-bold py-10">All Meal Category</p>
            <div className="w-10/12 mx-auto">
                <section className="text-gray-600 body-font">
                    <div className="container px-5  mx-auto">
                        <div className="flex flex-wrap -m-4">
                            {
                                categories?.map((item, index) =>
                                    <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full hover:border hover:rounded-lg hover:shadow hover:shadow-blue-500 ">
                                        <Link className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block border rounded-lg" src={item?.strCategoryThumb} />
                                        </Link>
                                        <div className="mt-4">
                                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item?.strCategory}</h3>
                                            <h2 className="text-gray-900 title-font text-lg font-medium">The {item.strCategory}</h2>
                                            <p className="mt-1 text-[12px]">{item?.strCategoryDescription.slice(0, 150)}</p>
                                        </div>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MealCategory;
