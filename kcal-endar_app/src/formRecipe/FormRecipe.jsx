import { useState } from "react";
import "./FormRecipe.css";
import axios from "axios";

export function FormRecipe() {
  const [email, setEmail] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [procedure, setProcedure] = useState("");

  async function handleSubmitRecipe(e) {
    e.preventDefault();

    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Inserisci un indirizzo email valido.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/invia-ricetta", {
        email,
        recipeName,
        ingredients,
        procedure,
      });

      console.log("Dati inviati con successo:", {
        email,
        recipeName,
        ingredients,
        procedure,
      });
    } catch (error) {
      console.error("Errore durante l'invio:", error);
    }
  }

  return (
    <div className="recipe-form-container">
      <div>
        <h1 className="form-title-sendRecipe">Condividi la tua ricetta</h1>
        <br />
      </div>
      <form onSubmit={handleSubmitRecipe} className="form-recipe">
        <label className="field-form-title">
          Email:
          <span className="required-recipe">*</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="field-form-title">
          Nome della ricetta:
          <span className="required-recipe">*</span>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </label>

        <label className="field-form-title">
          Ingredienti:
          <span className="required-recipe">*</span>
          <textarea
            className="textarea-recipe"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </label>

        <label className="field-form-title">
          Procedimento:
          <span className="required-recipe">*</span>
          <textarea
            className="textarea-recipe"
            value={procedure}
            onChange={(e) => setProcedure(e.target.value)}
            required
          />
        </label>

        <button className="button-sendRecipe" type="submit">
          Invia la tua ricetta
        </button>
        <br />
        <p>
          La tua ricetta sarà in attesa di approvazione prima di essere
          pubblicata. Riceverai una notifica via email non appena il post
          contenente la tua ricetta sarà disponibile.
        </p>
        <p>
          La tua ricetta sarà in attesa di approvazione prima di essere
          pubblicata. Riceverai una notifica via email non appena il post
          contenente la tua ricetta sarà disponibile.
        </p>
      </form>
    </div>
  );
}
