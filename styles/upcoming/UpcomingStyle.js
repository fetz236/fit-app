import { StyleSheet } from 'react-native'

export const upcoming_style_sheet = StyleSheet.create({
    upcoming_item_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        marginLeft:20,
    },
    header_container: {
        alignItems:'center',
        marginTop:"5%",
        flexDirection:'column',
        justifyContent:'space-between',
    },
    title:{
        color: '#800020',
        fontSize:20,
        fontWeight:'600',

    },
    sub_heading:{
        color: '#800020',
        fontSize:20,
        fontWeight:'500',
        
    },
    divider:{
        marginTop:'5%',
        marginBottom:'5%',
        color:'#a2a2a2',
    },
    divider_date:{
        marginTop:'3%',
        marginBottom:'3%',
        color:'#a2a2a2',
    },
    upcoming_title_style:{
        fontSize:19,
        fontWeight:'600',    
    },
    main_container:{
        marginTop:'2%',
        marginBottom:'2%',
        marginLeft:'2%',
        marginRight:'2%',
        width:'95%',
        height:300,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#800020',
    },
    info_container:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:'4%',
        marginLeft:'4%',
        marginRight:'4%',
        marginBottom:'4%',
        alignItems:'center',
        justifyContent:'center',
    },
    btn_container:{
        marginTop:'2%',
        marginBottom:'2%',
        marginLeft:'2%',
        marginRight:'2%',
        width:'44%',
        height:'35%',
        borderRadius:50,
        borderWidth:2,
        borderColor:'#800020',
        backgroundColor: '#800020',
        alignItems:'center',
        justifyContent:'center',
    },
    date_header:{
        marginLeft:'2%',
    },
    btn_text:{
        fontSize:18,
        fontWeight:'600',
        color:'white',
    },
    space_text:{
        marginTop:'5%',
    },
    display_buttons:{
        flex:1,
        flexDirection: 'row', 
        flexWrap: 'wrap',
    },
    wrap_text:{
        alignItems:'center',
        justifyContent:'center',
    }
});

