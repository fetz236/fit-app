import React from 'react'
import { Modal, ScrollView } from 'react-native'
import Login from '../../components/authentication/Login'

export default function LoginScreen({navigation}) {
    return (
        <ScrollView>
            <Login navigation={navigation}/>
        </ScrollView>
        
    )
}
