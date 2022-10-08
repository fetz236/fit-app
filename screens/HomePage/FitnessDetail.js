import React from 'react'
import { ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import About from '../../components/fitnessDetail/About'
import CourseItems from '../../components/fitnessDetail/CourseItems'

 
export default function FitnessDetail({route, navigation}) {
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}}/>
            <CourseItems navigation={navigation} route = {route}></CourseItems>
        </ScrollView>
    )
}
