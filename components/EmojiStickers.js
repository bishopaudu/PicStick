import React from 'react'
import {Image,View} from 'react-native'
import Animated,{useAnimatedStyle,useSharedValue,useAnimatedGestureHandler,withSpring} from 'react-native-reanimated'
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler'


export default function EmojiStickers({imageSize,stickerSource}) {
    const translateX = useSharedValue(0)
    const translateY = useSharedValue(0)
    const onDrag = useAnimatedGestureHandler({
        onStart:(event,context) => {
         context.translateX = translateX.value
         context.translateY = translateY.value
        },
        onActive: (event,context) => {
            translateX.value = event.translationX + context.translateX
            translateY.value = event.translationY + context.translateY
        }
    })
    const AnimatedImage = Animated.createAnimatedComponent(Image)
    const AnimatedView = Animated.createAnimatedComponent(View)
    const scaledImage = useSharedValue(imageSize)
    const doubleTap = useAnimatedGestureHandler({
        onActive: () => {
            if(scaledImage.value){
                scaledImage.value = scaledImage.value * 2
            }
        }
    })

    const imageStyle = useAnimatedStyle(() => {
        return{
            width:withSpring(scaledImage.value),
            height:withSpring(scaledImage.value),
        }
    })
    const containerStyle = useAnimatedStyle(() => {
        return {
          transform: [
            {
              translateX: translateX.value,
            },
            {
              translateY: translateY.value,
            },
          ],
        };
      });
      
  return (
    <PanGestureHandler onGestureEvent={onDrag}>
    <AnimatedView style={[containerStyle,{top: -350}]}>
        <TapGestureHandler onGestureEvent={doubleTap} numberOfTaps={2}>
        <AnimatedImage source={stickerSource} resizeMode="contain" style ={[imageStyle,{width:imageSize,height:imageSize}]}/>
        </TapGestureHandler>
    </AnimatedView>
    </PanGestureHandler>
  )
}
