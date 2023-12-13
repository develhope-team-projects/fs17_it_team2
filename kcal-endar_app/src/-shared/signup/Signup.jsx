import { UseSignup } from "../../-custom-hooks/signup/UseSignup";

export function Signup() {
  const { data,invalidUsername, invalidEmail, invalidPassword, onSignup, onInputChange } = UseSignup();

  return (
    <div>
      <form action="">
        <input
          name="username"
          onChange={onInputChange}
          type="text"
          value={data.username}
        />
        <input
          name="email"
          onChange={onInputChange}
          type="text"
          value={data.email}
        />
        <input
          name="password"
          onChange={onInputChange}
          type="password"
          value={data.password}
        />

        <button onClick={onSignup}>Click</button>
      </form>

      <p>{invalidUsername}</p>
      <p>{invalidEmail}</p>
      <p>{invalidPassword}</p>
    </div>
  );
}
