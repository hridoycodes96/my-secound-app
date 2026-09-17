'use client'
import React, { use } from 'react';

const SeachFood = ({foodPromise}) => {
    //  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    // const data = await res.json();

    // const foods = data.data;

    const foods = use(foodPromise)
    return (
        <div>
            <h2>Top Foods:{foods.length}</h2>
        </div>
    );
};

export default SeachFood;