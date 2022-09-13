import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { style_sheet } from '../../styles/trainers/TrainerItemsStyle'

const trainer_details = [
    {
        name: "Trainer Adam",
        description: "Karate instructor",
        price: "20/hr",
        image: require('../../assets/images/store_images/karate_1.jpeg'),
        rating: 5,
        total_ratings: 100,
    },
    {
        name: "Trainer Kate",
        description: "Spinning Class",
        price: "15/hr",
        image: require('../../assets/images/store_images/karate_1.jpeg'),
        rating: 4,
        total_ratings: 40,
    },
    {
        name: "Trainer Molly",
        description: "Weightligting Class",
        price: "25/hr",
        image: require('../../assets/images/store_images/karate_1.jpeg'),
        rating: 4.5,
        total_ratings: 140,
    },
];


export default function TrainerItems({ navigation, ...props }) {
    const dispatch = useDispatch();

    const select_item = (item) => dispatch({
        type: 'ADD_TO_CART',
        payload: item,
    });

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {trainer_details.map((trainer, index) => (
                <TouchableOpacity activeOpacity={1} style={{
                }}
                    key={index}

                    onPress={() => navigation.navigate("TrainerDetail", {
                        name: trainer.name,
                        description: trainer.description,
                        price: trainer.price,
                        image: trainer.image,
                        rating: trainer.rating,
                        total_ratings: trainer.total_ratings,
                    }
                    )}>
                    <View style={{ marginBottom: 10 }}>
                        <View style={style_sheet.trainer_item_style}>
                            <TrainerImage trainer_details={trainer} />
                            <TrainerInfo trainer_details={trainer} />
                        </View>
                        <Divider width={0.5} orientation="vertical" style={{ marginTop: 5 }} />

                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}

const TrainerInfo = (props) => (
    <View style={style_sheet.trainer_info}>
        <Text style={style_sheet.trainer_title_style}>{props.trainer_details.name}</Text>
        <Text>{props.trainer_details.description}</Text>
        <Text>${props.trainer_details.price}</Text>

    </View>
)

const TrainerImage = (props) => (
    <View>
        <Image source={props.trainer_details.image} 
        style={style_sheet.trainer_profile_image} 
        />
    </View>
)