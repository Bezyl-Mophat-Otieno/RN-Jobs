import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl,dimensions ,handlePressed}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePressed}>
      <Image source={iconUrl} resizeMode='cover' style={styles.btnImg(dimensions)}/>
    </TouchableOpacity>

  )
}

export default ScreenHeaderBtn