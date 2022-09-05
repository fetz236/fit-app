import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text } from 'react-native'
import { signup_style } from '../../styles/authentication/SignUpStyle'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { auth, db, storage } from '../../firebase'
import {doc, setDoc} from 'firebase/firestore'
import { getDownloadURL, ref } from "firebase/storage";

const categories = [
    {
        name: "Rowing"
    },
    {
        name: "Weights"
    },
    {
        name: "Bowling"
    },
    {
        name: "Yoga"
    },
    {
        name: "Cycling"
    },
    {
        name: "Karate"
    },
];

export default function SignUp({navigation}) {

    const [f_name, setF_name] = useState('');
    const [l_name, setL_name] = useState('');
    const [email, setEmailState] = useState('');
    const [mobile, setMobile] = useState('');
    const [passwordState, setPasswordState] = useState('');

    const [url, setUrl] = useState('')

    useEffect(() => {
        const getProfileImage = async() =>{
            const profile_image_ref = ref(storage,`gs://fit-user-app/profile_images/user.png/`);
            await getDownloadURL(profile_image_ref).then(
                (x) => {
                    setUrl(x)
                }
            )
        }
        if (url == '') { getProfileImage()}
    }, [])

    const handleSignUp = async() => {
        await auth
        .createUserWithEmailAndPassword(email, passwordState)
        .then(userCredentials => {
            const user = userCredentials.user;
            const id = user.uid;

            user.sendEmailVerification();
            setDoc(doc(db, "users", id), {
                rating: 5,
            });
            user.updateProfile({
                displayName: checkFName(f_name) + " " + checkLName(l_name),
                photoURL: url,
            }).then(function() {
                // Profile updated successfully!
                navigation.replace("UserDetail", {
                    navigation: navigation,
                })  
                 
                
              }, function(error) {
                alert(error.message);
            });
            
        })
        .catch(error => alert(error.message))
    };

    const checkFName = (first) => {
        const res = first.trim();
        return res
    };

    const checkLName = (last) => {
        const res = last.trim();
        return res
    };

    const checkMobile = (number) => {
        const cleanNumber = number.replace(/[^0-9]/g, "");
        return cleanNumber;
    };

    return (
        <SafeAreaView>
            <Icon name="close" color='#800020' size={50} style={signup_style.close_button} 
                onPress={()=> navigation.goBack()}
            />
            <View style={signup_style.header_container}>
                <Text style={signup_style.title}> fit- </Text>
            </View>
            <Divider style={signup_style.divider}/>
            <FirstName setF_name={setF_name}/>
            <LastName setL_name={setL_name}/>
            <Mobile setMobile={setMobile}/>
            <Email setEmailState = {setEmailState}/>
            <Password setPasswordState = {setPasswordState}/>
            <View style={signup_style.forgot_container}>
                <TouchableOpacity onPress={() => navigation.replace("LoginScreen" , {
                    navigation:navigation,
                })}>
                    <Text style={signup_style.sub_heading}> i actually have an account </Text>
                </TouchableOpacity>
            </View>
            <View style={signup_style.forgot_container_box}>
                <TouchableOpacity style={signup_style.touchable_opacity} 
                    onPress={() => handleSignUp()}>
                    <Text style={signup_style.sub_heading_white}> make me an account </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


const FirstName = (props) =>(
    <View style={signup_style.signup_container}>
        <Text style={signup_style.sub_heading}> first name</Text>
        <View style={signup_style.input_container}>
            <TextInput autoCorrect={false}
            textContentType='givenName'
            style={signup_style.ti_container}
            onChangeText={text => props.setF_name(text)}
            underlineColorAndroid='transparent'></TextInput>
        </View>
    </View>
)

const LastName = (props) =>(
    <View style={signup_style.signup_container}>
        <Text style={signup_style.sub_heading}> last name</Text>
        <View style={signup_style.input_container}>
            <TextInput autoCorrect={false}
            textContentType='familyName'
            style={signup_style.ti_container}
            onChangeText={text => props.setL_name(text)}
            underlineColorAndroid='transparent'></TextInput>
        </View>
    </View>
)

const Email = (props) =>(
    <View style={signup_style.signup_container}>
        <Text style={signup_style.sub_heading}> email </Text>
        <View style={signup_style.input_container}>
            <TextInput autoCorrect={false}
            autoCapitalize='none'
            textContentType='emailAddress'
            style={signup_style.ti_container}
            onChangeText={text => props.setEmailState(text)}
            underlineColorAndroid='transparent'></TextInput>
        </View>
    </View>
)

const Mobile = (props) =>(
    <View style={signup_style.signup_container}>
        <Text style={signup_style.sub_heading}> mobile </Text>
        <View style={signup_style.input_container}>
            <TextInput autoCorrect={false}
            autoCapitalize='none'
            textContentType='telephoneNumber'
            keyboardType='number-pad'
            onChangeText={text => 
                props.setMobile(text)}
            style={signup_style.ti_container}
            underlineColorAndroid='transparent'></TextInput>
        </View>
    </View>
)

const Password = (props) => {

    return(
        <View style={signup_style.signup_container}>
            <Text style={signup_style.sub_heading}> password </Text>
            <View style={signup_style.input_container}>
                <TextInput autoCorrect={false}
                autoCapitalize='none'
                textContentType='newPassword'
                secureTextEntry={true}
                style={signup_style.ti_container}
                onChangeText={text => props.setPasswordState(text)}
                underlineColorAndroid='transparent'></TextInput>
            </View>
        </View>
    )
    
}

const Interests = () => (
    <View style={signup_style.signup_container}>
        <Text style={signup_style.sub_heading}> interests </Text>
        <View style={signup_style.input_container}>
            <TextInput autoCorrect={false}
            autoCapitalize='none'
            textContentType='password'
            style={signup_style.ti_container}
            underlineColorAndroid='transparent'></TextInput>
        </View>
    </View>
)