import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DeviceResetSvg, DownloadSvg } from '../assets';


export const NavBar = ({ resetTimer, getDataNow, seconds }) => {
    
    return (
        <View style={{
            minHeight: 48, justifyContent: 'space-between', alignItems: 'center',
            paddingLeft: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey',
            flexDirection: 'row'
        }}>

            <Text style={{ fontSize: 24, color: '#884A39', fontWeight: 'bold', flex: 1, }}>News Dekho</Text>
            <View style={{ flexDirection: 'row', paddingRight: 16, flex: 0.5, justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={resetTimer}>
                    <DeviceResetSvg height={32} width={32} fill="#884A39" />
                </TouchableOpacity>

                <Text style={{ fontSize: 24, color: '#884A39', }}>{seconds}</Text>

                <TouchableOpacity onPress={getDataNow}>
                    <DownloadSvg height={32} width={32} color={'#884A39'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}