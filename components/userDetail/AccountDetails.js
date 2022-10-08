import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { account_details_style } from '../../styles/userDetail/AccountDetailsStyle'
import { TextInput } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PhoneInput from 'react-native-phone-number-input'
import MultiSelect from 'react-native-multiple-select'

const categories = require('../../categories.json');

export default function AccountDetails() {

    const [f_name, setF_name] = useState()
    const [fView, setfView] = useState(false)

    const [l_name, setL_name] = useState()
    const [lView, setlView] = useState(false)

    const [mobile, setMobile] = useState()
    const [mobileCountry, setMobileCountry] = useState('44');
    const [mView, setmView] = useState(false)

    const [selectedItems, setSelectedItems] = useState([]);

    const onSelectedItemsChanged = (selected) => {
        setSelectedItems(selected)
    };
    

    
    return (
        <View style={account_details_style.main_container}>
            <AccountDetailsBody/>
            <AccountFirstName setF_name={setF_name} fView={fView} setfView={setfView}/>
            <AccountLastName setL_name={setL_name} lView={lView} setlView={setlView}/>
            <AccountMobile setMobile={setMobile} mView={mView} setmView={setmView} setMobileCountry={setMobileCountry}/>
            <AccountInterests selectedItems={selectedItems} onSelectedItemsChanged={onSelectedItemsChanged}/>
        </View>
    )
}

const AccountDetailsBody = () => (
    <View>
        <View style={account_details_style.body_container}>
            <Text style={account_details_style.title}>General Information</Text>  
        </View>
        <View style={account_details_style.body_container}>
            <Text style={account_details_style.sub_heading}>You can edit and change any personal 
            information in this section</Text>
        </View>
    </View>

)

const AccountFirstName = (props) => (
    <View style={account_details_style.signup_container}>
        <Text style={account_details_style.title}>first name</Text>
        <View style={account_details_style.main_input_container}>
            <View style={account_details_style.input_container}>
                <TextInput 
                    editable={props.fView}
                    autoCorrect={false}
                    textContentType='givenName'
                    autoComplete='name-given'
                    style={account_details_style.ti_container}
                    onChangeText={text => props.setF_name(text)}
                    underlineColorAndroid='transparent'>
                </TextInput>
                
            </View>
            <TouchableOpacity style={account_details_style.editable_pencil}
            onPress={() => props.setfView(!props.fView)}>
                <MaterialCommunityIcons name="pencil" size={30} color={'white'}/>
            </TouchableOpacity>
        </View>
    </View>
)

const AccountLastName = (props) => (
    <View style={account_details_style.signup_container}>
        <Text style={account_details_style.title}>last name</Text>
        <View style={account_details_style.main_input_container}>
            <View style={account_details_style.input_container}>
                <TextInput 
                    editable={props.lView}
                    autoCorrect={false}
                    textContentType='familyName'
                    autoComplete='name-family'
                    style={account_details_style.ti_container}
                    onChangeText={text => props.setL_name(text)}
                    underlineColorAndroid='transparent'>
                </TextInput>
                
            </View>
            <TouchableOpacity style={account_details_style.editable_pencil}
            onPress={() => props.setlView(!props.lView)}>
                <MaterialCommunityIcons name="pencil" size={30} color={'white'}/>
            </TouchableOpacity>
        </View>
    </View>
)

const AccountMobile = (props) => (
    <View style={account_details_style.signup_container}>
        <Text style={account_details_style.title}>mobile </Text>
        <View>  
            <View style={account_details_style.main_input_container}>
                <View style={account_details_style.input_container}>
                    <PhoneInput
                    
                    defaultCode='GB'
                    onChangeCountry={text => props.setMobileCountry(text.callingCode)}
                    onChangeText={text => props.setMobile(text)}
                    containerStyle={{
                        backgroundColor:'transparent',
                    }}
                    codeTextStyle={{
                        backgroundColor:'transparent',
                    }}
                    textContainerStyle={{
                        backgroundColor:'transparent',
                    }}
                    />
                </View>
                <TouchableOpacity style={account_details_style.editable_pencil}
                onPress={() => props.setmView(!props.mView)}>
                    <MaterialCommunityIcons name="pencil" size={30} color={'white'}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
)

const AccountInterests = (props) =>(
    <View style={account_details_style.signup_container}>
        <Text style={account_details_style.title}> interests </Text>
            <View style={account_details_style.main_input_container}>
                <View style={account_details_style.multi_input_container}>
                    <MultiSelect 
                        items ={categories}
                        uniqueKey='id'
                        onSelectedItemsChange={props.onSelectedItemsChanged}
                        selectedItems={props.selectedItems}
                        selectText='Pick categories'
                        searchInputPlaceholderText='Search Categories'
                        tagRemoveIconColor='#800020'
                        searchInputStyle={{
                            height:60,
                            width:'80%',
                            backgroundColor:'transparent',
                        }}
                        styleDropdownMenu={{
                            height:60,
                            backgroundColor:'transparent',
                            borderColor:'#800020',
                            borderRadius:50,
                            borderWidth:1,

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
                            borderRadius:50,
                            borderWidth:1,
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
                <TouchableOpacity style={account_details_style.editable_pencil}
                onPress={() => props.setlView(!props.lView)}>
                    <MaterialCommunityIcons name="pencil" size={30} color={'white'}/>
                </TouchableOpacity>
            </View>
    </View>
) 