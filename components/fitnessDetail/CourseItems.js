import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux'
import { db } from '../../firebase';
import { course_sheet } from '../../styles/fitnessDetail/CourseItemsStyle';

export default function CourseItems({navigation, ...props}) {
    
    const fc = {
        id: props.route.params.id,
        name: props.route.params.name,
        image: props.route.params.image,
        reviews: props.route.params.reviews,
        rating: props.route.params.rating,
        location: props.route.params.location, 
        subscription: props.route.params.subscription,
        telephone_number: props.route.params.telephone_number,
        categories: props.route.params.categories,
    }

    const dispatch = useDispatch();
    
    const select_item = (item) => dispatch({
        type: 'ADD_TO_CART',
        payload: item,
    });

    const [classes, setClasses] = useState([])
    const [loaded_classes, setLoadedClasses] = useState(false)

    
    useEffect( async() => {
        const loadData = async() => {
            let class_data = []
            db.collection('classes').where("fc", "==", fc.id).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const data = doc.data();
                    data.id = doc.id
                    class_data.push(data)
                })
            }).then(function(){
                setClasses(class_data)
                setLoadedClasses(true)
            }
            ).catch(err => alert(err))
            
        }

        if (classes.length == 0){
            await loadData()
        }
    }, [])

    return (
        <> 
            { loaded_classes && 
                <>
                    <MainComponent navigation={navigation} classes={classes} fc={fc}/>
                </>
            }
        </>
    )
}

const MainComponent = (props) => (
    <View style={{backgroundColor: 'white'}} showsVerticalScrollIndicator={false}>
        {props.classes.map((course, index) => (
            <TouchableOpacity activeOpacity={1} style={{
                }}
                key={index}
                onPress={() => props.navigation.navigate("ScheduleDetail", {
                    class: {
                        id: course.id,
                        name: course.name,
                        image: course.image,
                        price: course.price,
                        description: course.description,
                        curr_cap: course.curr_cap,
                        max_cap: course.max_cap,
                        categories: course.categories
                    },
                    fc:props.fc,
                }
            )}>
                <View style ={{marginBottom:10}}>
                    <View style={course_sheet.course_item}>
                        <CourseInfo course_details={course}/>
                        <CourseImage course_details={course}/>
                    </View>
                    <Divider width={0.5} orientation="vertical" style={{marginTop:5}}/>

                </View>
            </TouchableOpacity>
        ))}
    </View>
)


const CourseInfo = (props) => (
    <View style={{width:240, justifyContent:"space-evenly"}}>
        <Text style={course_sheet.course_title}>{props.course_details.name}</Text>
        <Text style={course_sheet.course_text}>{props.course_details.description}</Text>
        <Text style={course_sheet.course_text}>{props.course_details.price}</Text>

    </View>
)

const CourseImage = (props) => (
    <View>
        <Image source={{ uri:props.course_details.image}} style={course_sheet.course_image}/>
    </View>
)