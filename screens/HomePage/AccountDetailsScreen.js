import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import AccountDetails from '../../components/userDetail/AccountDetails'

 
export default function AccountDetailsScreen({route, navigation}) {
    return (
        <ScrollView>
            <AccountDetails/>
        </ScrollView>
    )
}
