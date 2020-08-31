import { useState, useEffect } from "react"

export const useFecthGifs = () => {

    const [state, setstate] = useState({
        data:[],
        loading: true
        }
    );

    useEffect(() => {
        getGif(  ).then();
    }, []);

        return state;

}