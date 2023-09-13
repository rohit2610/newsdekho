import React, { memo } from "react";
import { Text, View } from "react-native";

const quotesData = [
    "The purpose of our life is to be happy",
    "Life is what happens when you're busy making other plans.",
    "You only live once, but if you do it right, once is enough.",
    "Never let the fear of striking out keep you from playing the game."
]

const IntroStrip = () => {

    return (<View style={{ height: '100%', justifyContent: 'space-evenly', width: '100%', backgroundColor: '#C38154', padding: 10, borderRadius: 10 }}>
        <Text style={{ fontSize: 32, color: '#F9E0BB', }}>{"Hi !"}</Text>
        <Text style={{ fontSize: 24, color: '#F9E0BB', }}>Hope you have a good day ahead</Text>
        <Text style={{ fontSize: 16, color: '#F9E0BB', }}>Quote of the day -</Text>
        <Text style={{ fontSize: 24, color: '#F9E0BB', }} adjustsFontSizeToFit numberOfLines={2}>{quotesData[Math.floor(Math.random() * 4)]}</Text>
    </View>)
}

export default memo(IntroStrip)

