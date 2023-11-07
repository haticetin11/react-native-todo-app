import { TextInput,Button,View,TouchableOpacity,Text,FlatList } from "react-native";
import React,{useState} from "react";
import styles from './CreateToDo.styles'
const CreateToDo=props=>{
    const [count,setCount]=useState(0);
    const [text,setText]=useState("");
    const [tasks,setTasks]=useState([]);


    const handlePress=()=>{
    setCount(prevCount=>prevCount+1);
    setTasks([...tasks,text]);
    setText("");

};
   const handleDeleteTaskPress=(index)=>{
    const newTasks=[...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);

   };

    
    return(
        <View style={{flex:1}}>
      <View >
        <Text style={styles.title}> ToDo Lesson </Text>
        <Text style={styles.counter}>{count}</Text>
        <FlatList
        data={tasks}
        renderItem={({item,index})=><View style={styles.task_Container}>
            <Text style={styles.taskText}>{item}</Text>
            <TouchableOpacity style={styles.task_Delete}
            onPress={()=>handleDeleteTaskPress(index)}
            >
                <Text>X</Text>
            </TouchableOpacity>
        </View>}
        keyExtractor={(item)=>item+Date.now()+Math.random()}
        />
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.create}
          placeholder="to do's"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.add} onPress={handlePress}>
          <Text style={styles.text}>ADD TO DO</Text>
        </TouchableOpacity>
        <View
        style={styles.divider}
        />
        
      </View>
    </View>
        
        
    )
}
export default CreateToDo