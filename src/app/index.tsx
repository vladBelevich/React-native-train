import { Text, View, StyleSheet, StatusBar } from "react-native";
import Header from "./layout/Header";
import { COLORS } from "@/constants/ui.ts";
import type { Todo } from "@/src/types/todo.ts";
import { useState } from "react";
import ToDoList from "@/src/app/layout/ToDoList";

const defaultTodos:Todo[] = [{
  id:1,
  title:'Buy milk',
  isCompleted:false,
}, {
  id:2,
  title:'Buy bread',
  isCompleted:false,
}, {
  id: 3,
  title:'Buy eggs',
  isCompleted:false,
}]



export default function Index() {

  const [todos, setTodos] = useState<Todo[]>(defaultTodos)
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header />
      <ToDoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
  title: {
    fontSize: 16,
  },
});