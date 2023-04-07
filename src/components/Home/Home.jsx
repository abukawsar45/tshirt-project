import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirts from '../TShirts/TShirts';

const Home = () => {
    const tshirt = useLoaderData();
    console.log(tshirt);
    return (
        <div>
            <h1>Home page</h1>
            <h3>Total T-Shirt: {tshirt?.length ? tshirt.length: 0}</h3>
            {
                tshirt.map((tshirt) => (
                    <TShirts
                        key = {tshirt._id}
                        tshirt ={tshirt}>
                    </TShirts>
                ))
            }
        </div>
    );
};

export default Home;