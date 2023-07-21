import { useEffect, useState } from "react";

export default function useDataFetching(dataSource) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        (async function () {
            try {
                const data = await fetch(dataSource);
                const result = await data.json();

                if(result) {
                    setData(result);
                    setLoading(false);
                }
            } catch (e) {
                setLoading(false);
                setError(e.message);
            }
        })()
    }, [])

    return [loading, error, data];
}