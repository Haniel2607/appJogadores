import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { firestore } from "../Firebase";
import { collection, doc, updateDoc } from "firebase/firestore";

export default function AlterarJogador({navigation, route}) {

    const id = route.params.id;

    const [nomeJogador, setNomeJogador] = useState(route.params.nomeJogador);
    const [idadeJogador, setIdadeJogador] = useState(route.params.idadeJogador);
    const [timeJogador, setTimeJogador] = useState(route.params.timeJogador);


    async function alterarJogador(id, nomeJogador, idadeJogador, timeJogador) {
        try {
            await updateDoc(doc(collection(firestore, "tbjogador"), id), {
                nomeJogador: nomeJogador,
                idadeJogador: idadeJogador,
                timeJogador: timeJogador
            })
            Alert.alert("Aviso", "Dados do jogador alterados com sucesso.")
            navigation.navigate("Home")
        }
        catch (error) {
            console.error("Erro ao alterar: ", error);
            Alert.alert("Erro", "Erro ao alterar. Por favor, tente novamente.");
        }
    }
        return (
            <View style={estilo.container}>
                <View>
                    <Text style={estilo.titulo}> Alterar dados do Jogador </Text>
                </View>
                <View>
                    <TextInput autoCapitalize='words' style={estilo.input} placeholder="Digite o nome do Jogador" onChangeText={setNomeJogador} value={nomeJogador} />
                    <TextInput style={estilo.input} placeholder="Digite a idade" onChangeText={setIdadeJogador} value={idadeJogador} />
                    <TextInput style={estilo.input} placeholder="Digite o time onde ele joga" onChangeText={setTimeJogador} value={timeJogador} />
                    <TouchableOpacity
                        style={estilo.btnenviar}
                        onPress={() => {
                            alterarJogador(id, nomeJogador, idadeJogador, timeJogador);
                        }}>
                        <Text style={estilo.btntxtenviar}> Alterar </Text>
                    </TouchableOpacity>
                </View>
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