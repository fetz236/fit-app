import React from 'react'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import SignUp from '../../components/authentication/SignUp'

export default function SignUpScreen({navigation}) {
    return (
        <ScrollView>
            <SignUp navigation={navigation}/>
        </ScrollView>
    )
}
