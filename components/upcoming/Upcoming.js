import React from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { upcoming_style_sheet } from '../../styles/upcoming/UpcomingStyle';


const bookings = [
    {   
        name: "Karate Class",
        date: '23/09/2022',
        time: '20:00-21:00',
        trainer: 'Kate Hudson',
        gym: 'Marylebone Square Gym',
        location: '21 Bryanston St, London W1H 7AB'

    },
    {   
        name: "Spinning Class",
        date: '23/09/2022',
        time: '21:00-22:00',
        trainer: 'Kate Hudson',
        gym: 'Marylebone Square Gym',
        location: '21 Bryanston St, London W1H 7AB'

    },
    {   
        name: "Karate Class",
        date: '24/09/2022',
        time: '19:00-21:00',
        trainer: 'Kate Hudson',
        gym: 'Fitness Gym',
        location: '21 Bryanston St, London W1H 7AB'

    },

]
export default function Upcoming({navigation}) {
    
    let grouped_bookings = Object.values(bookings.reduce((acc, item) => {
        if (!acc[item.date]) acc[item.date] = {
            date: item.date,
            data: []

        };
        acc[item.date].data.push({
            name: item.name,
            time: item.time,
            trainer: item.trainer,
            gym: item.gym,
            location: item.location,
        });
        return acc;
    }, {}))

    return (
        <View>
            <BookingHeader/>
            {grouped_bookings.map((booking,index) => (
                <View key={index}>

                    <Divider style={upcoming_style_sheet.divider_date}/>
                    <View style={upcoming_style_sheet.date_header}>
                        <Text style={upcoming_style_sheet.sub_heading}>{booking.date}</Text>
                    </View>
                    {booking.data.map((value,j_index) => (
                        <View key={j_index}>
                            <Divider style={upcoming_style_sheet.divider_date}/>
                            <UpcomingBookings key={index} navigation={navigation} booking={value}/>
                        </View>
                    ))}   
                </View>
            ))}
        </View>
    )
}

const BookingHeader = () => (
    <View style={upcoming_style_sheet.header_container}>
        <Text style={upcoming_style_sheet.title}>Upcoming Bookings</Text>
    </View>
);

const UpcomingBookings = (props) => (
    <View style={upcoming_style_sheet.main_container}>
        <InfoHeader booking={props.booking}/>

        <View style={upcoming_style_sheet.display_buttons}>
            <UpcomingNavigationButtons navigation={props.navigation} name="Modify"/>
            <UpcomingNavigationButtons navigation={props.navigation} name="Cancel"/>
            <UpcomingButtons name="Contact Trainer"/>
            <UpcomingButtons name="Directions"/>
        </View>
    </View>
);


const InfoHeader= (props) => (
    <View style = {upcoming_style_sheet.info_container}>
        <View style={upcoming_style_sheet.wrap_text}>
            <View style={upcoming_style_sheet.space_text}>
                <Text style={upcoming_style_sheet.sub_heading}>{props.booking.time}</Text>
            </View>
            <View style={upcoming_style_sheet.space_text}>
                <Text style={upcoming_style_sheet.sub_heading}>{props.booking.name} at {props.booking.gym}</Text>
            </View>
            <View style={upcoming_style_sheet.space_text}>
                <Text style={upcoming_style_sheet.sub_heading}>{props.booking.location}</Text>
            </View>
        </View>
    </View>
);
const UpcomingButtons = (props) => (
    <TouchableOpacity style={upcoming_style_sheet.btn_container} >
        <View>
            <Text style={upcoming_style_sheet.btn_text}> {props.name} </Text>
        </View>
    </TouchableOpacity>

);

const UpcomingNavigationButtons = (props) => (
    <TouchableOpacity style={upcoming_style_sheet.btn_container} onPress= {
        () => props.navigation.navigate("Checkout")
    } >
        <View>
            <Text style={upcoming_style_sheet.btn_text}> {props.name} </Text>
        </View>
    </TouchableOpacity>
);