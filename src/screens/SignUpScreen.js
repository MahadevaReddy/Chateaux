import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = ({ navigation }) => {

    const [data, setData] = React.useState({
        f_name: '',
        m_name: '',
        l_name: '',
        emailId: '',
        mobile: '',
        address: '',
        state: '',
        country: '',
        photo: '',
        isActive: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        });
    }

    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirm_password: val
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    const handleSignUp = (emailId, f_name, m_name, l_name, mobile, address, state, country, password, confirm_password) => {
        alert(emailId + " " + f_name + " " + m_name + " " + l_name + " " + mobile + " " + address + " " + state + " " + country + " " + password + " " + confirm_password);
        fetch('https://employeelist-e8dca.firebaseio.com/employees.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: Math.floor((Math.random() * 100) + 1),
                    emailId,
                    f_name,
                    m_name,
                    l_name,
                    mobile,
                    address,
                    state,
                    country,
                    password,
                    isActive: true
                })
            }
        ).then((data) => {
            console.log(data.status)
            console.log(JSON.stringify(data));
        });

    }

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

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content" />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.footer}
            >
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
                            onChangeText={(val) => textInputChange(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Confirm Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Confirm Your Password"
                            secureTextEntry={data.confirm_secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handleConfirmPasswordChange(val)}
                        />
                        <TouchableOpacity
                            onPress={updateConfirmSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
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
                            onChangeText={(val) => textFormInputChange(val, 'country')}
                        />
                    </View>
                    <View style={styles.textPrivate}>
                        <Text style={styles.color_textPrivate}>
                            By signing up you agree to our
                </Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                        <Text style={styles.color_textPrivate}>{" "}and</Text>
                        <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={() => { handleSignUp(data.username, data.f_name, data.m_name, data.l_name, data.mobile, data.address, data.state, data.country, data.password, data.confirm_password) }}
                        >
                            <LinearGradient
                                colors={['#ab47bc', '#ab47bc']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>Sign Up</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: '#ab47bc',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#ab47bc'
                            }]}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Animatable.View>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ab47bc'
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