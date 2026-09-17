import React from 'react';
import Counter from '../component/Counter';

const DashbordPage = () => {

    return (
        <div>
            <h2>Dasthoard page</h2>
            <Counter></Counter>
            <ul>
                <li>Dashboard item 1</li>
                <li>Dashboard item 2</li>
                <li>Dashboard item 3</li>
            </ul>
        </div>
    );
};

export default DashbordPage;