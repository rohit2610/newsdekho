import React, { useRef, useState } from "react";
import { Animated, Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { RectButton, Swipeable } from "react-native-gesture-handler";


export const NewsCard = ({ item, deleteNews, index, pinNews }) => {


    if (item.isPinned) {
        return <></>
    }

    const swipeableRef = useRef(null);
    const [showModal, setShowModal] = useState(false)

    const renderRightActions = (progress, dragX) => {
        return (
            <View style={{ justifyContent: 'center' }}>
                <RectButton onPress={() => {
                    swipeableRef.current.close()
                    pinNews(index)

                }} style={{}}>
                    <Animated.Text
                        style={[{
                            color: 'darkgreen',
                            fontSize: 16,
                            borderColor: 'darkgreen',
                            borderWidth: 1,
                            padding: 8,
                            marginLeft: 10
                        }
                        ]}
                    >Pin</Animated.Text>
                </RectButton >
            </View>
        )
    }

    const renderLeftActions = (progress, dragX) => {
        return (
            <View style={{ alignItems: 'center', alignContent: 'center', justifyContent: 'space-evenly', }}>
                <RectButton onPress={() => {
                    swipeableRef.current.close()
                    deleteNews(index)

                }} style={{}}>
                    <Animated.Text
                        style={[{
                            color: 'red',
                            fontSize: 16,
                            borderColor: 'red',
                            borderWidth: 1,
                            padding: 10,
                            marginRight: 10
                        }
                        ]}
                    >Delete</Animated.Text>
                </RectButton >
            </View>
        )
    }



    return (
        <TouchableOpacity
            style={{ width: '100%', }}
            onLongPress={() => setShowModal(true)}
            onPressOut={() => setShowModal(false)}
        >
            <Swipeable
                renderLeftActions={renderLeftActions}
                renderRightActions={(progress, dragX) => renderRightActions(progress, dragX)}
                ref={swipeableRef}
                rightThreshold={100}
                leftThreshold={100}
            >
                <View style={{ marginVertical: 8, flexDirection: 'row', overflow: 'hidden', backgroundColor: 'rgba(249, 224, 187,0.5)' }}>

                    {item.isPinned && <Text style={{}}>Pinned</Text>}
                    <Image
                        source={{ uri: item.urlToImage }}
                        style={{
                            height: 90,
                            width: 90,
                            borderRadius: 10,
                            overflow: 'hidden'
                        }}
                    />
                    <Text style={{ flex: 1, flexWrap: 'wrap', paddingTop: 4, paddingHorizontal: 8, color: '#884A39', fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                </View>
            </Swipeable>

            <Modal
                visible={showModal}
                transparent={true}
            >
                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ alignItems: 'center', flexWrap: 'wrap' }} >
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={{
                                height: 300,
                                aspectRatio: 1,
                                borderRadius: 10,
                                overflow: 'hidden'
                            }}
                        />
                        <Text style={{ paddingTop: 4, paddingHorizontal: 8, color: 'white', fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}