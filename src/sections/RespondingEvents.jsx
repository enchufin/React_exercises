import React from 'react';
import ListaDeBotones from '../exercises/ListaDeBotones';
import ColorSwitchApp from '../exercises/ColorSwitchApp';
import ColorSwitchInput from '../exercises/ColorSwitchInput';
import SendMessageTo from '../exercises/SendMessageTo';


export default function RespondingEvents() {
  return (
    <>
     <ListaDeBotones/>
     <section id='colorContainer'>
      <ColorSwitchApp />
      <ColorSwitchInput />
     </section>
     <SendMessageTo />
    
    </>
   
  )
}
