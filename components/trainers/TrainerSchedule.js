import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Divider } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { schedule_style_sheet } from '../../styles/trainers/TrainerScheduleStyle'
import { Button } from 'react-native';
import { auth } from '../../firebase';

const trainer_details = [
    {
        date: '21/02/2022',
        time: ['11:00',,'13:00','14:00','19:00','20:00'],
        title: "Personal Training",
    },
    {
        date: '22/02/2022',
        time: ['11:00','19:00','20:00'],
        title: "Personal Training",
    },
    {
        date: '22/02/2022',
        time: ['11:00',,'14:00','15:00','19:00','20:00'],
        title: "Group Training",
    },
    {
        date: '23/02/2022',
        time: ['11:00','12:00','13:00','14:00','15:00','19:00','20:00'],
        title: "Personal Training",
    },
    {
        date: '25/02/2022',
        time: ['13:00','14:00','15:00','19:00','20:00'],
        title: "Group Training",
    },
];

export const TrainerSchedule = ({navigation, ...props}) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [trainerState, setTrainerState] = useState(false);
    const [indexState, setIndexState] = useState(-1);

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };  
    
    const showTrainer = (bool, index) =>{
        if (bool){
            setIndexState(index);
            setTrainerState(true);
        }
    };

    const checkAuthentication = () => {
        
        if (auth.currentUser) {
            navigation.navigate("Checkout",{
                time: props.time,
                navigation: navigation,
            }
            )
        } else {
            navigation.navigate("AuthenticationScreen", {
                navigation:navigation,
            })
        }
        
    };

    return (
      <View style ={{
          marginTop:'13%',
      }}>
          <View style ={{
              justifyContent: 'center',
              alignItems: 'center',
          }}>
              <Text style={{
                  fontSize: 24,
              }}>Select Date</Text>
              <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode='date'
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  style={schedule_style_sheet.date_time_style}
                  />
          </View>
          <Divider style={{
              marginTop:25,
              marginBottom:25,

          }}>
          </Divider>
          <DisplaySchedule trainerState={trainerState} 
            indexState={indexState} 
            showTrainer={showTrainer} 
            checkAuthentication={checkAuthentication}/>
          
      </View>
    );
  };

const DisplaySchedule = ({navigation, ...props}) => {
    return (
    <View showsVerticalScrollIndicator={false} style={{marginBottom:'20%'}}>
        {trainer_details.map((trainer,index) => (
            <View key={index}>
                <View style={schedule_style_sheet.main_container}>
                    <View style= {schedule_style_sheet.date_container}>
                        <Text style={schedule_style_sheet.date_text}> {trainer.date} - {trainer.title} </Text>
                    </View>
                    <View style ={schedule_style_sheet.book_button}>
                        <Button title="Book" color="white"  onPress={() => props.showTrainer(true, index)}/>
                    </View>
                </View>
                <View>
                    <Text style={{marginLeft:'5%'}}>

                    </Text>

                    {
                        props.trainerState && <TimeInfo trainer={trainer} index={index} indexState={props.indexState}
                        checkAuthentication = {props.checkAuthentication} />
                    }
                </View>
            </View>
        ))}

    </View>
    )
};

const TimeInfo = ({navigation, ...props}) => {
    if (props.index == props.indexState){
        return(
            <View style={schedule_style_sheet.time_container}>
                <View style={schedule_style_sheet.time_text_container}>
                    <Text style={schedule_style_sheet.time_text}> fit- </Text>
                </View>
                <View style ={schedule_style_sheet.trainer_container}>
                    {props.trainer.time.map((time,index) => (
                        <TrainerCourse time={time} checkAuthentication={props.checkAuthentication} key={index}></TrainerCourse>
                    ))}
                </View>
            </View>
        )
    }   
    else{
        return null;
    }

};

  
const TrainerCourse = ({navigation, ...props}) => (
    <TouchableOpacity onPress={()=> props.checkAuthentication()}>
        <View style={schedule_style_sheet.course_container}>
            <Text style= {schedule_style_sheet.course_text}>{props.time}</Text>
        </View>
    </TouchableOpacity>

);

  export default TrainerSchedule;

/*
const [date, setDate] = useState(new Date(1598051730000));
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);

const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);
};

const schedule_detail = {
    date: '21/02/2021',
    time: '19:00',
    title: "Free Gym",

};



export default function TrainerSchedule({navigation, ...props}) {


  return (
    <View style ={{
        marginTop:80,
    }}>
        <View style ={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                fontSize: 24,
            }}>Training Date</Text>
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode='date'
                is24Hour={true}
                display="default"
                onChange={onChange}
                style={{
                    width: 100,
                    alignItems:'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginTop: 10,
                }}
                />
        </View>
        <Divider style={{
            marginTop:25,
        }}>
        </Divider>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style= {{
                marginTop:5,
                marginBottom:5,
                marginLeft:10,
            }}>
                <Text style={{
                    fontSize: 20
                }}> Date </Text>
            </View>
                <ScheduleHeader></ScheduleHeader>         
        </ScrollView>
        
    </View>
  );
}



*/