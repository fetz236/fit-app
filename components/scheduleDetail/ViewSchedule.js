import React, {useEffect, useState} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Divider } from 'react-native-elements';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { schedule_style_sheet } from '../../styles/trainers/TrainerScheduleStyle'
import { Button } from 'react-native';
import { auth, db } from '../../firebase';

const trainer_details = [
    {
        date: '21/10/2022',
        time: ['11:00',,'13:00','14:00','19:00','20:00'],
        title: "Personal Training",
    },
    {
        date: '22/11/2022',
        time: ['11:00','19:00','20:00'],
        title: "Personal Training",
    },
    {
        date: '22/12/2022',
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

export const ViewSchedule = ({navigation, ...props}) => {

    /*
        Object {
            "class": Object {
                "categories": Array [
                "Abw5hySlBsbHvcKN4vM9",
                ],
                "curr_cap": "0",
                "description": "Advanced Spinning class",
                "id": "4vY771DMIX7422rzWW7l",
                "image": "https://firebasestorage.googleapis.com/v0/b/fit-user-app/o/store_images%2FjP6AalbtPcjk0Lbcxo5q%2Fclass_images%2F20220923135655c.jpg?alt=media&token=26f06243-25ac-4c8b-af9c-ef9dec5d06c7",
                "max_cap": 25,
                "name": "Spinning",
                "price": "$80",
            },
            "fc": Object {
                "categories": Array [
                "q9TU23VcpJh1YeyBNlU9",
                "1PVAG7I7cTnxNZqCMehW",
                ],
                "id": "jP6AalbtPcjk0Lbcxo5q",
                "image": Array [
                "https://firebasestorage.googleapis.com/v0/b/fit-user-app/o/store_images%2FjP6AalbtPcjk0Lbcxo5q%2F20220921003536.jpg?alt=media&token=63bf024e-396d-4655-aced-a10149ded044",
                "https://firebasestorage.googleapis.com/v0/b/fit-user-app/o/store_images%2FjP6AalbtPcjk0Lbcxo5q%2F20220921003535.jpg?alt=media&token=4366df23-90f9-4af6-a47e-9bcd305af10b",
                "https://firebasestorage.googleapis.com/v0/b/fit-user-app/o/store_images%2FjP6AalbtPcjk0Lbcxo5q%2F20220921003233.jpg?alt=media&token=269cbc10-7a49-48d4-8fc3-2a7ef2cdb69b",
                "https://firebasestorage.googleapis.com/v0/b/fit-user-app/o/store_images%2FjP6AalbtPcjk0Lbcxo5q%2F20220921003433.jpg?alt=media&token=846b35a2-9b61-4fad-a335-97c81c4cbc90",
                "https://firebasestorage.googleapis.com/v0/b/fit-user-app/o/store_images%2FjP6AalbtPcjk0Lbcxo5q%2F20220921003400.jpg?alt=media&token=b0ecdd9d-3de5-40ca-9810-9212044e6d49",
                "https://firebasestorage.googleapis.com/v0/b/fit-user-app/o/store_images%2FjP6AalbtPcjk0Lbcxo5q%2F20220921003335.jpg?alt=media&token=0d9bd9e2-af1c-49fc-a645-2960becd05c7",
                "https://firebasestorage.googleapis.com/v0/b/fit-user-app/o/store_images%2FjP6AalbtPcjk0Lbcxo5q%2F20220921003333.jpg?alt=media&token=4b0b0c3a-c409-4d29-8a0e-583794d2f29c",
                ],
                "location": Object {
                "latitude": 51.51435857837156,
                "longitude": -0.15710420123305274,
                },
                "name": "The Gym Way - Marble Arch",
                "rating": 5,
                "reviews": 1,
                "subscription": "red",
                "telephone_number": "+442076294655",
            },
        }
    */
    const class_selected = {
        class:props.route.params.class,
        fc:props.route.params.fc,
    }

    const [class_schedule, setClassSchedule] = useState([])
    const [loaded_class_schedule, setLoadedClassSchedule] = useState(false)
    
    useEffect( async() => {
        const loadData = async() => {
            let class_data = []
            db.collection('schedule').where("cl", "==", class_selected.class.id).get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    const data = doc.data();
                    data.id = doc.id
                    class_data.push(data)
                })
            }).then(function(){
                const today_date = new Date()
                const trainer_temp = []
                let curr = new Date()

                for (let i =0; i<21; i++){
                    curr.setDate(date.getDate() +i)
                    for(let j =0; j<class_data.length; j++){
                        if (class_data[j].day == curr.getDay()){
                            console.log(class_data[j])
                            trainer_temp.push({
                                'date':curr.getDate(),
                                'time':class_data[j].start_time+"-"+class_data[j].end_time,
                            })
                        }
                    }
                    
                }
                setClassSchedule(class_data)
                setLoadedClassSchedule(true)
            }
            ).catch(err => alert(err))
            
        }

        if (class_schedule.length == 0){
            await loadData()
        }
    }, [])

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [trainerState, setTrainerState] = useState(false);
    const [indexState, setIndexState] = useState(-1);
    

    const [active_trainer_details, setactive_trainer_details] = useState(class_schedule)

    const changedDate = (event, selectedDate) => {
        let currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    
        const update_trainers = []
        for(let i=0; i<trainer_details.length; i++){
            let splitted_date = trainer_details[i].date.split("/")
            let active_date = new Date(splitted_date[2], splitted_date[1], splitted_date[0])
            if (active_date.getTime()>= currentDate.getTime()){
                update_trainers.push(trainer_details[i])
            }   
        }
        setactive_trainer_details(update_trainers);

        
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
                navigation: navigation,
                time: props.time,
            }
            )
        } else {
            navigation.navigate("AuthenticationScreen", {
                navigation:navigation,
                isCheckout: true,
            })
        }
        
    };

    return (
      <View style ={{
          marginTop:'5%',
      }}>
          <View style ={{
              justifyContent: 'center',
              alignItems: 'center',
          }}>
              <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode='date'
                  is24Hour={true}
                  display="default"
                  onChange={changedDate}
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
            active_trainer_details={active_trainer_details}
            checkAuthentication={checkAuthentication}/>
          
      </View>
    );
  };

const DisplaySchedule = ({navigation, ...props}) => {
    return (
    <View showsVerticalScrollIndicator={false} style={{marginBottom:'20%'}}>
        {props.active_trainer_details.map((trainer,index) => (
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

  export default ViewSchedule;

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