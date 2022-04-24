import * as React from 'react';
import { useSelector } from 'react-redux'
import { View, TouchableOpacity} from 'react-native';
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Asset } from 'expo-asset';
import moment from 'moment';

import { AntDesign } from '@expo/vector-icons'; 

import styles from './styles'

export default function PdfFilePrint({ cardTrans, card, cardMonth }) { 
  const { user } = useSelector((state) => state.users)

  const data = new Date()
  const newDate = {
    month: String(data.getMonth() + 1).padStart(2 ,'0')
  }

  const filterDate = cardMonth ? cardMonth : newDate

  const pdfURI = Asset.fromModule(require('../../assets/icon.png')).uri;
 
   const printToFile = async () => { 
    const { uri } = await Print.printToFileAsync({
      html:`
      <html>
      <head>     
         <link rel="preconnect" href="https://fonts.googleapis.com">
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
         <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
      </head>
      <body style="max-width: 1000px; margin: 0 auto; font-family:Roboto">
         <p style="text-align: center; font-size: 40px; font-weight: bold; color: #058373 ">Olá, ${user.user.name[0].toUpperCase() + user.user.name.substr(1)}! Esta é a sua fatura de ${moment(filterDate).subtract(1, 'days').format('MMMM')}, no valor de 
         ${Intl.NumberFormat('pt-BR', { 
          style: 'currency', 
          currency: 'BRL',
        }).format(card.cardBalance).replace(/^(\D+)/, '$1 ')}</p>
          <header style="display: flex; justify-content: space-between; margin: 15px; margin-top: 10px; align-items: center;">
            <div>
              <img src="${pdfURI}" alt="Minha Figura" style="width: 100px; height: 100px;">
            </div>  
            <div>
              <p style="font-weight: bold; color: #058373; font-size: 30px;">${card.bank}</p>
            </div> 
            <div>
              <p style="font-weight: bold;">${user.user.name[0].toUpperCase() + user.user.name.substr(1)}</p>
              <strong>Fatura</strong>
              <span>${card.win +" "+ moment(filterDate).subtract(1, 'days').format('MMMM YYYY')}</span>        
            </div>      
          </header>
          <main>
             <div style="display: flex; justify-content: space-between; margin-top: 20px;">
                 <div style="margin-left: 15px;">
                   <p style="font-size: 12px; font-weight: bold;">TRANSAÇÕES</p>
                 </div>
                 <div style="margin-right: 15px; ">
                   <p style="font-size: 12px; font-weight: bold; ">VALORES EM R$</p>
                 </div>
             </div>
             <div style=" border-bottom: 5px solid black;"></div>   
             <div style="margin-top: 15px;">
               <table style="width: 100%;">              
               ${cardTrans && cardTrans.map((element) => (
                `
                <tr style="border: 1px solid #dddddd; text-align: center; padding: 10px; font-size: 13px;">
                  <td style="font-weight: bold; color:#A4A4A4;">${moment(element.data).format('DD MMM-YYYY')}</td>
                  <td>${element.category}</td>
                  <td style="font-weight: 500;">${element.description}</td>
                  <td>${Intl.NumberFormat('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL',
                  }).format(element.value).replace(/^(\D+)/, '$1 ')}</td>
                </tr>      
                
                `
               ))}                      
               </table>            
             </div>    
          </main>
        </body>
      </html>
      `
    });    
    await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
  }

  return (
    <View style={styles.container}>      
      <View  />    
      <TouchableOpacity onPress={printToFile}>
        <AntDesign name="pdffile1" size={40} color="#058373" />
      </TouchableOpacity>
    </View>
  );
}
