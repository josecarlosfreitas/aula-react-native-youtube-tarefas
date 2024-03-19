import { styles } from "./styles";
import React, { useState } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const BotaoCadastrar = ({ onPress }) => {
    const [isPressed, setIsPressed] = useState(false);
  
    const handlePress = () => {
      setIsPressed(true);
      setTimeout(() => {
        setIsPressed(false);
      }, 100);

      if (onPress) {
        onPress();
      }
    };
  
    return (
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Animated.View
          style={[
            styles.icon,
            {
              transform: [
                { scale: isPressed ? 1.2 : 1 },
              ],
            },
          ]}>
          <MaterialCommunityIcons name="plus" size={24} color="#fff" />
        </Animated.View>
      </TouchableOpacity>
    );
  };
  
  export default BotaoCadastrar;