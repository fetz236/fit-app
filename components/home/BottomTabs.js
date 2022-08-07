import React from 'react'
import { View, Text,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { bottom_tabs_css } from '../../styles/home/BottomTabsStyle';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomTabs() {
    return (
            <View style={bottom_tabs_css.bt_container}>
            {items.map((item,index) =>(
                <TouchableOpacity>
                    <View key={index} style={bottom_tabs_css.item_container}>
                    <Icon name={item.image} 
                    style={bottom_tabs_css.image_def}/>
                    <Text style={bottom_tabs_css.text_def}>{item.text}</Text>
                    </View>
                </TouchableOpacity>

                ))}
            </View>
        
    )
}

const items = [
    {
        image : "home",
        text: "Home"
    },
    {
        image : "search",
        text: "Search"
    },
    {
        image : "calendar",
        text: "Upcoming"
    },
];