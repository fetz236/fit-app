import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

import {trainer_style, trainer_schedule} from '../../styles/trainers/ViewTrainerStyle'

export default function ViewTrainer({ navigation, ...props }){

    const trainer = {
        first_name: props.route.params.first_name,
        last_name: props.route.params.last_name,
        id: props.route.params.id,
        categories: props.route.params.categories,
        mobile: props.route.params.mobile,
        description: props.route.params.description,
        price: props.route.params.price,
        photoURL: props.route.params.photoURL,
        rating: props.route.params.rating,
        reviews: props.route.params.reviews,
    }
    return (
        <View>
            <View>
                <ScrollView>
                <TrainerImage photoURL={trainer.photoURL} rating={trainer.rating} reviews={trainer.reviews}></TrainerImage>
                <TrainerDetails name = {trainer.first_name+ " "+ trainer.last_name} description={trainer.description} ></TrainerDetails>
                <TrainerAbout></TrainerAbout>
                <TrainerLocations></TrainerLocations>
                <View style={
                    trainer_schedule.schedule_container
                }>
                    <View style={
                        trainer_schedule.schedule_button_style
                    }>
                        <TouchableOpacity style={
                            trainer_schedule.touchable_opacity
                        }
                        onPress={() => navigation.navigate("TrainerScheduleDetail", {
                            first_name: trainer.first_name,
                            last_name: trainer.last_name,
                            id: trainer.id,
                            categories: trainer.categories,
                            mobile: trainer.mobile,
                            description: trainer.description,
                            price: trainer.price,
                            photoURL: trainer.photoURL,
                            rating: trainer.rating,
                            reviews: trainer.reviews,
                        }
                        )}>
                            <Text style={
                                trainer_schedule.button_text
                            }> View Schedule </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}

const TrainerImage = (props) => (
    <>
    <Image style={
        trainer_style.trainer_image
    }source={{uri: props.photoURL}}></Image>
    <View style={
        trainer_style.trainer_rating
    }>
        <Rating type='custom' ratingCount={5} startingValue={props.rating} imageSize={25} tintColor='#f2f2f2' readonly
        style={{
            marginTop:"5%",
        }}> </Rating>
    </View>
    <View style={trainer_style.trainer_rating}>
        <Text style={trainer_style.rating_body}> {props.reviews} Reviews</Text>
    </View>

    </>
);

const TrainerDetails = (props) => (
    <View>
        <Text style={trainer_style.trainer_header}>{props.name}</Text>
        <View style={trainer_style.container_view}>
            <Text style={trainer_style.trainer_body}>{props.description}</Text>
        </View>
    </View>
);


const TrainerAbout = (props) => (
    <View>
        <Text style={trainer_style.trainer_header}>About Me</Text>
        <View style={trainer_style.text_view}>
            <Text style={trainer_style.trainer_sub_header}>My Skills</Text>
            <View style={trainer_style.text_sub_view}>
                <View style={trainer_style.sub_view_item}>
                    <Text style={trainer_style.about_text}>Personal Training</Text>
                    <Text style={trainer_style.about_text}>Squash</Text>
                    <Text style={trainer_style.about_text}>Waterski</Text>
                </View>
                <View style={trainer_style.sub_view_item}>
                    <Text style={trainer_style.about_text}>Football</Text>
                    <Text style={trainer_style.about_text}>Sky diving</Text>
                    <Text style={trainer_style.about_text}>Baseball</Text>
                </View>
            </View>
        </View>
    </View>
);
//Needs to account for private gym radius in the future radius or zones
const TrainerLocations = (props) => (
    <View>
        <Text style={trainer_style.trainer_header}>My Gym Partners</Text>
        <View style={trainer_style.text_view}>
            <Image style={{width:"100%", height: "100%"}} source={require('../../assets/images/store_images/dance_1.jpeg')}/>
        </View>
    </View>

);

const ViewTrainerSchedule = (props) => (
    <View style={
        trainer_schedule.schedule_container
    }>
        <View style={
            trainer_schedule.schedule_button_style
        }>
            <TouchableOpacity style={
                trainer_schedule.touchable_opacity
            }>
                <Text style={
                    trainer_schedule.button_text
                }> View Schedule </Text>
            </TouchableOpacity>
        </View>
    </View>
);
