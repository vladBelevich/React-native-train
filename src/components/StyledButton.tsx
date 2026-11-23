import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, type TouchableOpacityProps } from "react-native";

import { StyledText } from "@/src/components/StyledText.tsx";
import { COLORS } from "@/src/constants/ui.ts";

type StyledButtonProps = TouchableOpacityProps & {
  label?: string;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  size?: "default" | "small" | "large";
  variant?: "primary" | "delete";
};

const StyledButton: React.FC<StyledButtonProps> = ({
  label,
  icon,
  size = "default",
  variant,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        size === "small" && styles.small,
        size === "large" && styles.large,
        variant === "delete" && styles.delete,
        disabled && styles.disabled,
      ]}
      {...props}
      disabled={disabled}
    >
      {label && <StyledText>{label}</StyledText>}
      {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT} />}
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
  small: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  disabled: {
    opacity: 0.7,
  },
  delete: {
    backgroundColor: COLORS.PRIMARY_RED,
  },
  medium: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  large: {
    paddingHorizontal: 30,
    paddingVertical: 12,
  },
});

export default StyledButton;
