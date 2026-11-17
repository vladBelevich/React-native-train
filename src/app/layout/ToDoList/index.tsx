import { FlatList, View } from "react-native";
import ToDo from '@/src/app/layout/Todo'
import type {Todo} from '@/src/types/todo.ts'
import React from "react";

type ToDoListProps = {
  todos:Todo[]
}

const ToDoList:React.FC<ToDoListProps> = ({todos}) => {
    return (
      <View>
        <FlatList data={todos} keyExtractor={(todo) => todo.id.toString()}
                  renderItem={({item}) => <ToDo title={item.title} isCompleted={item.isCompleted} />}
        />
      </View>
    )
}
export default ToDoList