import React, {useState} from 'react';
import {View, Text, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Divider } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

export const ViewSchedule = () => {
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
        marginTop:80,
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
        </ScrollView>
        
    </View>
  );
};

export default ViewSchedule;