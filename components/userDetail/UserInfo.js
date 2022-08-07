import React from 'react'
import { Image } from 'react-native';
import { View, Text } from 'react-native'
import { user_css } from '../../styles/userDetail/UserInfoStyle';


const user_info = {
    name: "Tashi",
    image: require('../../assets/images/user_images/user_prof.png'),
};

export default function UserInfo() {
    return (
        <View>
            <UserImage></UserImage>
            <UserDetails></UserDetails>
            <MyAccount></MyAccount>
        </View>
    )
}



const UserImage = (props) => (
    <Image style={
        user_css.user_image
    }source={user_info.image}></Image>
);

const UserDetails = (props) => (
    <View style = {user_css.name_container}>
        <Text style={user_css.user_header}> Welcome {user_info.name}</Text>
    </View>
);

const MyAccount = (props) => (

    <View>
        <Text> My account</Text>
    </View>
);