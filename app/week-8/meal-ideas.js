"use client";

import { useState, useClient } from "react";

export default function MealIdeas(ingredient, { selectedItemName }){
    const meals= useState([]);

    const loadMealIdeas = (ingredient) => {
        fetchMealIdeas(ingredient);
        meals.push(fetchMealIdeas.data);
    }

    return(
        <div>
            <header>List of Meals</header>
            <ul>
                <li>
                    {ingredient.strMeal}
                </li>
            </ul>
        </div>
    )
}

async function fetchMealIdeas(ingredient){
    try {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        )
        const data = await response.json();
        let array = [...data.idMeal, data.strMeal, data.strMealThumb];
        console.dir(array);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}