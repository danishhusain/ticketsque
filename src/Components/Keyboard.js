// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// const Keyboard = () => {
//     const [pin, setPin] = useState('');

//     const handleNumberPress = (number) => {
//         if (pin.length < 4) {
//             setPin(pin + number);
//         }
//         if (pin.length === 3) {
//             // Trigger your function here when 4 digits are input
//             console.log('PIN entered:', pin + number);
//         }
//     };

//     const handleCancelPress = () => {
//         setPin('');
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Enter your Google Pay PIN</Text>
//             <View style={styles.pinDisplay}>
//                 <Text style={styles.pinText}>{'●'.repeat(pin.length)}</Text>
//             </View>
//             <View style={styles.numberPad}>
//                 {[1, 2, 3].map(number => (
//                     <TouchableOpacity key={number} style={styles.numberButton} onPress={() => handleNumberPress(number)}>
//                         <Text style={styles.numberText}>{number}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>
//             <View style={styles.numberPad}>
//                 {[4, 5, 6].map(number => (
//                     <TouchableOpacity key={number} style={styles.numberButton} onPress={() => handleNumberPress(number)}>
//                         <Text style={styles.numberText}>{number}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>
//             <View style={styles.numberPad}>
//                 {[7, 8, 9].map(number => (
//                     <TouchableOpacity key={number} style={styles.numberButton} onPress={() => handleNumberPress(number)}>
//                         <Text style={styles.numberText}>{number}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>
//             <View style={{
//                 flexDirection: 'row',
//                 justifyContent: 'flex-end', // Align components to the right side
//                 alignItems: 'center',
//             }}>

//                 <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress(0)}>
//                     <Text style={styles.numberText}>0</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.numberButton} onPress={handleCancelPress}>
//                     <MaterialCommunityIcons name="backspace-outline" size={28} />

//                 </TouchableOpacity>
//             </View>


//             <View style={styles.bottomContainer}>
//                 <TouchableOpacity>
//                     <Text style={styles.forgotPinText}>Forgot PIN?</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.continueButton}>
//                     <Text style={styles.continueText}>Continue</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };
// export default Keyboard;


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     pinDisplay: {
//         flexDirection: 'row',
//         marginBottom: 60,

//     },
//     pinText: {
//         fontSize: 34,
//     },
//     numberPad: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginBottom: 10,
//         // paddingHorizontal:20
//         // backgroundColor: 'green',
//     },
//     numberButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//         marginHorizontal: 20,
//         marginVertical: 10,
//         backgroundColor: '#f0f0f0',
//     },
//     numberText: {
//         fontSize: 24,
//     },
//     emptyButton: {
//         width: 80,
//         height: 80,
//         marginHorizontal: 10,
//     },
//     cancelButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//         marginHorizontal: 10,
//         backgroundColor: 'red',
//     },
//     cancelText: {
//         fontSize: 18,
//         color: '#fff',
//     },
//     bottomContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//         paddingHorizontal: 20,
//         marginBottom: 20,
//     },
//     forgotPinText: {
//         fontSize: 16,
//         color: 'blue',
//         textDecorationLine: 'underline',
//     },
//     continueButton: {
//         backgroundColor: 'green',
//         paddingHorizontal: 30,
//         paddingVertical: 10,
//         borderRadius: 8,
//     },
//     continueText: {
//         fontSize: 16,
//         color: '#fff',
//     },
// });








/////////////////////
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Keyboard = () => {
//     const [pin, setPin] = useState('');

//     const handleNumberPress = (number) => {
//         if (pin.length < 4) {
//             setPin(pin + number);
//         }
//         if (pin.length === 3) {
//             // Trigger your function here when 4 digits are input
//             console.log('PIN entered:', pin + number);
//         }
//     };

//     const handleCancelPress = () => {
//         setPin(prevPin => prevPin.slice(0, -1)); // Remove the last character from the PIN
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Enter your Google Pay PIN</Text>
//             <View style={styles.pinDisplay}>
//                 <Text style={styles.pinText}>{'●'.repeat(pin.length)}</Text>
//             </View>
//             <View style={styles.numberPad}>
//                 {[1, 2, 3].map(number => (
//                     <TouchableOpacity key={number} style={styles.numberButton} onPress={() => handleNumberPress(number)}>
//                         <Text style={styles.numberText}>{number}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>
//             <View style={styles.numberPad}>
//                 {[4, 5, 6].map(number => (
//                     <TouchableOpacity key={number} style={styles.numberButton} onPress={() => handleNumberPress(number)}>
//                         <Text style={styles.numberText}>{number}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>
//             <View style={styles.numberPad}>
//                 {[7, 8, 9].map(number => (
//                     <TouchableOpacity key={number} style={styles.numberButton} onPress={() => handleNumberPress(number)}>
//                         <Text style={styles.numberText}>{number}</Text>
//                     </TouchableOpacity>
//                 ))}
//             </View>
//             <View style={styles.numberPad}>
//                 <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress(0)}>
//                     <Text style={styles.numberText}>0</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.numberButton} onPress={handleCancelPress}>
//                     <MaterialCommunityIcons name="backspace-outline" size={28} />
//                 </TouchableOpacity>
//             </View>
//             {/* <View style={styles.bottomContainer}>
//                 <TouchableOpacity>
//                     <Text style={styles.forgotPinText}>Forgot PIN?</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.continueButton}>
//                     <Text style={styles.continueText}>Continue</Text>
//                 </TouchableOpacity>
//             </View> */}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'flex-end',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     pinDisplay: {
//         flexDirection: 'row',
//         marginBottom: 60,
//     },
//     pinText: {
//         fontSize: 34,
//     },
//     numberPad: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         marginBottom: 10,
//     },
//     numberButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//         marginHorizontal: 20,
//         marginVertical: 10,
//         backgroundColor: '#f0f0f0',
//     },
//     numberText: {
//         fontSize: 24,
//     },
//     cancelButton: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 80,
//         height: 80,
//         borderRadius: 40,
//         marginHorizontal: 10,
//         backgroundColor: 'red',
//     },
//     cancelText: {
//         fontSize: 18,
//         color: '#fff',
//     },
//     bottomContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         width: '100%',
//         paddingHorizontal: 20,
//         marginBottom: 20,
//     },
//     forgotPinText: {
//         fontSize: 16,
//         color: 'blue',
//         textDecorationLine: 'underline',
//     },
//     continueButton: {
//         backgroundColor: 'green',
//         paddingHorizontal: 30,
//         paddingVertical: 10,
//         borderRadius: 8,
//     },
//     continueText: {
//         fontSize: 16,
//         color: '#fff',
//     },
// });

// export default Keyboard;













///component
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Keyboard = ({ title, pinLength, onPinEntered }) => {
    const [pin, setPin] = useState('');

    const handleNumberPress = (number) => {
        if (pin.length < pinLength) {
            setPin(pin + number);
        }
        if (pin.length === pinLength - 1) {
            // Trigger your function here when the PIN length is reached
            onPinEntered(pin + number);
        }
    };

    const handleCancelPress = () => {
        setPin(prevPin => prevPin.slice(0, -1)); // Remove the last character from the PIN
    };
    const handleCancelClearAll = () => {
        setPin('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.pinDisplay}>
                <Text style={styles.pinText}>{'●'.repeat(pin.length)}</Text>
            </View>
            <View style={styles.numberPad}>
                {[1, 2, 3].map(number => (
                    <TouchableOpacity key={number} style={styles.numberButton} onPress={() => handleNumberPress(number)}>
                        <Text style={styles.numberText}>{number}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.numberPad}>
                {[4, 5, 6].map(number => (
                    <TouchableOpacity key={number} style={styles.numberButton} onPress={() => handleNumberPress(number)}>
                        <Text style={styles.numberText}>{number}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.numberPad}>
                {[7, 8, 9].map(number => (
                    <TouchableOpacity key={number} style={styles.numberButton} onPress={() => handleNumberPress(number)}>
                        <Text style={styles.numberText}>{number}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.numberPad}>
                <TouchableOpacity style={styles.numberButton} onPress={() => handleNumberPress(0)}>
                    <Text style={styles.numberText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.numberButton} onPress={handleCancelPress}>
                    <MaterialCommunityIcons name="backspace-outline" size={28} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    pinDisplay: {
        flexDirection: 'row',
        marginBottom: '20%',
    },
    pinText: {
        fontSize: 34,
    },
    numberPad: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    numberButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#f0f0f0',
    },
    numberText: {
        fontSize: 24,
    },
});

export default Keyboard;
