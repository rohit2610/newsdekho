import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { UnpinSvg } from '../assets';



export const PinnedItem = ({ item, index, unPinNews }) => {

    return (
        <View style={{ margin: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10, overflow: 'hidden' }}>
            <Image
                source={{ uri: item.urlToImage }}
                style={{
                    height: 200,
                    aspectRatio: 1
                }}
            />
            <TouchableOpacity 
            style={{ position: 'absolute', top:0 , right: 0, backgroundColor: 'rgba(0,0,0,0.8)'}}
                onPress={() => {
                    unPinNews(item.content)
                }}
            >
                <UnpinSvg width={32} height={32} />
            </TouchableOpacity>
            <Text style={{ textAlign: 'center', width: '100%', position: 'absolute', bottom: 0, color: 'white', backgroundColor: 'rgba(0,0,0,0.8)', fontSize: 14 }}>{item.title}</Text>

        </View>
    )
}