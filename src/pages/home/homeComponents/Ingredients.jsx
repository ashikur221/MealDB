import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Ingredients = () => {

    const axiosPublic = useAxiosPublic();
    const { data: ingridients = [] } = useQuery({
        queryKey: ['ingridients'],
        queryFn: async () => {
            const res = await axiosPublic.get('/list.php?i=list');
            return res.data?.meals;
        }
    })

    console.log(ingridients);

    return (
        <div>
            <p className="text-4xl text-center font-bold py-10">Our Main Ingredients</p>
            <div className="">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto">

                        <div className="grid grid-cols-5 -m-4">
                            {
                                ingridients?.slice(0, 10)?.map((item, index) => 
                                <div key={index} className="p-4 hover:border hover:rounded-lg hover:shadow hover:shadow-blue-500 ">
                                    <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                        <div className="flex items-center   mb-3">
                                            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                                <p className="">{index+1}</p>
                                            </div>
                                            <h2 className="text-gray-900 text-[15px] title-font font-medium">{item?.strIngredient}</h2>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="text-[12px]">{item?.strDescription.slice(0, 150)}</p>
                                        </div>
                                    </div>
                                </div>)
                            }


                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Ingredients;