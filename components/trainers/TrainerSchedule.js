import React, {useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Divider } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { schedule_style_sheet } from '../../styles/trainers/TrainerScheduleStyle'

const trainer_details = [
    {
        date: '21/02/2021',
        time: '19:00',
        title: "Personal Training",
    },
    {
        date: '21/02/2021',
        time: '19:00',
        title: "Personal Training",
    },
];

export const TrainerSchedule = () => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    };
  
    const schedule = {
        time: '19:00',
        date: '21/02/2021',
        title: "Free Gym",
  
    }
  
  
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
               
              <ScheduleHeader/>
              {trainer_details.map((trainer,index) => (
                  <TrainerCourse trainer={trainer} key={index}></TrainerCourse>
              ))}
            
            
          </ScrollView>
          
      </View>
    );
  };
  
const ScheduleHeader = () => (
    <TouchableOpacity>
        <View style ={{
            backgroundColor: 'lightgray',
            
        }}>
            <View style={{
                marginLeft: 10,
                flexDirection: 'row',
                marginTop: 10,
            }}>
                <View style={{
                    marginLeft:"10%"
                }}>
                    <Text style={{
                        fontSize: 16
                    }}> Time </Text>
                </View>
                <View style={{
                    marginLeft:"15%",
                }}>
                    <Text style={{
                        fontSize: 16
                    }}> Name </Text>
                </View>
            </View>
            <Divider style={{
                    marginTop:10,
                }}>
            </Divider>
        </View>
    </TouchableOpacity>
)

const TrainerCourse = (props) => (
    <TouchableOpacity>
        <View style={{width:240, justifyContent:"space-evenly"}}>
            <Text style={schedule_style_sheet.schedule_title_style}>{props.trainer.name}</Text>
            <Text>{props.trainer.date}</Text>
            <Text>{props.trainer.time}</Text>
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