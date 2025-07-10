import { StyleProp, View, ViewStyle } from "react-native";

const Spacer = ({ width = "100%", height = 40 }) => {
  return <View style={{ width, height } as StyleProp<ViewStyle>} />;
};

export default Spacer;
