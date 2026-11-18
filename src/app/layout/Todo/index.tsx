import { StyleSheet, View } from "react-native";

import StyledButton from "@/src/components/StyledButton.tsx";
import { StyledText } from "@/src/components/StyledText.tsx";
import { COLORS } from "@/src/constants/ui.ts";

type TodoProps = {
  title: string;
  isCompleted: boolean;
};

const ToDo: React.FC<TodoProps> = ({ title, isCompleted }) => {
  return (
    <View style={[styles.container]}>
      <StyledText style={{ textDecorationLine: isCompleted ? "line-through" : "none" }}>
        {title}
      </StyledText>
      <StyledButton label="Delete" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 8,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
});

export default ToDo;
