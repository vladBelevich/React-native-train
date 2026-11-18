import { COLORS } from "@/src/constants/ui.ts";
import { StyleSheet, Text, type TextProps } from "react-native";

type StyledTextProps = TextProps;

export const StyledText: React.FC<StyledTextProps> = ({ style, ...props }) => {
  return <Text style={[styles.base, style]} {...props}></Text>;
};
const styles = StyleSheet.create({
  base: {
    color: COLORS.PRIMARY_TEXT,
  },
});
