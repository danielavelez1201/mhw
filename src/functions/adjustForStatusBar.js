import { Dimensions } from "react-native";

const adjustForStatusBar = (padding) => {
  const isSmallScreen = Dimensions.get("window").height < 700;
  return isSmallScreen ? padding + 20 : padding;
};

export default adjustForStatusBar;
