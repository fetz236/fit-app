import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import TrainerDetail from '../../screens/TrainerDetail'
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
                <View>
                    <ScrollView>
                    <TrainerImage image={trainer.image}></TrainerImage>
                    <Divider style={trainer_style.divider}/>
                    <TrainerDetails name = {trainer.name} description={trainer.description} ></TrainerDetails>
                    <Divider style={trainer_style.divider}/>
                    <TrainerRating rating ={trainer.rating} total_ratings={trainer.total_ratings}></TrainerRating>
                    <Divider style={trainer_style.divider}/>
                    <TrainerAbout></TrainerAbout>
                    <Divider style={trainer_style.divider}/>
                    <TrainerLocations></TrainerLocations>
                    <Divider style={trainer_style.divider}/>
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
    <Image style={
        trainer_style.trainer_image
    }source={props.image}></Image>
);

const TrainerDetails = (props) => (
    <View>
        <Text style={trainer_style.trainer_header}>{props.name}</Text>
        <View style={trainer_style.container_view}>
            <Text style={trainer_style.trainer_body}>{props.description}</Text>
        </View>
    </View>
);

const TrainerRating = (props) => (
    <View style={trainer_style.container_view}>
        <Text style={trainer_style.trainer_header}>Rating</Text>
        <View style = {trainer_style.container_view}>
            <View style={
                trainer_style.trainer_rating
            }>
                <Rating type='custom' ratingCount={5} startingValue={props.rating} tintColor='#f2f2f2' readonly
                style={{
                    marginTop:"5%",
                }}> </Rating>
                <Text style={trainer_style.rating_body}> {props.total_ratings} Reviews</Text>
            </View>
        </View>
    </View>
);

const TrainerAbout = (props) => (
    <View style={trainer_style.container_view}>
        <Text style={trainer_style.trainer_header}>About Me</Text>
        <View style={trainer_style.text_view}>
            <Text style={trainer_style.trainer_sub_header}>My Skills</Text>
            <View style={trainer_style.text_sub_view}>
                <View style={trainer_style.sub_view_item}>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                </View>
                <View style={trainer_style.sub_view_item}>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                    <Text>Lorem</Text>
                </View>
            </View>
        </View>
    </View>
);
//Needs to account for private gym radius in the future radius or zones
const TrainerLocations = (props) => (
    <View style={trainer_style.container_view}>
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
