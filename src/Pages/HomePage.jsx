import React from 'react';
import Banner from "../Home/Banner";
import PopularClasses from '../Home/PopularClasses';
import PopularInstructors from '../Home/PopularInstructors';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            
        </div>
    );
};

export default HomePage;