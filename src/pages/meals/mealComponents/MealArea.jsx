import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const MealArea = () => {

    const axiosPublic = useAxiosPublic();
    const {data: areas=[]}=useQuery({
        queryKey: ['areas'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/list.php?a=list')
            return res.data?.meals;
        }
    })

    // console.log(ingredients)

    return (
        <div className='w-10/12 mx-auto'>
            <div className="">
                <p className="text-4xl font-bold text-center py-4">Our Areas </p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-10 gap-5">
                {
                    areas?.map((item, index) => 

                        <div className='bg-black text-white p-2 rounded-lg text-center' key={index}>
                            <p className="text-[12px]">{item?.strArea}</p>
                            
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MealArea;