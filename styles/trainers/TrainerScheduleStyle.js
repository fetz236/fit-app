import { StyleSheet } from 'react-native'

export const schedule_style_sheet = StyleSheet.create({
    schedule_item_style: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:10,
        marginLeft:20,
    },
    schedule_title_style:{
        fontSize:19,
        fontWeight:'600',    
    },
    date_time_style:{
        width: 100,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10,
    },
});

