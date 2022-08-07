import { StyleSheet } from 'react-native'


export const trainer_style = StyleSheet.create({
    trainer_header: {
        fontWeight: "bold",
        marginTop:"2%",
        marginLeft:"2%",
        fontSize: 20,
        marginBottom:"2%",
    },
    trainer_sub_header: {
        fontWeight: "600",
        fontSize: 16,
        marginLeft:"2%",
        marginTop:"2%",
    },
    trainer_body: {
        fontWeight:"200",
        marginTop:"2%",
        marginLeft:"2%",
        fontSize:16
    },
    container_view: {
        marginTop:"2%",
    },
    text_view: {
        marginLeft:"auto",
        marginRight:"auto",
        width: 350,
        height: 150,
        borderColor: '#aaaaaa',
        borderWidth: 2,
        borderRadius: 9,
    },
    rating_body: {
        fontWeight:"200",
        marginTop:"8%", 
        marginLeft:"2%",
        fontSize:16
    },
    text_sub_view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft:"2%",
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    sub_view_item: {
        marginTop:"2%",
        width: '50%' // is 50% of container width
    },
    divider: {
        marginTop:"4%",
        borderBottomWidth:5,
    },

    trainer_image: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        alignSelf: "center",       
        marginTop: "15%", 
    },
    
    trainer_rating:{
        alignContent:'space-around',
        justifyContent:'center',
        flexDirection:'row',
    }
});

export const trainer_schedule = StyleSheet.create({
    schedule_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        zIndex: 999,
        marginBottom: "10%",
    },
    schedule_button_style: {
        flexDirection:'row',
        justifyContent: 'center',
        width: "100%",
    },
    touchable_opacity: {
        marginTop: 20,
        backgroundColor: "#800020",
        alignItems: 'center',
        padding: 14,
        borderRadius: 30,
        width: 350,
        position: "relative",
    },
    button_text: {
        color: "white",
        fontSize: 17,
    },
});