import React, { useEffect, useState } from 'react'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native'
import { Rating } from 'react-native-ratings';
import { user_css } from '../../styles/userDetail/UserInfoStyle';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';
import { ScrollView } from 'react-native';
import { auth, db, storage } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const user_settings = [
    {
        name:'Account Details',
    },
    {
        name:'Booking Details',
    },
    {
        name:'Payment Methods',
    },
    {
        name:'Contact Preferences',
    },
    {
        name:'Refer a Friend',
    },
    {
        name:'TBD',
    },
    {
        name:'TBD Details',
    },
    {
        name:'TBD Details',
    },
];

export default function UserInfo({navigation, route}) {
    const id = route.params.id;
    const user = auth.currentUser;

    const [rating, setRating] = useState('');


    useEffect(() => {
        const getRating = async() =>{
            const docRef = doc(db, "users", user.uid);
            await getDoc(docRef).then(
                (x) => {
                    setRating(x)
                }
            )
        }
        if (rating == '') { getRating()}
    }, [])

    const handleSignOut = () => {
        auth
        .signOut()
        .then((
            navigation.navigate("Home")
        ))
        .catch(error => alert(error.message))
    };



    

    const [imageURI, setImageURI] = useState({
        uri: user.photoURL,
    })

    const [uploading, setUploading] = useState(false)
    const selectLibrary = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
        });

        const source = result;
        setImageURI(source);
    };

    const uploadFile = async() => {
        setUploading(true);
        const response = await fetch(imageURI.uri);
        const blob = await response.blob();
        const file_name = user.uid;

        var reference = ref(storage, `gs://fit-user-app/profile_images/${file_name}`);

        

        console.log(imageURI)
        try{
            uploadBytes(reference, blob).then((snapshot) => {
                try {  
                    getDownloadURL(reference).then(
                        (x) => {
                            setImageURI({
                                uri:x,
                            })
                        }
                    )

                }
                catch(err){
                    console.log("error",err);
                }

                user.updateProfile({
                    photoURL: imageURI,
                })
                
              });
        }
        catch(err){
            console.log("error",err);
        }

        setUploading(false);

    };

    const changeProfile = async() => {
        await selectLibrary();
        await uploadFile()
    }

    return (
        <ScrollView style={user_css.main_container}>
            <UserImage imageURI={imageURI} changeProfile={changeProfile}
                uploadFile={uploadFile}></UserImage>
            <UserDetails displayName={user.displayName}></UserDetails>
            <MyAccount rating={rating}></MyAccount>
            {user_settings.map((settings, index) => (
                <TouchableOpacity key={index} style={{marginBottom:'1%'}}>
                    <DisplaySettings name ={settings.name}></DisplaySettings>
                </TouchableOpacity>
            ))}
            <Button onPress={()=> {
                handleSignOut();
            }} title="Log out" color='#800020'/>
        </ScrollView>
    )
}



const UserImage = (props) => (
    <View style={user_css.image_border}>
        <TouchableOpacity
            onPress={() => props.changeProfile()}>
            <Image style={
            user_css.user_image
            } source={{uri:props.imageURI.uri}}/>
        </TouchableOpacity>
    </View>
    
);

const UserDetails = (props) => (
    <View style = {user_css.name_container}>
        <Text style={user_css.user_header}> Welcome {props.displayName}</Text>
    </View>
);

const MyAccount = (props) => (
    <View style={user_css.review_container}>
        <Rating type='custom' ratingCount={5} startingValue={props.rating} tintColor='#f2f2f2' readonly
                style={{
                    marginTop:"5%",
                }} imageSize={25}> </Rating>
        <Text style={user_css.user_sub_heading}> My Account Settings</Text>
    </View>
);

const DisplaySettings = (props) => (
    <View style={user_css.diplay_settings}>
        <Text style = {user_css.display_settings_text}>
            {props.name}

        </Text>
        <Icon name="ios-arrow-forward" size={20} style={user_css.arrow} ></Icon>
    </View>
);
