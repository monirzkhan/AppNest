import React from 'react';
import { useLoaderData } from 'react-router';

const AppDetails = () => {
    const appDetailsData = useLoaderData();
    console.log(appDetailsData);
    return (
        <div>
            <h1>Apps Details Here: {appDetailsData.title}</h1>
        </div>
    );
};

export default AppDetails;