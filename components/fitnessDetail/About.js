import React from 'react'
import { View, Text, Image } from 'react-native'
import { about_sheet } from '../../styles/fitnessDetail/AboutStyle';



export default function About(props) {
    const fitness = [
        {
            image : props.route.params.image,
            category: ["Dance"],
            name: props.route.params.name,
            description: "Dance Class innit | $$ | :ticket: | 4 :star: (Reviews)",
            price: 7,
            reviews: 213,
            rating: 4.5,
        },
    ];
    
    return (
        <View>
            {fitness.map((fit, index) =>
            (
                <View key={index} style={about_sheet.about_full_container}>
                    <FitnessImage image={fit.image}/>
                    <FitnessTitle name={fit.name}></FitnessTitle>
                    <FitnessDescription description={fit.description}></FitnessDescription>
                </View> 
            ))}
        </View>
    )
}

const FitnessImage = (props) =>(
    <Image source={props.image} style={about_sheet.about_img}/>
)

const FitnessTitle = (props)=>(
    <Text style={about_sheet.about_title}>{props.name}</Text> 
)

const FitnessDescription = (props) => (
    <Text style ={about_sheet.about_desc}>{props.description}
    </Text>
)