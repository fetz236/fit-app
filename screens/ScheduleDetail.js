import React from 'react'
import { View, Text } from 'react-native'
import ViewCart from '../components/fitnessDetail/ViewCart'
import ViewSchedule from '../components/scheduleDetail/ViewSchedule'

export default function ScheduleDetail({route, navigation}) {
    return (
        <View>
            <ViewSchedule route={route}></ViewSchedule>
            <ViewCart navigation={navigation} fitnessName = {route.params.name}/>
        </View>
    )
}
