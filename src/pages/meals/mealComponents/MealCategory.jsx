import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MealCategory = () => {

    const axiosPublic = useAxiosPublic();
    const {data: categories=[]}=useQuery({
        queryKey: ['categories'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/list.php?c=list')
            return res.data?.meals;
        }
    })

    // console.log(ingredients)

    return (
        <div className='w-10/12 mx-auto'>
            <div className="">
                <p className="text-4xl font-bold text-center py-4">Our Categories </p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-10 gap-5">
                {
                    categories?.map((item, index) => 

                        <div className='bg-black text-white p-2 rounded-lg text-center' key={index}>
                            <p className="text-[12px]">{item?.strCategory}</p>
                            
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MealCategory;