import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

import {trainer_style, trainer_schedule} from '../../styles/trainers/ViewTrainerStyle'

export default function ViewTrainer({ navigation, ...props }){

    const trainers = [
        {
            name: props.route.params.name,
            description: props.route.params.description,
            price: props.route.params.price,
            image: props.route.params.image,
            rating: props.route.params.rating,
            total_ratings: props.route.params.total_ratings,
        },
    ]
    return (
        <View>
            {trainers.map((trainer,index) => 
            (   
                <View key={index}>
                    <ScrollView>
                    <TrainerImage image={trainer.image} rating={trainer.rating} total_ratings={trainer.total_ratings}></TrainerImage>
                    <TrainerDetails name = {trainer.name} description={trainer.description} ></TrainerDetails>
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
                                name: trainer.name,
                                description: trainer.description,
                                price: trainer.price,
                                image: trainer.image,
                                rating: trainer.rating,
                                total_ratings: trainer.total_ratings,
                                navigation: navigation,
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

            ))}

        </View>
    )
}

const TrainerImage = (props) => (
    <>
    <Image style={
        trainer_style.trainer_image
    }source={props.image}></Image>
    <View style={
        trainer_style.trainer_rating
    }>
        <Rating type='custom' ratingCount={5} startingValue={props.rating} imageSize={25} tintColor='#f2f2f2' readonly
        style={{
            marginTop:"5%",
        }}> </Rating>
    </View>
    <View style={trainer_style.trainer_rating}>
        <Text style={trainer_style.rating_body}> {props.total_ratings} Reviews</Text>
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
