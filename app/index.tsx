import Tasks from "@/components/Tasks";
import colors from "@/src/colors";
import { useState } from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from "react-native";

export default function Index() {
  const [task, setTask] = useState("");
  const [taskItems, setTaskItems] = useState<string[]>([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask("");
  }
  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.header}>Tasks</Text>
        <View style={styles.itemWrapper}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Tasks itemText={item} />
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder="Write a task" value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  taskWrapper: {
    padding: 20,
  },
  header:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: colors.danger,
  },
  itemWrapper:{
    
  },
  writeTaskWrapper:{
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  input:{
    backgroundColor: colors.white,
    padding: 15,
    width: 250,
    borderRadius: 60,
  },
  addWrapper:{
    backgroundColor: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  },
  addText:{
    fontSize: 26,
    color: colors.secondary,
  }
});