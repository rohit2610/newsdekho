import useInterval from "./useInterval"

const { useState, useRef } = require("react")
const { default: getData } = require("./getData")

const useTimer = () => {
    const { fetchDataA } = getData()
    const [seconds, setSeconds] = useState(0)
    const [articlesFromAsync, setArticlesFromAsync] = useState({})
    const [isRunning, setIsRunning] = useState(false);

    const startTimer = () => {
        setIsRunning(true)
    }


    //custom hook for timer 
    useInterval(async () => {
        setSeconds((sec) => (sec + 1) % 10);

        //after every 10 seconds it will hit fetchDataA function
        if (seconds > 0 && seconds == 9) {
            const data = await fetchDataA()
            setArticlesFromAsync(data)
        }
    }, isRunning  ? 1000 : null);



    const resetTimer = () => {
        setSeconds(0);
    }

    const stopTimer = () => {
        setIsRunning(!isRunning);
    }

    //function for getting data on the button click
    const getDataNow = async () => { 
        const data = await fetchDataA()
        setArticlesFromAsync(data)
        setSeconds(0)
    }

    return {
        articlesFromAsync,
        startTimer,
        resetTimer,
        stopTimer,
        seconds,
        getDataNow
    }

}

export default useTimer