import React from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { fi_items_css } from '../../styles/home/FitnessItemsStyle';

const fitness = [
    {
        image : require('../../assets/images/store_images/dance_1.jpeg'),
        categories: ["Dance"],
        name: "Dance 1",
        price: 7,
        reviews: 213,
        rating: 4.5,
    },
    {
        image : require('../../assets/images/store_images/weights_1.jpeg'),
        categories: ["Weights"],
        name: "Weights 1",
        price: 7,
        reviews: 213,
        rating: 4.5,
    },
    {
        image : require('../../assets/images/store_images/ballet_1.jpeg'),
        categories: ["Ballet", "Dance"],
        name: "Ballet 1",
        price: 7,
        reviews: 213,
        rating: 4.4,
    },
    {
        image : require('../../assets/images/store_images/yoga_1.jpeg'),
        categories: ["Yoga"],
        name: "Yoga 1",
        price: 7,
        reviews: 213,
        rating: 4.3,
    },
    {
        image : require('../../assets/images/store_images/cycling_1.jpeg'),
        categories: ["Cycling"],
        name: "Cycling 1",
        price: 7,
        reviews: 213,
        rating: 4.2,
    },
    {
        image : require('../../assets/images/store_images/karate_1.jpeg'),
        categories: ["Karate"],
        name: "Karate 1",
        price: 7,
        reviews: 213,
        rating: 4.1,
    },
];

export default function FitnessItems({navigation, ...props}) {
    
    return (
        <>
            {fitness.map((fit, index) => (
                <TouchableOpacity activeOpacity={1} style={{
                }}
                key={index}
                onPress={() => navigation.navigate("FitnessDetail", {
                    name: fit.name,
                    image: fit.image,
                    price: fit.price,
                    reviews: fit.reviews,
                    rating: fit.rating,
                    categories: fit.categories,
                }
                )}
                >
                <View key={index}>
                    
                            <View style={fi_items_css.main_container}>
                                <GymImage image={fit.image}/>
                                <GymInfo name={fit.name} rating={fit.rating}/>
                            </View> 
                </View>
            </TouchableOpacity>

            ))}
        </>
    )
}

const GymImage = (props) => (
    <View style={fi_items_css.gym_image_container}>
            <View style={fi_items_css.image_container}>
            <>
            <Image source={props.image} 
            style={fi_items_css.image_def}/>
            <TouchableOpacity style={fi_items_css.icon_container}>
                <MaterialCommunityIcons name='heart-outline' size={25} color='white'></MaterialCommunityIcons>
            </TouchableOpacity>
            </>
        </View>  
    </View>
)

const GymInfo = (props) => (
    <View style={fi_items_css.gym_info_container}>
            <View>
                <Text style={fi_items_css.headline_1}>{props.name}</Text>
                <Text style={fi_items_css.headline_2}>headline 2</Text>
            </View>
        <View style={fi_items_css.description_container}>
            <Text style={{color:'white'}}>{props.rating}</Text>
        </View>
    </View>
)