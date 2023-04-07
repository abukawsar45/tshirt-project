import React from 'react';

const TShirts = ({ tshirt }) => {
    // console.log(tshirt)
    const {gender, name, picture, price, _id } = tshirt;
    return (
        <div className=' border-solid border-4 rounded-lg gap-5 border-lime-500'>
            <div className='w-50'>
                <img className='w-50 mix-blend-overlay' src={picture} alt="" />
           </div>
            <div>
                <h2>{name} </h2>
                <p>Price: $ <h3>{price}</h3> </p>
                <p>{_id} </p>
            </div>
        </div>
    );
};

export default TShirts;