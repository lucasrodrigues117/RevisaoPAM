import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function TelaLogin() {
    const navigation = useNavigation();

    function handleGoogleLogin() {
        Alert.alert('Login com Google', 'Funcionalidade ainda não implementada.');
    }

    return (
        <View style={styles.container}>

            <View style={styles.containerImage}>
                <Image
                    source={require('../../assets/images/casual_dog.png')}
                    style={styles.imageDog}
                    alt='a woman with her dog'
                />
            </View>

            <Text style={styles.title}>Ótimo dia!</Text>
            <Text style={styles.subtitle}>Como deseja acessar?</Text>

            <TouchableOpacity style={styles.buttonG} onPress={handleGoogleLogin}>
                <Image
                    source={require('../../assets/images/Google.png')}
                    style={styles.iconGoogle}
                />
                <Text style={styles.BGText}>Entrar com Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonOther} onPress={() => navigation.navigate('OutrasOpcoes')}>
                <Text style={styles.BOText}>Outras opções</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
        marginBottom: 20,
    },
    imageDog: {
        width: 400,
        height: 400,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
    buttonG: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        backgroundColor: '#15AD55',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    iconGoogle: {
        width: 24,
        height: 24,
        marginRight: 10,
        backgroundColor: '#fff'
    },
    BGText: {
        fontSize: 16,
        marginLeft: 70,
        color: '#fff'
    },
    buttonOther: {
        backgroundColor: '#eee',
        width: '80%',
        padding: 10,
        borderRadius: 5,
    },
    BOText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
    },
});