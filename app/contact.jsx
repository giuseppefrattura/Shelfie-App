import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact page</Text>
      <Link style={styles.link} href="/">Go to Home</Link>
    </View>

  )
}

export default Contact
const styles = StyleSheet.create({
    container:{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      fontSize: 18,
      fontWeight: 'bold',
    }, link:{
        marginTop: 20,
        fontSize: 16,
        color: '#2e78b7',
      }
  })