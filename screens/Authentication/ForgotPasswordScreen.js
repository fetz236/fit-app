import React from 'react'
import { ScrollView } from 'react-native'
import ForgotPassword from '../../components/authentication/ForgotPassword'

export default function ForgotPasswordScreen({navigation}) {
    return (
        <ScrollView>
            <ForgotPassword navigation={navigation}/>
        </ScrollView>
    )
}
