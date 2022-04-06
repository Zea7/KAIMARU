import React, {FC} from "react"
import { StyleSheet, Text, View } from "react-native"
import {WebView} from "react-native-webview"

const App:FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusbar}>
        <Text style={styles.titleText}>카이마루 오늘의 식단</Text>
      </View>
      <WebView
        source={{uri:"https://www.kaist.ac.kr/kr/html/campus/053001.html?dvs_cd=fclt"}}
        style={styles.menuTable}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:"#fff"
  },
  statusbar:{
    marginTop:30,
    marginLeft:30,
    height:'10%'
  },
  titleText:{
    fontSize:24,
    fontWeight:'bold'
  },
  menuTable:{
    
  }

})

export default App