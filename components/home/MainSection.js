import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { categories_css } from '../../styles/home/CategoriesStyle';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { fi_items_css } from '../../styles/home/FitnessItemsStyle';
import { db, storage } from '../../firebase';
import { getBlob, getBytes, getDownloadURL, getStorage, list, listAll, ref,  } from 'firebase/storage';
import { applyActionCode } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';



export default function MainSection({navigation}) {

    const items = require('../../categories.json')

    const [fitness, setFitness] = useState([])
    const [loaded_fitness, setLoadedFitness] = useState(false)
    const [sorted, setSorted] = useState([])
    const [loaded_sorted, setLoadedSorted] = useState(false)
    /*

    useEffect(async() => {
        const getGymImages = async() => {
            const store_image_ref = ref(storage, `gs://fit-user-app/store_images/k6K7sNIvLqF0t124WffQ`);
            const fileReaderInstance = new FileReader();
            await list(store_image_ref).then(function(result) {
                    result.items.forEach(async function (imageRef) {
                        // And finally display them
                        console.log(await getDownloadURL(imageRef));
                    })
                }).catch(function(error) {
                    // Handle any errors
                });
                fileReaderInstance.readAsDataURL(await (store_image_ref)).then(
                    (x) => {
                        
                        fileReaderInstance.onload = () => {
                            base64data = fileReaderInstance.result;                
                            setFitImage(base64data);
                        }
                    }
                )
        }
        getGymImages()
    }, []);

    */

    useEffect( async() => {
        const loadData = async() => {
            let fit_data = []
            db.collection('fitness_centres').get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const data = doc.data();
                    data.id = doc.id
                    fit_data.push(data)
                })
            }).then(function(){
                setSorted(fit_data)
                setFitness(fit_data)
                setLoadedFitness(true)
            }
            ).catch(err => alert(err))
            
        }

        if (fitness.length == 0){
            await loadData()
        }
    }, [])    

    const loadFitness = (selected_cat) => {
        const sorted_data = []
        for(let i=0; i<fitness.length;i++){
            let f_cat = fitness[i].categories
            for (let j=0; j<f_cat.length; j++){
                if (f_cat[j] ==selected_cat.__id__){
                    sorted_data.push(fitness[i])
                }
            }
            
        }
        setSorted(sorted_data)
        setLoadedSorted(true)
    }
    
    const loadAll = () => {
        setSorted(fitness)
        setLoadedSorted(false)
    }

    return (
        <>  
            {
                loaded_fitness && 
                <>
                {loaded_sorted &&<Reload loadAll={loadAll}/> }
                    <Categories items={items} loadFitness={loadFitness}/>
                    <FitnessItems sorted={sorted} navigation={navigation}/>
                </>
            }  
             
        </>
    )
}

const Reload = (props) => (
    <View style={categories_css.reload}>
        <TouchableOpacity style={categories_css.reload_button} onPress={()=>props.loadAll(false)}>
            <Text style={categories_css.white_subheading}>RELOAD</Text>
        </TouchableOpacity>
    </View>
)

const Categories = (props) => {

    return(
        <View style={categories_css.categories_container}>
                {   props.items &&
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {props.items.map((item,index) =>(
                            <TouchableOpacity key={index} onPress={()=>props.loadFitness(item)}>
                                <View key={index} style={categories_css.item_container}>
                                    <MaterialCommunityIcons name={item.icon_name} 
                                    style={categories_css.image_def}/>
                                    <Text style={categories_css.text_def}>{item.name}</Text>
                                </View>  
                            </TouchableOpacity>
                        ))}           
                    </ScrollView>
                }
            </View>
    )
}

const FitnessItems = (props) => {
    const [heart_state, setHeartState] = useState(true);
    const addFavourites = () => {
        setHeartState(!heart_state);
    };

    return (
        <>
            {props.sorted.map((fit, index) => (
                <TouchableOpacity activeOpacity={1} style={{
                }}
                key={index}
                onPress={() => props.navigation.navigate("FitnessDetail", {
                    id: fit.id,
                    name: fit.name,
                    image: fit.images,
                    price: fit.price,
                    reviews: fit.reviews,
                    rating: fit.rating,
                    location: fit.location, 
                    subscription: fit.subscription,
                    telephone_number: fit.telephone_number,
                    categories: fit.categories,
                }
                )}
                >
                <View key={index}>
                    <View style={fi_items_css.main_container}>
                        <GymImage image={fit.images} heart_state={heart_state} addFavourites={addFavourites}/>
                        <GymInfo name={fit.name} rating={fit.rating}/>
                    </View> 
                </View>
            </TouchableOpacity>

            ))}
        </>
    )
}

const GymImage = (props) => (
    <View style={fi_items_css.gym_image_container}>
        <Image source={{uri:props.image[0]}} style={fi_items_css.image_def}/>
        <TouchableOpacity style={fi_items_css.icon_container} onPress={() => props.addFavourites()}>
            <MaterialCommunityIcons name={props.heart_state?'heart-outline':'heart'} 
            size={25} color='white'></MaterialCommunityIcons>
        </TouchableOpacity>
    </View>
)

const GymInfo = (props) => (
    <View style={fi_items_css.gym_info_container}>
            <View>
                <Text style={fi_items_css.headline_1}>{props.name}</Text>
                <Text style={fi_items_css.headline_2}>headline 2</Text>
            </View>
        <View style={fi_items_css.description_container}>
            <Text style={{color:'white'}}>{props.rating}</Text>
        </View>
    </View>
)