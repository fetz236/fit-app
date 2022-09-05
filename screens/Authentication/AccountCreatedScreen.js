import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import AccountCreated from '../../components/authentication/AccountCreated'

export default function AccountCreatedScreen({navigation}) {
    return (
        <ScrollView>
            <AccountCreated navigation={navigation}/>
        </ScrollView>
    )
}
