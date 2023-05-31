import React from 'react'
import {Image,View} from 'react-native'

export default function EmojiStickers({imageSize,stickerSource}) {
  return (
    <View style={{top: -350}}>
        <Image source={stickerSource} resizeMode="contain" style ={{width: imageSize,height:imageSize}}/>
    </View>
  )
}
