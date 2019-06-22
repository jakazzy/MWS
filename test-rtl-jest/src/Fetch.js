import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Fetch({ url }) {
    const [data, setData] = useState(null);

    useEffect(
        () => {
            let mounted = true;

            const loadData = async () => {
                const response = await axios.get(url);
                // console.log(response.data, 'response');
               
                if (mounted) {
                    setData(response.data);
                    // console.log(response.data, 'both')
                }
            };

            loadData();

            return () => {
                mounted = false;
            };
        }, 
        [url]
    );


if (!data) {
    console.log(data, 'dont load')
    return <span data-testid ='loading'> Loading data... </span>
}
console.log(data, 'load')
return (<span data-testid ='resolved'> { data.greeting } </span>)
}