import { StyleSheet, View } from "react-native";

import StyledButton from "@/src/components/StyledButton.tsx";
import { StyledCheckBox } from "@/src/components/StyledCheckBox.tsx";
import { StyledText } from "@/src/components/StyledText.tsx";
import { COLORS } from "@/src/constants/ui.ts";

type TodoProps = {
  title: string;
  isCompleted: boolean;
};

const ToDo: React.FC<TodoProps> = ({ title, isCompleted }) => {
  return (
    <View style={[styles.container]}>
      <View style={styles.checkTitleContainer}>
        <StyledCheckBox checked={isCompleted} onCheck={() => {}} />
        <StyledText style={{ textDecorationLine: isCompleted ? "line-through" : "none" }}>
          {title}
        </StyledText>
      </View>

      <View style={[styles.controlsContainer]}>
        <StyledButton size={"small"} icon={"pencil"} onPress={() => {}} />
        <StyledButton size={"small"} icon={"trash"} variant={"delete"} onPress={() => {}} />
      </View>
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
  checkTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  controlsContainer: {
    flexDirection: "row",
    gap: 5,
  },
});

export default ToDo;
