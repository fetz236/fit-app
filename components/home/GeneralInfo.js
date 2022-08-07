import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { View, Text } from 'react-native'
import { general_info_css } from '../../styles/home/GeneralInfoStyle';
import Icon from 'react-native-vector-icons/Ionicons';



const account_icon = {image : require('../../assets/icons/bottom_icons/account_icon.jpg')};
const logo = {image : require('../../assets/images/general_images/fit.png')};

export default function GeneralInfo({ navigation, ...props }) {
    return (
        <View source={general_info_css.gi_container}>
            <Logo/>
            <View style={general_info_css.profile_container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("UserDetail")}>
                        

                    <Icon name="person-outline" size={35} color='#800020'></Icon>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}


const Logo = (props) => (
    <View style={general_info_css.logo_container}>
        <Image source ={logo.image} style={general_info_css.logo_def}/>
    </View>
);

