import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewSummeryCard from '../../Shared/NewSummeryCard/NewSummeryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is Category news {categoryNews.length}</h2>
            {
                categoryNews.map(news => <NewSummeryCard
                    key={news._id}
                    news={news}
                ></NewSummeryCard>)
            }
        </div>
    );
};

export default Category;