import React, { useEffect, useState } from 'react';

import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    Image,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native';
import { AuthContext } from '../components/context';
import Employee from '../model/Employee';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = ({ navigation }) => {
    const { signOut } = React.useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button title="logout" color="#fff" onPress={() => { signOut() }} />
            ),
            headerStyle: {
                backgroundColor: '#ab47bc',
            },
        });
    }, [navigation]);

    async function fetchData() {
        fetch('https://employeelist-e8dca.firebaseio.com/employees.json')
            .then(response => response.json())
            .then(data => {
                const loadedEmployees = [];
                for (const key in data) {
                    loadedEmployees.push(
                        new Employee(
                            key,
                            data[key].f_name,
                            data[key].m_name,
                            data[key].l_name,
                            data[key].emailId,
                            data[key].mobile,
                            data[key].address,
                            data[key].state,
                            data[key].country,
                            data[key].isActive,
                            data[key].password,
                        )
                    );
                };
                setData(loadedEmployees);
                setIsLoading(false);
            })
            .catch(err => {
                setIsLoading(false);
                setError(err);
            });
    }

    useEffect(() => {
        setIsLoading(true);
        fetchData();
    }, []);
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#5500dc" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18 }}>
                    Error fetching data... Check your network connection!
            </Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {navigation.navigate('DetailsScreen', { item })}}>
                        <View style={styles.listItem}>
                            <Image
                                style={styles.coverImage}
                                source={{
                                    uri: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHenlmJHm8c5Q/company-logo_200_200/0?e=2159024400&v=beta&t=xPF2gJpQcS8Fj83SZhsnCbiwal1hTm0FLqwYaA_naN4',
                                }}
                            />
                            <View style={styles.metaInfo}>
                                <Text style={styles.title}>{`${item.f_name} ${item.m_name} ${item.l_name
                                    }`}</Text>
                                <Text style={styles.mobile}>{item.mobile}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        paddingLeft: 10,
        paddingRight: 10
    },
    text: {
        fontSize: 15,
        color: '#fff',
        marginTop: 30,
        fontWeight: '700'
    },
    listItem: {
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#3699ad',
        flexDirection: 'row'
    },
    coverImage: {
        width: 30,
        height: 30,
        borderRadius: 8
    },
    metaInfo: {
        marginLeft: 5
    },
    title: {
        fontSize: 18,
        width: 400,
        paddingLeft: 5,
        color: '#fff'
    },
    mobile: {
        fontSize: 12,
        width: 200,
        paddingLeft: 8,
        color: '#fff'
    }
});