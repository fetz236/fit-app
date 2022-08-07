import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { categories_css } from '../../styles/home/CategoriesStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const items = [
    {
        image : "rowing",
        text: "Rowing"
    },
    {
        image : "dumbbell",
        text: "Weights"
    },
    {
        image : "bowling",
        text: "Bowling"
    },
    {
        image : "yoga",
        text: "Yoga"
    },
    {
        image : "bike",
        text: "Cycling"
    },
    {
        image : "karate",
        text: "Karate"
    },
];

export default function Categories() {
    return (
        <View style={categories_css.categories_container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item,index) =>(
                    <View key={index} style={categories_css.item_container}>
                    <MaterialCommunityIcons name={item.image} 
                    style={categories_css.image_def}/>
                    <Text style={categories_css.text_def}>{item.text}</Text>
                </View>  
                ))}           
            </ScrollView>
        </View>
    )
}
