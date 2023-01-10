import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummeryCard from '../../Shared/NewSummeryCard/NewSummeryCard';

const Home = () => {
    const allnews = useLoaderData();
    return (
        <div>
            <h2>This is home component {allnews.length}</h2>
            {
                allnews.map(news =><NewSummeryCard
                    key={news._id}
                    news={news}
                ></NewSummeryCard>)
            }
        </div>
    );
};

export default Home;