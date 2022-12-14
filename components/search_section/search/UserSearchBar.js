import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { user_search_bar_css } from '../../../styles/SearchHome/UserSearchBar/UserSearchBarStyle'
import { TextInput } from 'react-native';
import CategorySearch from './CategorySearch';
import { SectionList } from 'react-native';

const grouped_data = [
    {
        title: "Category",
        data: require('../../../categories.json'),
    },
    {
        title: "Class",
        data: [
            {
                name:"Spinning Class",
            },
            {
                name:"Yoga Class"
            }
        ],
    },
    {
        title: "Trainer",
        data: 
        [
            {
                name:"Trainer John",
            },
            {
                name:"Trainer Kate"
            },
        ]
    },
];

const Item = ({ title }) => (
    <View style={user_search_bar_css.flat_list}>
      <Text style={user_search_bar_css.flat_list_text}>{title}</Text>
    </View>
  );

const UserSearchBar = ({ navigation }) => {

      
    const [filteredData, setFilteredData] = useState([]);
    const [masterData, setMasterData] = useState(grouped_data);
    const [search, setSearch] = useState(''); 
    const [categoryState, setCategoryState] = useState(true);
    const [display, setDisplay] = useState([])

    const searchFilter = (text) => {
        if(text){
            setCategoryState(false);
            const new_data = masterData.reduce((result, masterData) =>{
                const {title, data} = masterData;
                
                const filter = data.filter(
                    element =>element.name.includes(text)
                );
                
                if (filter.length !== 0){
                    result.push({
                        title,
                        data:filter
                    });
                }
                return result;
            }, [])
            /*
            const new_data = masterData.filter((item) => {
                const item_data = item.text ? item.data.toUpperCase() : ''.toUpperCase();
                const text_data = text.toUpperCase();
                return item_data.indexOf(text_data) > -1;
            });
            */
            setFilteredData(new_data);
            setSearch(text);
        }
        else{
            setCategoryState(true);
            setFilteredData('');
            setSearch(text);
        }
    };


    return (
        <>
        <View style={user_search_bar_css.main_container}>
            <View style={user_search_bar_css.search_bar_container}>
                <Icon name="search" size={20} color="#800020" style={user_search_bar_css.search_icon}/>
                <TextInput underlineColorAndroid="transparent" placeholder="Search"  placeholderTextColor="black"
                    style={user_search_bar_css.input_container} 
                    value={search}
                    onChangeText={(text) => searchFilter(text)}
                />
                
            </View>  
            
        </View>
        <View style={user_search_bar_css.flat_list_container}>
            <SectionList
            sections={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Item title={item.name} />}
            nestedScrollEnabled={false}
            renderSectionHeader={({ section: { title } }) => (
            <Text style={user_search_bar_css.flat_list_heading}>{title}</Text>
            )}
            />
        </View>
        <View>
            {categoryState && <CategorySearch />}
        </View>
        </>
                
    )
};

export default UserSearchBar;
