import {useState} from 'react'
import {Image,Pressable,Platform,FlatList,StyleSheet} from 'react-native'

export default function EmojiList({onSelect,closeModal}) {
const [emoji] = useState([
    require('../assets/Stickers/emoji1.png'),
    require('../assets/Stickers/emoji2.png'),
    require('../assets/Stickers/emoji3.png'),
    require('../assets/Stickers/emoji4.png'),
    require('../assets/Stickers/emoji5.png'),
    require('../assets/Stickers/emoji6.png'),
])
  return (
      <FlatList 
      horizontal 
      showsHorizontalScrollIndicator ={Platform.OS == 'web' ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({item, index}) => {
          return (
              <Pressable onPress={() => {onSelect(item)
               closeModal()}}>
                   <Image source={item} key={index} style={styles.image}/>
              </Pressable>
          )
      }}
      />
    
  )
}

const styles = StyleSheet.create({
    listContainer: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    image: {
      width: 100,
      height: 100,
      marginRight: 20,
    },
  });
