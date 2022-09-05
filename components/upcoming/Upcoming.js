import React from 'react'
import { View, Text } from 'react-native'


const bookings = [
    {   
        name: "Karate Class",
        date: '23/09/2022',
        time: '21:00',
        trainer: 'Kate Hudson',
        gym: 'Marylebone',
        location: '21 Bryanston St, London W1H 7AB'

    },

]
export default function Upcoming() {
    
    return (
        <View>
            <Text>Upcoming Bookings</Text>
        </View>
    )
}

const UpcomingBookings = () => {
    <View>
        <View style = {{flexDirection:'row'}}>

            <View style = {{flexDirection:'row'}}>
                <Text>Date</Text>
                <Text>Time</Text>
            </View>
                
        </View>
    </View>
};
