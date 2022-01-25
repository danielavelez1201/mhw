import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";

function ModifiedKeyboardAvoidingView(props) {
  return (
    <KeyboardAvoidingView
      style={{
        width: "100%",
        ...props.style,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
      keyboardVerticalOffset={Platform.select({ ios: 80, android: 500 })}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
}

export default ModifiedKeyboardAvoidingView;
