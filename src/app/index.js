import { useState, useEffect } from "react";
import {View, Text, TextInput, Pressable, ScrollView, styleSheet} from "react-native";
import {cores} from "../data/tema"
import { Accelerometer} from "expo-sensors";
import * as Haptics from "expo-haptics";


const LIMITE_DE_FORCA = 1.8;
const TEMPO_ENTRE_SORTEIOS  = 1000;

export default function Home(){
    const [opcoes,setOpcoes] = useState(["Pizza" ,"Hamburguer", "Sushi"]);
    const [resultado, setResultado] = useState("");
    const [ textoDigitado, setTextoDigitado] = useState ("")
}