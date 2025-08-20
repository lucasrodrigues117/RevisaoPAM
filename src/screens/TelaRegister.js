import { Text, TextInput, View, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';


export default function TelaHome({ navigation }) {
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [oculto, setOculto] = useState(true);
    const [confirmarOculto, setConfirmarOculto] = useState(true);

    function handleSocialLogin () {
        Alert.alert('Login inválido!', 'Funcionalidade ainda não implementada.');
    };

    useEffect(() => {

        if (senha && confirmarSenha) {
            const timer = setTimeout(() => {
                if (senha !== confirmarSenha) {

                    Alert.alert('Erro', 'As senhas não coincidem.');
                }
            }, 1000);

            return () => {
                clearTimeout(timer);
            }
        }
    }, [senha, confirmarSenha]);

    function handleContinuar() {

    if (!email.trim() || !senha.trim() || !confirmarSenha.trim()) {
        Alert.alert("Preencha todos os campos", "Insira os valores necessários para prosseguir.");
        return;
    }


    if (senha !== confirmarSenha) {
        Alert.alert("Erro", "As senhas não coincidem.");
        return;
    }


}

    return (
        <View style={styles.container}>

            <View style={styles.titleBlock}>
                <Text style={styles.title}>Cadastre-se</Text>
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='digite seu email'
                    value={email}
                    onChangeText={setEmail}                />
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.password}
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={oculto}
                        placeholder='insira sua senha'
                    />
                    <TouchableOpacity onPress={() => setOculto(!oculto)}>
                        <Image
                            source={oculto ? require('../../assets/images/eye-open.png') : require('../../assets/images/eye-closed.png')}
                            style={styles.icon}
                        />

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.inputBlock}>
                <Text style={{ margin: 5 }}>Confirmar senha</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                        style={styles.password}
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry={confirmarOculto}
                        placeholder='confirme sua senha'
                    />
                    <TouchableOpacity onPress={() => setConfirmarOculto(!confirmarOculto)}>
                        <Image
                            source={confirmarOculto ? require('../../assets/images/eye-open.png') : require('../../assets/images/eye-closed.png')}
                            style={styles.icon}
                        />

                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.buttonEntry} onPress={handleContinuar}>
                    <Text style={{ color: '#ffffff' }}>Entre</Text>
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
  
    input: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#CCE5FF',
        textDecorationColor: '#000000',
        paddingHorizontal: 10,
        borderRadius: 7,
    },
  
    inputError: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#CCE5FF',
        textDecorationColor: '#f07272ff',
        paddingHorizontal: 10,
        borderRadius: 5,
    },
  
    password: {
        flex: 1,
    },
  
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCE5FF',
        borderRadius: 5,
        paddingHorizontal: 10
    },
  
    icon: {
        width: 24,
        height: 24,
        marginLeft: 5
    },
  
    buttonEntry: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 350,
        backgroundColor: '#2cb859',
        borderRadius: 3,
    },
  
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 70,
        marginBottom: 30,
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
        marginHorizontal: 50
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
        marginBottom: 170,
    }
  
  });