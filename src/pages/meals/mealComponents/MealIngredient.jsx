import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MealIngredient = () => {

    const axiosPublic = useAxiosPublic();
    const {data: ingredients=[]}=useQuery({
        queryKey: ['ingredients'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/list.php?i=list')
            return res.data?.meals;
        }
    })

    // console.log(ingredients)

    return (
        <div className='w-10/12 mx-auto'>
            <div className="">
                <p className="text-4xl font-bold text-center py-4">Some of Our Ingredients </p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-10 gap-5">
                {
                    ingredients?.slice(0,50)?.map((item, index) => 

                        <div className='bg-black text-white p-2 rounded-lg text-center' key={index}>
                            <p className="text-[12px]">{item?.strIngredient}</p>
                            
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MealIngredient;