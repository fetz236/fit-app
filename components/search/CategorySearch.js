import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { category_search_bar_css } from '../../styles/SearchHome/UserSearchBar/CategorySearch';

const fake_data = [
    {
        image : require('../../assets/images/search_screen_images/rowing_category.jpg'),
        text: "Rowing"
    },
    {
        image : require('../../assets/images/search_screen_images/weights_category.jpg'),
        text: "Weights"
    },
    {
        image : require('../../assets/images/search_screen_images/bowling_category.jpg'),
        text: "Bowling"
    },
    {
        image : require('../../assets/images/search_screen_images/yoga_category.jpg'),
        text: "Yoga"
    },
    {
        image : require('../../assets/images/search_screen_images/cycling_category.jpg'),
        text: "Cycling"
    },
    {
        image : require('../../assets/images/search_screen_images/karate_category.jpg'),
        text: "Karate"
    },
    {
        image : require('../../assets/images/search_screen_images/karate_category.jpg'),
        text: "Karate"
    },
];


export default function CategorySearch() {
    return (
        <View style={category_search_bar_css.main_container}>
            <View style={category_search_bar_css.item_container}>
                
            {
                
                fake_data.map((item, index) =>{
                    if (index %3 ==0 && index+1 < fake_data.length){
                        index += 1;
                        return (
                            <View key={index} style={{flexDirection:'row' , marginTop:'3%' , marginBottom:'3%', marginLeft: '3%', marginRight:'3%'}}>
                                <TouchableOpacity
                                    onPress={() => console.log("ok")}
                                    style= {{marginRight:'3%'}}
                                >
                                    <View key={index} style = {category_search_bar_css.row_container}>
                                        <ImageBackground imageStyle={{opacity:0.3, borderRadius:20,}} style={category_search_bar_css.category_image} source={item.image}>
                                        <Text style={category_search_bar_css.category_text}> {item.text.toUpperCase()}</Text>
                                        </ImageBackground>
    
                                    </View>   
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => console.log("ok")}
                                >
                                    <View key={index+1} style = {category_search_bar_css.row_container}>
                                        <ImageBackground imageStyle={{opacity:0.3, borderRadius:20,}} style={category_search_bar_css.category_image_portrait} source={fake_data[index].image}>
                                        <Text style={category_search_bar_css.category_text_portrait}> {fake_data[index].text.toUpperCase()}</Text>
                                        </ImageBackground>
    
                                    </View>   
                                </TouchableOpacity>
                            </View>
                        );
                    }
                    
                    else if (index%3 ==2){
                        return (
                            <View key={index} style={{flexDirection:'row' , marginLeft: '3%', marginRight:'3%'}}>
                                <TouchableOpacity
                                    onPress={() => console.log("ok")}
                                >
                                    <View key={index} style = {category_search_bar_css.row_container_landscape}>
                                        <ImageBackground imageStyle={{opacity:0.3, borderRadius:20,}} style={category_search_bar_css.category_image_landscape} source={item.image}>
                                        <Text style={category_search_bar_css.category_text_landscape}> {item.text.toUpperCase()}</Text>
                                        </ImageBackground>
    
                                    </View>   
                                </TouchableOpacity>
                            </View>
                        );
                    }
                    else if (index %3 ==0 && index+1 >= fake_data.length){
                        return (
                            <View key={index} style={{flexDirection:'row' , marginTop:'3%' , marginBottom:'3%',marginLeft: '3%', marginRight:'3%'}}>

                                <TouchableOpacity
                                    onPress={() => console.log("ok")}
                                    style= {{marginRight:'3%'}}
                                >
                                    <View key={index} style = {category_search_bar_css.row_container}>
                                        <ImageBackground imageStyle={{opacity:0.3, borderRadius:20,}} style={category_search_bar_css.category_image} source={item.image}>
                                        <Text style={category_search_bar_css.category_text}> {item.text.toUpperCase()}</Text>
                                        </ImageBackground>

                                    </View>   
                                </TouchableOpacity>
                            </View>
                        )
                        
                    }
                    
                }
            )}
            </View> 
        </View>
        
    )
}
