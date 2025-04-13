import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '@/src/colors';

interface TaskProps {
  itemText: string;
}

const Tasks: React.FC<TaskProps> = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text>{props.itemText}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
  item:{
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: colors.primary,
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 10,
  },
  itemText:{
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 5,
  }
})