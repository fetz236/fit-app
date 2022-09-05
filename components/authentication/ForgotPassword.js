import React from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import { fp_style } from '../../styles/authentication/ForgotPassword'
import Icon from 'react-native-vector-icons/Ionicons';

export default function ForgotPassword({navigation}) {
    return (
        <SafeAreaView>
            <Icon name="close" color='#800020' size={50} style={fp_style.close_button} 
                    onPress={()=> navigation.goBack()}
                />
            <View style={fp_style.header_container}>
                <Text style={fp_style.title}> fit- </Text>
            </View>
            <Divider style={fp_style.divider}/>
            <View style={fp_style.fp_container}>
                <Text style={fp_style.sub_heading}> mobile or email </Text>
                <View style={fp_style.input_container}>
                    <TextInput autoCorrect={false}
                    autoCapitalize='none'
                    textContentType='emailAddress'
                     style={fp_style.ti_container}
                    underlineColorAndroid='transparent'></TextInput>
                </View>
            </View>
            <View style={fp_style.forgot_container}>
                <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
                    <Text style={fp_style.sub_heading}> actually i remembered my password </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
