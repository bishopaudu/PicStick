import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Image, Alert} from 'react-native';
import Buttons from './components/Buttons';
import { useState} from 'react';
import * as ImagePicker from 'expo-image-picker'
import IconButtons from './components/IconButtons';
import CircleButton from './components/CircleButton';
import {PermissionsAndroid} from 'react-native'
import EmojiPicker from './components/EmojiPicker';
import EmojiList from './components/EmojiList';
import EmojiStickers from './components/EmojiStickers';


export default function App() {
  const[selectedImage,setSelectedImage] = useState(null)
  const[showAppOtions, setShowAppOptions] = useState(false)
  const[isModalVisible,setIsModalVisible] = useState(false)
  const[pickedEmoji,setPickedEmoji] = useState(null)
 
  const PlaceholderImage = require('./assets/background-image.png')
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1
    })
    console.log(result)
    if(!result.canceled){
      setSelectedImage(result.assets[0].uri)
      setShowAppOptions(true)
      console.log(result)
    } else {
      alert('Did not select any image')
    }
  }

  const takePhoto= async ()=> {
    const permissionGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title:'Camera Permission',
        message: 'App Needs Access To Your Camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',

      }
    )
    if(permissionGranted === PermissionsAndroid.RESULTS.GRANTED){
    const cameraResult = await ImagePicker.launchCameraAsync()
    if(!cameraResult.canceled){
      setSelectedImage(cameraResult.uri)
      setShowAppOptions(true)
      console.log(cameraResult.uri)
    } else {
      alert('Camera Permission Not Granted')
    }    
    }
  }

  const closeModal=()=>[
    setIsModalVisible(false)
  ]

  const refresh = () =>{

  }

  const addStickers= () =>{
    setIsModalVisible(true)

  }

  const saveImage= () =>{

  }
  
  return (
    <View style ={styles.container}>
    <View style={styles.imageContainer}>
     {selectedImage!==null ? <Image style={styles.image} source={{uri: selectedImage}} />
      : <Image style={styles.image} source={PlaceholderImage} />}
      {pickedEmoji != null ? <EmojiStickers imageSize={40} stickerSource={pickedEmoji}/> : null}
    </View>
    {showAppOtions ? (
      <View style={styles.optionsContainer}>
        <View style={styles.optionsRow}>
        <IconButtons name='refresh' label='Refresh' onPress={refresh} />
        <CircleButton onPress={addStickers}/>
        <IconButtons name='save-alt' label='Save' onPress={saveImage}/>
        </View>
      </View>
    ) : (<View style={styles.footerContainer}>
      <Buttons label="Select Photo From Gallery" theme= "primary" onPress={pickImageAsync}/>
      {/* <Buttons label="Take A Photo" onPress={()=> setShowAppOptions(true)}/> */}
      <Buttons label="Take A Photo" onPress={takePhoto}/> 
    </View>)}
    <EmojiPicker isVisible={isModalVisible} onClose={closeModal}>
      <EmojiList onSelect={setPickedEmoji} closeModal={closeModal}/>
    </EmojiPicker>
    <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer:{
    flex:1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 20,
  },
  optionsContainer:{
    position:'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems:'center',
    flexDirection:'row',
  },
 
});
