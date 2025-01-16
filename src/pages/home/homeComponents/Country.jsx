import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Country = () => {

    const axiosPublic = useAxiosPublic();
    const {data: counteries=[]}=useQuery({
        queryKey: ['counteries'],
        queryFn: async()=>{
            const res = await axiosPublic.get('/list.php?a=list')
            return res.data?.meals;
        }
    })

    // console.log(counteries)

    return (
        <div className='w-10/12 mx-auto'>
            <div className="py-10">
                <p className="text-4xl font-bold text-center">Different Nationality </p>
                <p className="text-xs text-gray-400 text-center">We got international foods</p>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-10 gap-5">
                {
                    counteries?.map((item, index) => 

                        <div className='bg-black text-white p-2 rounded-lg text-center' key={index}>
                            <p className="">{item?.strArea}</p>
                            
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Country;