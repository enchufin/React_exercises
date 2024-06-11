import React, {useState} from 'react'

export default function SendMessageTo() {

    const [user , setUser] = useState (
        {
            persona: 'Alicia',
            mensaje: 'Ciao'
        }
    );

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`Tu mensaje ${user.mensaje} a ${user.persona}`);
          }, 1000);

    }

  return (
    <>
    <h1>Manda un mensajito</h1>

    <form onsSubmit={handleSubmit} >

      <label> Para: </label>
      {/*  ..... seteo tanto persona como el mensaje para que aparezca el placeholder */}
      <select value={user.persona} onChange={e=>{ setUser({...user, persona: e.target.value, mensaje:''})}}>
        <option value='Alicia'>Alicia</option>
        <option value='Antonio'>Antonio</option>
        <option value='Perico'>Perico</option>
      </select>

      <textarea placeholder='Di tu mierda...' value={user.mensaje} onChange={e=>{ setUser({...user, mensaje: e.target.value})}} />
      <button type='submit' onClick={handleSubmit}> Enviar mensaje </button>
    </form>
    </>
    
  )
}
