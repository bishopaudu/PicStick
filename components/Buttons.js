import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';

export default function Buttons({ label, theme,onPress }) {
  if (theme === "primary") {
    return (
      <View
      style={[
        styles.buttonContainer,
        {borderRadius: 18,color: '#fff' } ,
      ]}>
      <Pressable
        style={[styles.button, { backgroundColor: '#fff' }]}
        onPress={onPress}>
        <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
        <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
      </Pressable>
    </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
        <Entypo name="camera" size={18} color="black" style= {{paddingRight:6}} />
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>    
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 18,
    backgroundColor:'#1811a8',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 6,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});

