// import { StyleSheet, Text, TouchableOpacity, View , Image} from 'react-native'
// import React from 'react'

// const Conform = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//        <TouchableOpacity onPress={() => navigation.navigate("OrderDelivery")}>
//          <Image source={require('../assets/images/backArrow.png')} style={styles.icon} />
//        </TouchableOpacity>
//           <View>
//              <Text style={styles.title}>Thank You</Text>
//              <Text style={styles.subTitle}>For ordering from us</Text>
//           </View>
 
//            <View>
//              <TouchableOpacity onPress={() => navigation.navigate('Location')}
//                style={styles.button}>
//                 <Text style={styles.buttonText} >Track Your Order</Text>
//              </TouchableOpacity>
//            </View>

//           <View style={styles.itemContainer}>
//                 <Image source={require("../assets/images/user.png")} style={styles.itemImage} />
//              <View style={styles.items}>
//                 <Text style={styles.itemTitle}>John Hawn</Text>
//                 <Text style={styles.itemDesc}>Coffee Shop</Text>
//              </View>
//               <View >
//                 <TouchableOpacity >
//                   <Image source={require("../assets/images/call.png")} style={styles.call}/>
//                 </TouchableOpacity>
//               </View>
//           </View>

//     </View>

//   )
// }

// export default Conform;

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: '#fff',
//   alignItems: 'center',
//   justifyContent: 'center',
//   textAlign: "center",
// },
// icon: {
//   position: 'absolute',
//   left: -200,
//   top: -260,
//   width: 30,
//   height: 30
// },
// title: {
//   fontSize: 30,
//   fontWeight: 'bold',
//   marginBottom: 20,
//   top: -80,
//   color: '#C67C4E',
//   left: 20,

// },
// subTitle: {
//   fontSize: 20,
//   color: '#808080',
//   marginBottom: 20,
//   top: -90,
//   left: -10,
//   letterSpacing: 1
// },
// button:{
// backgroundColor: '#C67C4E',
// width: 350,
// height: 60,
// alignItems: 'center',
// justifyContent: 'center',
// borderRadius: 15,
// marginBottom: 20,
// top: -50
// },
// buttonText:{
// color: '#fff',
// fontSize: 18,
// fontWeight: 'bold'

// },
// itemContainer: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   marginBottom: 20,
//   padding: 20,
//   borderRadius: 10,
//   top: 30
// },
// itemImage: {
//   width: 60,
//   height: 60,
//   resizeMode:'contain',
//   marginRight: 20
// },
// items: {
//   flex: 1
// },
// itemTitle: {
//   fontSize: 16,
//   fontWeight: 'bold'
// },
// itemDesc: {
//   fontSize: 14,
//   color: '#888'
// },
// call: {
//   marginLeft: 20, 
//   width: 54,
//   height: 54,
//   borderRadius: 1,
//   alignItems: 'center',
//   justifyContent: 'center'
// }

// })