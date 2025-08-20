import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image, Alert, StyleSheet } from "react-native";

import Checkbox from 'expo-checkbox';
export default function TelaOP({navigation}) {
    const [senha, setSenha] = useState('');
    const [oculto, setOculto] = useState(true);
    const [marcado, setMarcado] = useState(false);
    function handleSocialLogin () {
        Alert.alert('Login inválido!', 'Funcionalidade ainda não implementada.');
    };

    return (
        <View style={styles.container}>

            <View style={styles.titleBlock}>
                <Text style={styles.title}>Acesse</Text>
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='digite seu email'
                />
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.password}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={oculto}
                        placeholder='digite sua senha'
                    />
                    <TouchableOpacity onPress={() => setOculto(!oculto)}>
                        <Image
                            source={oculto ? require('../../assets/images/eye-open.png') : require('../../assets/images/eye-closed.png')}
                            style={styles.icon}
                        />

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.Checkbox}>
                <Checkbox
                    value={marcado}
                    onValueChange={setMarcado}
                    color={marcado ? '#4630EB' : undefined}
                />
                <Text style={styles.text}>Concordo com os Termos de Serviço</Text>
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonEntry} onPress={handleSocialLogin}>
                    <Text style={{ color: '#ffffff' }}>Entre</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonOther} onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: '#000000' }}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerLine}>
                <View style={styles.dividingLine} />

                <Text style={styles.textLine}>OU</Text>

                <View style={styles.dividingLine} />
            </View>
            <View style={styles.containerImage}>
                <TouchableOpacity onPress={handleSocialLogin}>
                    <Image
                        source={require('../../assets/images/Google.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSocialLogin}>
                    <Image
                        source={require('../../assets/images/Facebook.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeced',
    },
  
    text: {
        marginLeft: 10,
    },
  
    title: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 30,
        fontWeight: 600,
        color: '#2e3e4b'
    },
  
    titleBlock: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: 20,
        paddingTop: 30,
    },
  
    inputBlock: {
        margin: 10,
    },
  
    icon: {
        width: 24,
        height: 24,
        marginLeft: 5
    },
  
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCE5FF',
        borderRadius: 5,
        paddingHorizontal: 10
    },
  
    password: {
        flex: 1,
    },
  
    input: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#CCE5FF',
        textDecorationColor: '#000000',
        paddingHorizontal: 10,
        borderRadius: 7,
    },
  
    Checkbox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        margin: 10
  
    },
  
    buttonEntry: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 170,
        backgroundColor: '#2cb859',
        borderRadius: 3,
    },
  
    buttonOther: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 170,
        backgroundColor: '#ffffff',
        borderRadius: 3,
        borderColor: '#43d38d',
        borderWidth: 1,
    },
  
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 100,
    },
  
    dividingLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#474747ff'
    },
  
    containerLine: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 50,
        marginTop: -50,
    },
  
    textLine: {
        marginHorizontal: 15,
        color: '#666',
        fontSize: 14,
        fontWeight: '500'
    },
  
    containerImage: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 230,
    }
});
