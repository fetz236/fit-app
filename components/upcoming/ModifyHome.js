import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text } from 'react-native'
import MultiSelect from 'react-native-multiple-select'
import { signup_style } from '../../styles/authentication/SignUpStyle'

const categories = [
    {
        id: 1,
        name: "Rowing"
    },
    {
        id: 2,
        name: "Weights"
    },
    {
        id: 3,
        name: "Bowling"
    },
    {
        id: 4,
        name: "Yoga"
    },
    {
        id: 5,
        name: "Cycling"
    },
    {
        id: 6,
        name: "Karate"
    },
];

export default function ModifyHome() {
    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChanged = (selected) => {
        setSelectedItems(selected)
    };

    return (
        <SafeAreaView>
            <Interests selectedItems={selectedItems} onSelectedItemsChanged={onSelectedItemsChanged}/>
        </SafeAreaView>
    )
}


const Interests = (props) => (
    <View style={signup_style.signup_container}>
        <Text style={signup_style.sub_heading}> interests </Text>
        <View style={signup_style.multi_input_container}>
            <MultiSelect items ={categories}
            uniqueKey='id'
            onSelectedItemsChange={props.onSelectedItemsChanged}
            selectedItems={props.selectedItems}
            selectText='Pick categories'
            searchInputPlaceholderText='Search Categories'
            tagRemoveIconColor='#800020'
            searchInputStyle={{
                height:50,
                width:'80%',
                backgroundColor:'transparent',
            }}
            styleDropdownMenu={{
                height:50,
                backgroundColor:'transparent',
                borderColor:'#800020',
                borderRadius:20,
                borderWidth:2,

            }}
            styleDropdownMenuSubsection={{
                backgroundColor:'transparent',
                borderColor:'#800020',
                marginLeft:'3%',
                marginRight:'3%',
                borderBottomColor:'transparent',

            }}
            styleIndicator={{
                backgroundColor:'transparent',
            }}
            styleInputGroup={{
                backgroundColor:'transparent',
                borderColor:'#800020',
                borderRadius:20,
                borderWidth:2,
            }}
            styleItemsContainer={{
                backgroundColor:'transparent',
            }}
            styleListContainer={{
                backgroundColor:'transparent',
            }}
            styleMainWrapper={{
                backgroundColor:'transparent',
            }}
            styleRowList={{
                backgroundColor:'transparent',
            }}
            styleSelectorContainer={{
                backgroundColor:'transparent',
            }}
            styleTextDropdown={{
                backgroundColor:'transparent',

            }}
            styleTextDropdownSelected={{
                backgroundColor:'transparent',
            }}
            tagBorderColor='#800020'
            tagTextColor='#800020'
            selectedItemIconColor='#800020'
            selectedItemTextColor='#800020'
            itemTextColor='#800020'
            displayKey='name'
            submitButtonColor='#800020'
            submitButtonText='Submit'

            removeSelected 
            />
        </View>
    </View>
)