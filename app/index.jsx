import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/logo.png'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.container}>
      
      <Image source={Logo} style={styles.img} st/>
    
      <Text style={styles.title}>The number one</Text>

      <Text style={{ marginTop: 10, marginBottom: 30}}>
        Reading list App
      </Text>

      <Link  style={styles.link} href="/about">Go to About</Link>
      <Link  style={styles.link} href="/contact">Go to Contact</Link>
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
  }, link:{
    marginTop: 20,
    fontSize: 16,
    color: '#2e78b7',
  }
})