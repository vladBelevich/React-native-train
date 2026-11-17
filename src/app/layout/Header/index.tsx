import { View, StyleSheet } from "react-native"
import { StyledText } from "@/src/components/StyledText.tsx";
import { COLORS } from "@/constants/ui.ts";

const Header = () => {
    return (
        <View style={styles.container }>
          <View style={styles.headerMainContent}>
            <StyledText>To-do app</StyledText>
            <StyledText>March 15, 2026</StyledText>
          </View>
            <StyledText>Completed 0/0</StyledText>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.SECONDARY_BACKGROUND,
  },
  headerMainContent: {
    marginBottom: 20,
    justifyContent:'center',
    alignItems: 'center',
    gap:5,
  }
})

export default Header