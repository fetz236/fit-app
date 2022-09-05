import React from 'react'
import { ScrollView } from 'react-native'
import AuthenticationHome from '../../components/authentication/AuthenticationHome'

export default function AuthenticationScreen({navigation}) {
    return (
        <ScrollView>
            <AuthenticationHome navigation={navigation}/>
        </ScrollView>
    )
}
