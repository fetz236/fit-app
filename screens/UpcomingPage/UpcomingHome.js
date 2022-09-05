import React from 'react'
import { SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import Upcoming from '../../components/upcoming/Upcoming'

export default function UpcomingHome() {
    return (
        <ScrollView>
            <SafeAreaView>
                <Upcoming/>
            </SafeAreaView>
        </ScrollView>
    )
}
