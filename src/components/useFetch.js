import { useState, useEffect } from 'react';

const useFetch = (url) => {
    // State to store the fetched data //and data here is like blogs
    const [data, setData] = useState(null);

    // State to store the loading status of the fetch
    const [isLoading, setIsLoading] = useState(true);

    // State to store any error that occurs during the fetch
    const [error, setError] = useState(null);

    // useEffect hook to fetch the data from the specified URL
    useEffect(() => {
        // setTimeout function to delay the fetch by 1 second
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    // Check if the response is not successful
                    if (!res.ok) {
                        // Throw an error with a message
                        throw Error('could not fetch the data for that resource');
                    }
                    // If the response is successful, return the data as JSON
                    return res.json();
                })
                .then(data => {
                    // Set isLoading to false
                    setIsLoading(false);
                    // Set the fetched data to the data state
                    setData(data);
                    // Set error to null
                    setError(null);
                })
                .catch(err => {
                    // auto catches network / connection error
                    // Set isLoading to false
                    setIsLoading(false);
                    // Set the error to the error message
                    setError(err.message);
                })
        }, 1000);
    }, [url])

    // Return the data, isLoading, and error states
    return { data, isLoading, error };
}

export default useFetch;
