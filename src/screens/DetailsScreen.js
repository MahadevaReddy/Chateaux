import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    Image,
    Alert,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    TextInput
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const DetailsScreen = ({ navigation, route }) => {
    const details = route.params.item;
    const [data, setData] = useState({
        id: details.id,
        emailId: details.username,
        f_name: details.f_name,
        m_name: details.m_name,
        l_name: details.l_name,
        mobile: details.mobile,
        address: details.address,
        state: details.state,
        country: details.country
    });

    const textFormInputChange = (val, inputName) => {
        if (val.length !== 0) {
            switch (inputName) {
                case 'f_name':
                    setData({
                        ...data,
                        f_name: val
                    });
                    break;
                case 'm_name':
                    setData({
                        ...data,
                        m_name: val
                    });
                    break;
                case 'l_name':
                    setData({
                        ...data,
                        l_name: val
                    });
                    break;
                case 'emailId':
                    setData({
                        ...data,
                        emailId: val
                    });
                    break;
                case 'mobile':
                    setData({
                        ...data,
                        mobile: val
                    });
                    break;
                case 'address':
                    setData({
                        ...data,
                        address: val
                    });
                    break;
                case 'state':
                    setData({
                        ...data,
                        state: val
                    });
                    break;
                case 'country':
                    setData({
                        ...data,
                        country: val
                    });
                    break;
                default:
                // code block
            }
        }
    }

    const handleUpdate = (emailId, f_name, m_name, l_name, mobile, address, state, country) => {
        alert(emailId + " " + f_name + " " + m_name + " " + l_name + " " + mobile + " " + address + " " + state + " " + country);
        fetch(`https://employeelist-e8dca.firebaseio.com/employees/${data.id}.json`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emailId,
                    f_name,
                    m_name,
                    l_name,
                    mobile,
                    address,
                    state,
                    country
                })
            }
        ).then((data) => {
            if(data.ok){
                Alert.alert('Chateaux', 'Employee details updated successfully!');
            } else {
                Alert.alert('Chateaux', 'Error in network!');
            }
        });

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Username"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={data.emailId}
                        onChangeText={(val) => textFormInputChange(val, 'emailId')}
                    />
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 20
                }]}>First Name</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Firstname"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={data.f_name}
                        onChangeText={(val) => textFormInputChange(val, 'f_name')}
                    />
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 20
                }]}>Middle Name</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Middlename"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={data.m_name}
                        onChangeText={(val) => textFormInputChange(val, 'm_name')}
                    />
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 20
                }]}>Last Name</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Lastname"
                        style={styles.textInput}
                        value={data.l_name}
                        autoCapitalize="none"
                        onChangeText={(val) => textFormInputChange(val, 'l_name')}
                    />
                </View>
                <Text style={[styles.text_footer, {
                    marginTop: 20
                }]}>Mobile</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Mobile Number"
                        style={styles.textInput}
                        value={data.mobile}
                        autoCapitalize="none"
                        onChangeText={(val) => textFormInputChange(val, 'mobile')}
                    />
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 20
                }]}>Address</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Address"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={data.address}
                        onChangeText={(val) => textFormInputChange(val, 'address')}
                    />
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 20
                }]}>State</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your State"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={data.state}
                        onChangeText={(val) => textFormInputChange(val, 'state')}
                    />
                </View>

                <Text style={[styles.text_footer, {
                    marginTop: 20
                }]}>Country</Text>

                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Country"
                        style={styles.textInput}
                        autoCapitalize="none"
                        value={data.country}
                        onChangeText={(val) => textFormInputChange(val, 'country')}
                    />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => { handleUpdate(data.emailId, data.f_name, data.m_name, data.l_name, data.mobile, data.address, data.state, data.country) }}
                    >
                        <LinearGradient
                            colors={['#ab47bc', '#ab47bc']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Update</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 15
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        backgroundColor: '#fff'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});