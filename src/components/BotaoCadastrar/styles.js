import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      bottom: 30,
      left: '78%',
      transform: [{ translateX: -25 }],
      width: 60,
      height: 60,
      borderRadius: 50,
      backgroundColor: '#0088cc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: '#fff',
      fontSize: 24,
    },
  });