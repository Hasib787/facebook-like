import React, { useEffect, useState } from 'react';

const MealFinder = () => {
    const [search, setSearch] = useState('');
    const [findMeal, setFindMeal] = useState([]);

    const handleChange = event => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    useEffect(() => {
        const url= `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFindMeal(data.meals))
    },[search])

    return (
        <div>
            <h1>Find Delicious Foods</h1>
            <input type="text" onChange={handleChange} placeholder="Search food" />
            <p>Search:{search}</p>
            <p>Meal Find:{findMeal?.length || 0}</p>

            <ul>
                {
                    findMeal?.map(meal => <li>{meal.strMeal}</li>)
                }
            </ul>

        </div>
    );
};

export default MealFinder;