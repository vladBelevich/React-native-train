import { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";

import Header from "./layout/Header";

import ToDoList from "@/src/app/layout/ToDoList";
import { COLORS } from "@/src/constants/ui.ts";
import type { Todo } from "@/src/types/todo.ts";

const defaultTodos: Todo[] = [
  {
    id: 1,
    title: "Buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Buy bread",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Buy eggs",
    isCompleted: true,
  },
];

export default function Index() {
  const [todos, setTodos] = useState<Todo[]>(defaultTodos);

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Header completedTodos={completedTodos} totalTodos={todos.length} />
      <ToDoList todos={todos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
  title: {
    fontSize: 16,
  },
});
