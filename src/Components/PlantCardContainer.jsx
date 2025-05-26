import React from 'react';
import PlantCard from './PlantCard';

const PlantCardContainer = ({plants}) => {
    return (
        <div>
            <h1 className='text-3xl md:text-5xl lg:text-7xl text-center font-bold my-5 permanent-marker-regular text-green-500'>
                Explore Plants 
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center my-10">
                {
                    plants.map((plant)=><PlantCard key={plant._id} plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default PlantCardContainer;  