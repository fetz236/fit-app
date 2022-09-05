import React from 'react'
import { View, Text } from 'react-native'
import ViewSchedule from '../../components/scheduleDetail/ViewSchedule'

export default function ScheduleDetail({route, navigation}) {
    return (
        <View>
            <ViewSchedule route={route} navigation={navigation}></ViewSchedule>
        </View>
    )
}
