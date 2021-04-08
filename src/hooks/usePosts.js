import {useEffect, useState} from "react";
import axios from "axios";

const usePosts = () => {
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://dev.to/api/articles?username=neer17")
            .then(data => {
                setPostData(data.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, []);

    return [
        loading,
        postData
    ];
}

export default usePosts;