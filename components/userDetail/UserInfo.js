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
import { getBlob, getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const user_settings = [
    {
        name:'Account Details',
        navName: 'AccountDetailsScreen',
    },
    {
        name:'Payment Methods',
        navName: 'PaymentDetailsScreen',
    },
    {
        name:'Contact Preferences',
        navName: 'ContactPreferencesScreen',
    },
    {
        name:'Refer a Friend',
        navName: 'ReferUserScreen',
    },
];


export default function UserInfo({navigation, route}) {
    const id = route.params.id;
    const user = auth.currentUser;

    const [user_data, setUserData] = useState('');
    const [url, setUrl] = useState()
    const [updated, setUpdated] = useState(false)
    useEffect(async() => {
        await setUrl(user.photoURL);
        setUpdated(true);
      }, []);

    useEffect(() => {
        const loadData = async() => {
            const snap = await getDoc(doc(db, 'users', user.uid))
            if (snap.exists()) {
                setUserData(snap.data())
            }
            else {
            alert("Internal Error")
            }
        }
        if (user_data ==''){
            loadData()
        }
    }, [])

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() =>{
            navigation.goBack()
        })
        .catch(error => alert(error.message))
    };

    const [uploading, setUploading] = useState(false)
    
    const selectLibrary = async() => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4,3],
            quality:1,
        }).then((result) => {
            if (result.uri){
                setUrl(result.uri)
                setUploading(true);
            }
        }
        ).catch((error) => {
            alert(error)
        });
    };


    const getProfileImage = async() =>{
        const profile_image_ref = ref(storage, `gs://fit-user-app/profile_images/${user.uid}`);
        const fileReaderInstance = new FileReader();
        fileReaderInstance.readAsDataURL(await getBlob(profile_image_ref)).then(
            (x) => {
                
                fileReaderInstance.onload = () => {
                    base64data = fileReaderInstance.result;                
                    setUrl(base64data);
                }
            }
        )
    };

    
    const uploadFile = async() => {

        const response = await fetch(url);
        const blob = await response.blob();
        const file_name = user.uid;

        var reference = ref(storage, `gs://fit-user-app/profile_images/${file_name}`);
        await uploadBytesResumable(reference, blob).then(
            getProfileImage().then(
                user.updateProfile({
                    photoURL:url,
                })
            )
        ).catch((err) =>
            alert(err.message)
        )
        await getDownloadURL(reference).then((docURL) => {
            db.collection('users').doc(user.uid).update({
                photoURL: docURL,
            })
        }).catch((err) =>
            alert(err.message)
        )

        setUploading(false);

    };

    return (
        <ScrollView style={user_css.main_container}>
            { updated && <UserImage url={url} selectLibrary={selectLibrary}
                uploadFile={uploadFile} uploading={uploading}></UserImage>
            }
            <UserDetails displayName={user.displayName}></UserDetails>
            <MyAccount user_data={user_data}></MyAccount>
            {user_settings.map((settings, index) => (
                <TouchableOpacity key={index} style={{marginBottom:'1%'}} onPress={() => navigation.navigate(settings.navName)}>
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
            onPress={() => props.selectLibrary()}>
            <Image style={
            user_css.user_image
            } source={{uri:props.url}}/>
        </TouchableOpacity>
        { props.uploading && < TouchableOpacity
            onPress={() => props.uploadFile()}
            style={user_css.checkmark}
            >
                <View style={user_css.check_box}>
                    <MaterialCommunityIcons name='check' 
                    size={30}
                    color={'white'}/>
                </View>
                
            
        </TouchableOpacity>
        }
    </View>
    
);

const UserDetails = (props) => (
    <View style = {user_css.name_container}>
        <Text style={user_css.user_header}> Welcome {props.displayName}</Text>
    </View>
);

const MyAccount = (props) => (
    <View style={user_css.review_container}>
        <Rating type='custom' ratingCount={5} startingValue={props.user_data.rating} tintColor='#f2f2f2' readonly
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
