import React, { useState } from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { firestore } from "../Firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CadastrarJogador({navigation}) {

    const [nomeJogador, setNomeJogador] = useState(null);
    const [idadeJogador, setIdadeJogador] = useState(null);
    const [timeJogador, setTimeJogador] = useState(null);

    async function addJogador() {
        try {
            const docRef = await addDoc(collection(firestore, 'tbmoeda'), {
                nomeJogador: nomeJogador,
                idadeJogador: idadeJogador,
                timeJogador: timeJogador
            });
            console.log("Cadastrado com ID: ", docRef.id);
            Alert.alert("Cadastro", "Registros cadastrados com sucesso")
            navigation.navigate("Home");
        } catch (error) {
            console.error("Erro ao cadastrar: ", error);
            Alert.alert("Erro", "Erro ao cadastrar . Por favor, tente novamente.");
        }
    }

    return (
        <View style={estilo.container}>
            <View>
                <Text style={estilo.titulo}> Cadastre um novo Jogador</Text>
            </View>
            <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite o nome do jogador" onChangeText={setNomeJogador} value={nomeJogador} />
            <TextInput style={estilo.input} placeholder="Digite a idade" onChangeText={setIdadeJogador} value={idadeJogador} />
            <TextInput style={estilo.input} placeholder="Digite o time onde ele joga" onChangeText={setTimeJogador} value={timeJogador} />

            <TouchableOpacity
                style={estilo.btnenviar}
                onPress={() => {
                    addJogador();
                }}>
                <Text style={estilo.btntxtenviar}> Enviar </Text>
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#9ac234',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 15,
        borderRadius: 10,
    },
    btnenviar: {
        marginTop: 20,
    },
    btntxtenviar: {
        fontSize: 25,
    },
    titulo: {
        marginVertical: 40,
        fontSize: 25,
        textAlign: 'center',
    },
});