import React from 'react'
import { View, Text} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../components/fitnessDetail/About'
import CourseItems from '../components/fitnessDetail/CourseItems'
import ViewCart from '../components/fitnessDetail/ViewCart'

 
export default function FitnessDetail({route, navigation}) {
    return (
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <CourseItems navigation={navigation} schedule_params = {route.params}></CourseItems>
        </View>
    )
}
