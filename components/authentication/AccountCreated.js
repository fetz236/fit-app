import React from 'react'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native'
import { View, Text } from 'react-native'
import { ac_style } from '../../styles/authentication/AccountCreatedStyle'
import Icon from 'react-native-vector-icons/Ionicons';

export default function AccountCreated({navigation, ...props}) {
    return (
    <>
        <Icon name="close" color='#800020' size={50} style={ac_style.close_button} 
            onPress={()=> navigation.goBack()}
        />

        <SafeAreaView style={ac_style.safe_one_styll}>
            <View style={ac_style.lil_circle_backg}/>
            <View style={ac_style.header_container}>
                <Text style={ac_style.title}>fit-</Text>
                <Text style={ac_style.sub_heading}>account created</Text>
                
                <TouchableOpacity style={ac_style.touchable_opacity} 
                    onPress={() => navigation.replace("UserDetail" , {
                    navigation:navigation,
                })}>
                    <Text style={ac_style.sub_heading_white}> continue to checkout </Text>
                </TouchableOpacity>
            </View>
            
            
            <View style={ac_style.circle_backg}/>
        </SafeAreaView>
    </>
    )
}
