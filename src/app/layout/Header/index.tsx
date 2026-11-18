import { StyledText } from "@/src/components/StyledText.tsx";
import { COLORS } from "@/src/constants/ui.ts";
import { StyleSheet, View } from "react-native";

type HeaderProps = {
  totalTodos: number;
  completedTodos: number;
};

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText>To-do app</StyledText>
        <StyledText>March 15, 2026</StyledText>
      </View>
      <StyledText>
        Completed: {completedTodos}/{totalTodos}
      </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default Header;
