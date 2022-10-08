import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { categories_css } from '../../styles/home/CategoriesStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { db } from '../../firebase';

export default function Categories() {

    const items = require('../../categories.json')

    return (
        <View style={categories_css.categories_container}>
            {   items &&
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {items.map((item,index) =>(
                        <TouchableOpacity key={index}>
                            <View key={index} style={categories_css.item_container}>
                                <MaterialCommunityIcons name={item.icon_name} 
                                style={categories_css.image_def}/>
                                <Text style={categories_css.text_def}>{item.name}</Text>
                            </View>  
                        </TouchableOpacity>
                    ))}           
                </ScrollView>
            }
        </View>
    )
}
