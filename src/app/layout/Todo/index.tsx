import { StyledText } from "@/src/components/StyledText.tsx";

type TodoProps = {
  title: string;
  isCompleted: boolean;
}

const ToDo:React.FC<TodoProps> = ({title, isCompleted}) => {
  return (<StyledText>{title}</StyledText>)
}

export default ToDo;