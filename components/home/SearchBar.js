import React from 'react'
import { View, Text } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';
import { search_bar_css } from '../../styles/home/SearchBarStyle';


export default function SearchBar() {
    return (
        <View style={ search_bar_css.search_bar_container }>
            <GooglePlacesAutocomplete 
            query = {{key: "AIzaSyCJsjXeNbxR8v3FzL64dusYJ8QGoxxMV_Q"}}
            onPress={(data, details=null) =>{
                const city = data.description.split(",")[0]
            }}
            placeholder ="Search" 
            textInputProps={{
                placeholderTextColor: '#800020',
                returnKeyType: "search"
            }}
            styles={{
                textInput:{
                    backgroundColor: "white",
                    borderRadius:20,
                    fontWeight: "700",
                    marginTop: 7,
                    color:'#800020',
                }, 
                textInputContainer:{
                    backgroundColor: "white",
                    borderWidth:1,
                    borderColor:'#800020',
                    borderRadius:50,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                    color:'#800020',
                },    
            }}

            renderLeftButton = {() => (
                <View style={{marginLeft: 10}}>
                    <Icon name="location-outline" size= {24} color='#800020'></Icon>
                </View>
            )}

            renderRightButton = {() => (
                <View style={{
                        flexDirection: "row",
                        marginRight: 8,
                        backgroundColor: "#800020",
                        padding: 9,
                        borderRadius: 30,
                        alignItems: "center"
                    }}
                >
                    <Icon name="time-outline" size={14} color='white'></Icon>
                    <Text style={{color:'white'}}> Search </Text>
                </View>
            )}
            />
        </View>
    )
}
