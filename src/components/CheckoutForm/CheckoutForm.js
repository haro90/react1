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
    <div className="container">
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={({target}) => setName(target.value)}
        />
      </label>
      <label>
        Teléfono:
        <input
          type="text"
          value={phone}
          onChange={({target}) => setPhone(target.value)}
        />
      </label>
      <label>
        Correo electrónico:
        <input
          type="text"
          value={email}
          onChange={({target}) => setEmail(target.value)}
        />
      </label>
      <button type="submit">Crear Orden</button>
    </form>
    </div>
  );
}

export default CheckoutForm;
