import { StyleSheet, TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { StyledText } from "@/src/components/StyledText.tsx";
import { COLORS } from "@/src/constants/ui.ts";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string;
};

const StyledButton: React.FC<StyledButtonProps> = ({ label, ...props }) => {
  return (
    <TouchableOpacity style={styles.base} {...props}>
      {label && <StyledText>{label}</StyledText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default StyledButton;
