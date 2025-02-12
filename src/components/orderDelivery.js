// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";

// const OrderDelivery = ({ navigation }) => {
//   const [order, setOrder] = useState("Delivery");
//   const [quantity, setQuantity] = useState(1);
//   const price = 4.53;
//   const deliveryAmount = 1.0;
//   const totalPayment = (price + deliveryAmount).toFixed(2);

//   return (
//     <ScrollView style={styles.container}>

//       <View style={styles.header}>
//         <TouchableOpacity
//           onPress={() => navigation.navigate("Detail")}>
//           <Image source={require('../assets/images/arrow-left.png')} style={styles.icon} />
//         </TouchableOpacity>
//         <Text style={styles.headerTitle}>Order</Text>
//       </View>


//       <View style={styles.container1}>
//         <TouchableOpacity
//           style={[styles.containerButton,
//           order === "Delivery" && styles.activeButton]}
//           onPress={() => setOrder("Delivery")}
//         >
//           <Text style={[styles.container1Text, styles.activeButtonText]}>Deliver</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//         onPress={() => {setOrder("OrderPick"); navigation.navigate('OrderPick')}}
//           style={styles.containerButton}
//         >
//           <Text style={styles.container1Text}
//           >Pick Up</Text>
//         </TouchableOpacity>
//       </View>

//       <Text style={styles.address}>Delivery Address</Text>
//       <View style={styles.container2}>
//         <Text style={styles.container2Title}>Jl. Kpg Sutoyo</Text>
//         <Text style={styles.container2Detail}>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
//         <View style={styles.container2Icons}>
//           <TouchableOpacity style={styles.container2Button}>
//            <Image source={require("../assets/images/edit.png")} />
//             <Text > Edit Address</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.container2Button}>
//           <Image source={require("../assets/images/note.png")}  />
//             <Text > Add Note</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <Image source={require("../assets/images/Line 1.png")} style={{backgroundColor: '#EAEAEA', height: 1, left: 30 , top: -10}} />

//       <View style={styles.itemContainer}>
//         <Image source={require("../assets/images/cofee1.png")} style={styles.itemImage} />
//         <View style={styles.items}>
//           <Text style={styles.itemTitle}>Cappuccino</Text>
//           <Text style={styles.itemDesc}>with Chocolate</Text>
//         </View>
//         <View style={styles.quantity}>
//           <TouchableOpacity onPress={() => setQuantity(Math.max(1, quantity - 1))}>
//             <Image source={require("../assets/images/minus.png")} />
//           </TouchableOpacity>
//           <Text style={styles.quantityText}>{quantity}</Text>
//           <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
//             <Image source={require("../assets/images/plus.png")} />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <Image source={require("../assets/images/line2.png")} style={{backgroundColor: '#EAEAEA', height: 1, left: 30 , top: -10}} />
 
//       <TouchableOpacity style={styles.container3}>
//        <Image source={require("../assets/images/Discount.png")} />
//         <Text style={styles.container3Text}> 1 Discount is applied</Text>
//        <Image source={require("../assets/images/arrow-right.png")} />
//       </TouchableOpacity>

    
//       <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 ,marginBottom: 20, paddingLeft: 10}}>Payment Summary</Text>
//       <View style={styles.paymentItems}>
//         <Text style={styles.paymentText}>Price</Text>
//         <Text style={styles.paymentText}>$ {price.toFixed(2)}</Text>
//       </View>
//       <View style={styles.paymentItems}>
//         <Text style={styles.paymentText}>Delivery Fee</Text>
//         <Text style={styles.paymentText}>
//           <Text style={styles.strike}>$2.0</Text> $ {deliveryFee.toFixed(2)}
//         </Text>
//       </View>
//       <View style={styles.paymentItems}>
//         <Text style={styles.paymentTotal}>Total Payment</Text>
//         <Text style={styles.paymentTotal}>$ {totalPayment}</Text>
//       </View>

   
//       <View style={styles.amountContainer}>
//         <TouchableOpacity style={styles.amountItems}>
//           <Image source={require("../assets/images/moneys.png")} />
//           <Text style={styles.amountText}> Cash </Text>
//           <Text style={styles.amount}>$ {totalPayment}</Text>
//           <TouchableOpacity>
//         <Image source={require("../assets/images/dots.png")}  style={{left: 210}}/>
//         </TouchableOpacity>
//         </TouchableOpacity>
       
//       </View>

    
//       <TouchableOpacity style={styles.order}
//       onPress={() => navigation.navigate('Conform')}>
//         <Text style={styles.orderText}>Order</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default OrderDelivery;

// const styles = {
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#F9F9F9"
//   },
//   icon: {
//     left: -160,
//     width: 30,
//     height: 30,
//     marginRight: 10
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 20
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginLeft: 10,
//     left: -20
//   },

//   container1: {
//     flexDirection: "row",
//     backgroundColor: "#F0F0F0",
//     borderRadius: 12,
//     padding: 8,
//     marginBottom: 22
//   },
//   containerButton: {
//     flex: 1,
//     alignItems: "center",
//     borderRadius: 8,
//     padding: 10,
//   },
//   activeButton: {
//     backgroundColor: "#C67C4E"
//   },
//   container1Text: {
//     fontSize: 16,
//   },
//   activeButtonText: {
//     color: "#fff"
//   },

//   address: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 5,
//     paddingHorizontal: 8
//   },
//   container2: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     marginBottom: 20,
//     padding: 15,

//   },
//   container2Title: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8
//   },
//   container2Detail: {
//     fontSize: 14,
//     color: "#888",
//     marginBottom: 8
//   },
//   container2Icons: {
//     flexDirection: "row"
//   },
//   container2Button: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 8,
//     borderWidth: 1,
//     borderColor: "#DEDEDE",
//     borderRadius: 18,
//     marginRight: 10
//   },

//   itemContainer: {
//     flexDirection: "row",
//     backgroundColor: "#fff",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//     alignItems: "center"
//   },
//   itemImage: {
//     width: 50,
//     height: 50,
//     marginRight: 10
//   },
//   items: {
//     flex: 1
//   },
//   itemTitle: {
//     fontSize: 16,
//     fontWeight: "bold"
//   },
//   itemDesc: {
//     fontSize: 14,
//     color: "#888"
//   },
//   quantity: {
//     flexDirection: "row",
//     alignItems: "center"
//   },
//   quantityText: {
//     marginHorizontal: 10,
//     fontSize: 16,
//     fontWeight: "bold"
//   },

//   container3: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: 15, borderRadius: 10,
//     marginBottom: 20
//   },
//   container3Text: {
//     flex: 1,
//     fontSize: 16
//   },

//   paymentItems: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 5,
//     paddingHorizontal: 20,
//   },
//   paymentText: {
//     fontSize: 16
//   },
//   paymentTotal: {
//     fontSize: 16,
//     marginTop: 15
//   },
//   strike: {
//     textDecorationLine: "line-through",
//     color: "#888"
//   },

//   amountContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//     marginTop: 20
//   },
//   amountItems: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: 10,
//     borderRadius: 10
//   },
//   amountText: {
//     fontSize: 16,
//     marginLeft: 10,
//     backgroundColor: "#C67C4E",
//     padding: 5,
//     borderRadius: 15,
//     color: "#fff"
//   },
//   amount: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginLeft: 10
//   },

//   order: {
//     backgroundColor: "#C67C4E",
//     padding: 15,
//     borderRadius: 15,
//     alignItems: "center"
//   },
//   orderText: {
//     fontSize: 18,
//     color: "#fff",
//     fontWeight: "bold"
//   },
// };


