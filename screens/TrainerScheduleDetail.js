import React from 'react'
import { View, Text } from 'react-native'
import TrainerSchedule from '../components/trainers/TrainerSchedule'

export default function TrainerScheduleDetail({route, navigation}) {
    return (
        <View>
            <TrainerSchedule route={route} navigation={navigation}></TrainerSchedule>
        </View>
    )
}
