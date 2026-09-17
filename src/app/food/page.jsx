import React, { Suspense } from 'react';
import SeachFood from '../component/SeachFood';

//option-1
const foodPromise = async()=>{
     const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await res.json();

    const foods = data.data;
    return  foods;
}



const FoodPage = () => {
    return (
        <div>
            <Suspense fallback={ <div>Loading...</div>}>
                <SeachFood foodPromise={foodPromise()}></SeachFood>
            </Suspense>
        </div>
    );
};

export default FoodPage;