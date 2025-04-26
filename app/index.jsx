import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/logo.png'

const Home = () => {
  return (
    <View style={styles.container}>
      
      <Image source={Logo} style={styles.img} st/>
    
      <Text style={styles.title}>The number one</Text>

      <Text style={{ marginTop: 10, marginBottom: 30}}>
        Reading list App
      </Text>

    </View>
  )
}

export default Home 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  img:{
    marginVertical: 20,
  }
})