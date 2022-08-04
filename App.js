import React from "react";  
import styled from "styled-components/native";
import { View,Text,Button } from "react-native";
import { useState } from "react";


//-----Componentes--------//
const Page = styled.SafeAreaView`
  flex:1 ;
  align-items:center ;
`;
const HeaderText = styled.Text`
  font-size:25px ;
`;
const Input = styled.TextInput`
  width:90%;
  height:50px;
  font-size:18px;
  background-color:#EEE;
  margin-top:20px;
  border-radius:10px;
  padding:10px;
`;
const BtnCalc = styled.Button`
  height:25px;
  padding:5px;
  margin-top:25px;
`;
const ResultArea = styled.View`
  margin-top:30px;
  background-color:#EEE;
  padding:20px;
  justify-content:center;
  align-items:center;
`;
const ResultItemTitle = styled.Text`
  font-size:18px;
  font-weight:bold;
`;
const ResultItem = styled.Text`
  font-size:15px;
  margin-bottom:30px;
`;
const PctArea = styled.View`
  flex-direction:row;
  margin:20px;
`;
const PctItem = styled.Button`
`;

export default ()=>{
  //------Logica do App----------//
  const [bill,setBill] = useState('');
  const [tips, setTips] = useState(0);
  const [pct, setPct] = useState(10);

  const calc = () =>{
    let nBill = parseFloat(bill);
    if(nBill){
      setTips( (pct/100) * nBill); 
    }else{
      alert("Digite o valor da conta")
    }

  }
  return(
    <>
      <Page>
          <HeaderText>Calculadora de Gorjeta</HeaderText>
          <Input placeholder="Quanto deu a conta?"
            keyboardType="numeric"
            value={ bill }
            onChangeText={ n => setBill(n) }
          />
          <PctArea>
            <PctItem title="5%" onPress={()=> setPct(5)}/>
            <PctItem title="10%" onPress={()=> setPct(10)}/>
            <PctItem title="15%" onPress={()=> setPct(15)}/>
            <PctItem title="20%" onPress={()=> setPct(20)}/>
          </PctArea>
          <BtnCalc title={`Calcular ${ pct }%`} onPress={ calc }/>

          {tips > 0 &&
             <ResultArea>
             <ResultItemTitle>Valor da Conta</ResultItemTitle>
             <ResultItem>R$ { parseFloat(bill).toFixed(2) }</ResultItem>
 
             <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
             <ResultItem>R$ { tips.toFixed(2) } ({pct}%)</ResultItem>
 
             <ResultItemTitle>Valor Total</ResultItemTitle>
             <ResultItem>R$ {(parseFloat(bill) + tips).toFixed(2)}</ResultItem>
           </ResultArea>
          }
      </Page>
    </>
  )
}