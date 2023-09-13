import { useRef, useState } from "react"
import fetchData from "../api"
import AsyncStorage from "@react-native-async-storage/async-storage"


const getData = (params) => {

    const getDataFromApi = async (numOfNews = 10) => {
        const dat = await fetchData()
        await AsyncStorage
            .multiSet([
                ["articlesData", JSON.stringify(dat)],
                ["shownArticles", JSON.stringify(Array.from({ length: 10 }, (_, i) => i))]
            ])

        return  { data: dat.slice(0, 10), reset : 1 }

    }

    const getDataFromStorage = async (numOfNews) => {
        const newArticles = []
        try {
            const asyncData = (await AsyncStorage
                .multiGet(['articlesData', 'shownArticles']))
            
            const articles = JSON.parse(asyncData[0][1]);
            const shownArticles = JSON.parse(asyncData[1][1]);
            

            //check if all the data from async storage is used
            if (shownArticles.length % 100 == 0 || (100 - shownArticles.length) <= numOfNews) {
                return {data: [], reset: 1}
            }
            
            //getting random data from articles array and check if it is already shown or not
            while (newArticles.length < numOfNews) {
                let randomNumber = Math.floor(Math.random() * 100)
                while (shownArticles.includes(randomNumber)) {
                    randomNumber = Math.floor(Math.random() * 100)
                }
                newArticles.push(articles[randomNumber])
                shownArticles.push(randomNumber)
            }
            await AsyncStorage.setItem('shownArticles', JSON.stringify(shownArticles))
        }
        catch (error) {
        }
        return { data: newArticles, reset: 0 }

    }


    const fetchDataA = async (numOfNews = 5) => {

        //get data from async storage first
        const { data: asyncData , reset: r } = await getDataFromStorage(numOfNews)
    
        if (asyncData.length > 0) {
            return { data : asyncData, reset: r };
        }

        //if no data in async storage then get data from api
        const { data: apiData, reset } = await getDataFromApi()
        if (apiData.length > 0) {
            return { data: apiData , reset}
        }
    }


    return {
        getDataFromApi,
        getDataFromStorage,
        fetchDataA,
    }

}


export default getData