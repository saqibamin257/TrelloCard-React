import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Header from './Header';
import ItemList from './ItemList';
import Footer from './Footer';
import './index.css';

const TrelloCard = ({cardData}) => {
    return(
      cardData.cardList.map( (trelloCard) => 
      <div key={trelloCard.id}>
        <div className = "card">
           <Header header={trelloCard.header}/>
           <ItemList items ={trelloCard.cards}/>        
           <Footer footer={trelloCard.footer} />   
        </div>
      </div>
      ));
  }

//------------------------------Test Data-----------------------------------//
const PHONE_CARD =
{
  id:"PHONE_CARD",
  header:{
     text:"PHONE FEATURE",
     iconName:"fa fa-ellipsis-h" },
 footer:{
     text:"Add a phone",
     iconName:"fa fa-ellipsis-h"},  
  cards:
[
    {  
      id:1,
      name:'Touch Screen'        
    },
    {  
        id:2,
        name:'Camera'        
      },
      {  
        id:3,
        name:'Internet'        
      },
      {  
        id:4,
        name:'Video Calling'        
      }
]}

const ANIMAL_CARD =
{
  id:"ANIMAL_CARD",
  header:{
     text:"ANIMALS",
     iconName:"fa fa-ellipsis-h" },
 footer:{
     text:"Add an animal",
     iconName:"fa fa-ellipsis-h"},  
  cards:
[
    {  
      id:1,
      name:'Zebra'        
    },
    {  
        id:2,
        name:'Tiger'        
      },
      {  
        id:3,
        name:'Lion'        
      },
      {  
        id:4,
        name:'Elephant'        
      }
]}

const CARDS_LISTS = {
  cardList:[PHONE_CARD,ANIMAL_CARD]    
}


const container = document.getElementById('root');
// Create a root.
const root = ReactDOMClient.createRoot(container);
root.render(<TrelloCard cardData={CARDS_LISTS}  />);