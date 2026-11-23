import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { COLORS } from "@/src/constants/ui.ts";

type StyledCheckBoxProps = {
  checked: boolean;
  onCheck: () => void;
};

export const StyledCheckBox: React.FC<StyledCheckBoxProps> = ({ checked, onCheck, ...props }) => {
  return (
    <TouchableOpacity onPress={onCheck} {...props}>
      <Ionicons
        name={checked ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color={checked ? COLORS.SUCCESS : COLORS.PRIMARY_BORDER}
        {...props}
      />
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   succes: {
//     backgroundColor: "green",
//   },
// });
