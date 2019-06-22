import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Fetch({ url }) {
    const [data, setdata] = useState(null);

    useEffect(
        () => {
            let mounted = true;

            const loadData = async() => {
                const response = await axios.get(url);
                if (mounted) {
                    setdata(response.data);
                }
            }
            loadData();

            return () => {
                mounted = false;
            };
        }, [url]
    );


if (!data) {
    return <span data-testid ='loading'> Loading data... </span>
}
return <span > { data.greeting } </span>
}