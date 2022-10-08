import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import AccountCreated from '../../components/authentication/AccountCreated'

export default function AccountCreatedScreen({route, navigation}) {
    return (
        <ScrollView>
            <AccountCreated route={route} navigation={navigation}/>
        </ScrollView>
    )
}
