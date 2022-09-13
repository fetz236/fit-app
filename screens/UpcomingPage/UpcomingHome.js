import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import Upcoming from '../../components/upcoming/Upcoming'

export default function UpcomingHome({navigation}) {
    return (
        <ScrollView>
            <SafeAreaView>
                <Upcoming navigation={navigation}/>
            </SafeAreaView>
        </ScrollView>
    )
}
