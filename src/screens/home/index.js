import React, { useEffect, useState } from "react";
import { FlatList, View, NativeModules, Text } from "react-native";
import getData from "../../hooks/getData";
import useTimer from "../../hooks/useTimer";
import SplashScreen from 'react-native-splash-screen'
import { PinnedItem } from "./components/PinnedItem";
import { NewsCard } from "./components/NewsCard";
import { NavBar } from "./components/NavBar";
import IntroStrip from "./components/IntroStrip";

const { ToastModule } = NativeModules

const Home = () => {

    const [articlesData, setArticlesData] = useState([])
    const [pinnedArticles, setPinnedArticles] = useState([])
    const { fetchDataA } = getData()
    const { articlesFromAsync, startTimer, resetTimer, seconds, getDataNow } = useTimer()

    useEffect(() => {
        Object.keys(articlesFromAsync).length > 0 && setArticlesData((prevData) => {
            const { data, reset } = articlesFromAsync
            if (reset) {
                return [...data]
            } else {
                return [...prevData, ...data]
            }
        })
    }, [articlesFromAsync])

    useEffect(() => {

        //useEffect to get data from either api or localstorage
        (async function () {
            setTimeout(() => {
                SplashScreen.hide()
            }, 1000)

            const { data, reset } = await fetchDataA(10);
           
            if (data.length) {
                setArticlesData(data)
                startTimer()  
            }
        })()
    }, [])

    const deleteNews = (index) => {
        setArticlesData((prevData) => {
            return prevData.filter((value, i) => index != i)
        })
    }

    const pinNews = (index) => {
        setArticlesData((prevData) => {
            return prevData.map((item, i) => {
                if (index == i) {
                    item['isPinned'] = !item.isPinned
                }
                return item
            })
        })

        setPinnedArticles((prevData) => [...prevData, articlesData[index]])
        ToastModule.showToast("News Pinned");
    }

    const unPinNews = (content) => {
        setArticlesData((prevData) => {
            return prevData.map((item, i) => {
                if (item.content == content) {
                    item['isPinned'] = !item.isPinned
                }
                return item
            })
        })
        setPinnedArticles((prevData) => prevData.filter((value, index) => value.content != content))
    }

    const pinnedArray = articlesData.filter((item, i) => item.isPinned)

    return (
        <View style={{ backgroundColor: '#FAF2EB', }}>
            <NavBar resetTimer={resetTimer} getDataNow={getDataNow} seconds={seconds} />
            {articlesData.length == 0 ?
                <View style={{ backgroundColor: '#FAF2EB', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 32 }}>Loading...</Text>
                </View> :
                <View>
                    <View style={{ width: '100%', padding: 10, height: '25%' }}>
                        {pinnedArray.length == 0 ? <IntroStrip /> :
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                horizontal
                                data={pinnedArticles}
                                style={{ alignContent: 'center', height: '100%' }}
                                contentContainerStyle={{ alignItems: 'center', }}
                                renderItem={({ item, index }) => {
                                    return <PinnedItem item={item} index={index} unPinNews={unPinNews} />
                                }}
                            />}
                    </View>
                    <View style={{ width: '100%', paddingHorizontal: 10, paddingBottom: 100, height: '75%' }}>
                        <FlatList
                            inverted
                            contentContainerStyle={{
                                paddingTop: 60
                            }}
                            data={articlesData}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <NewsCard item={item} deleteNews={deleteNews} index={index} pinNews={pinNews} />
                            }
                        />
                    </View>
                </View>}
        </View>
    )
}

export default Home
