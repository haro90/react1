import React, { useState } from "react";

function CheckoutForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const userData ={
        name, phone, email
    }
    onConfirm(userData)
  };

  return (
    <div className="containerform">
      <h3>Muchas gracias por la compra, por ultimo llena el siguiente formulario:</h3>
    <form className="form1" onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input className="name"
          type="text"
          value={name}
          onChange={({target}) => setName(target.value)}
        />
      </label>
      <label>
      <br/>
      <br/>
        Teléfono:
        <input className="tel"
          type="text"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
        />
      </label>
      <label>
      <br/>
      <br/>
        Correo electrónico:
        <input className="mail"
          type="text"
          value={email}
          onChange={({target}) => setEmail(target.value)}
        />
      </label>
      <br/>
      <br/>
      <button className="submit1" type="submit">Obtener Codigo de Compra</button>
    </form>
    </div>
  );
}

export default CheckoutForm;
