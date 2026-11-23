import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import StyledButton from "@/src/components/StyledButton.tsx";
import { StyledTextInput } from "@/src/components/StyledTextInput.tsx";
import type { Todo } from "@/src/types/todo.ts";

type TodoCreatorProps = {
  onAddTodo: (text: Todo["title"]) => void;
};

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo, ...props }) => {
  const [text, setText] = useState<string>("");
  const [inputError, setInputError] = useState(false);

  const onPressAdd = () => {
    if (!text) {
      setInputError(true);
      return;
    }
    onAddTodo(text);
    setText("");
  };

  useEffect(() => {
    if (inputError && text) {
      setInputError(false);
    }
  }, [text, inputError]);

  return (
    <View {...props} style={style.container}>
      <StyledTextInput
        placeholder={"Add a task..."}
        value={text}
        onChangeText={setText}
        isError={inputError}
      />
      <StyledButton label="+" onPress={onPressAdd} disabled={inputError} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 10,
    gap: 10,
  },
});

export default TodoCreator;
