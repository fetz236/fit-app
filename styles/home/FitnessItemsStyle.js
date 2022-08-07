import { StyleSheet } from 'react-native'

export const fi_items_css = StyleSheet.create({
    main_container: {
        marginTop:10,
        padding:15,
        backgroundColor: "white"
    },
    gym_image_container:{
        marginTop:5,
        backgroundColor: "white",
        paddingVertical: 10,
        paddingLeft: 15,
    },
    image_def:{
        width:500,
        height:200,
        resizeMode: "contain",
    },
    image_container:{
        alignItems:'center', 
        marginRight:20
    },
    icon_container:{
        position: "absolute",
        right: 20,
        marginTop:20
    },
    gym_info_container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        marginTop: 5,
    },
    headline_1:{
        fontSize: 14, 
        fontWeight:"600",
        color:'#800020',
    },
    headline_2:{
        fontSize: 12, 
        fontWeight:"600", 
        color:'#800020',
    },
    description_container:{
        fontSize: 12, 
        fontWeight:"600", 
        backgroundColor:"#800020", 
        height:30, 
        width:30, 
        alignItems:"center",
        justifyContent: 'center',
        borderRadius: 15,
    },
});

