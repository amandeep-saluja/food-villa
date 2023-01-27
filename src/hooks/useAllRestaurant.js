import { useState, useEffect } from 'react';
import { DATA_LINK } from '../Constants';
import data from '../../v5.json';

const useAllRestaurant = () => {
    const [restaurant, setRestaurant] = useState(data?.data?.data?.cards);

    useEffect(() => {
        getAllRestaurant();
    }, []);

    async function getAllRestaurant() {
        try {
            const data = await fetch(DATA_LINK);
            const json = await data.json();
            setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        } catch (e) {
            console.log('Logging error: ', e);
        }
    }

    return restaurant;
};

export default useAllRestaurant;
