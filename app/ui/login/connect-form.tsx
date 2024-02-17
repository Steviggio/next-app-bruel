
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useSignIn } from "react-auth-kit";

function ConnectForm(_props: any) {
  const [error, setError] = useState("");
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values: any) => {
    console.log("Values: ", values);
    setError('');

    try {
      const response = await axios.post(
        "http://localhost:5678/api/users/login",
        values
      );

      signIn({
        token: response.data.token,
        expiresIn: 7200,
        tokenType: "Bearer",
        authState: { email: values.email, userId: response.data.userId },
      });
      alert("Connexion réussie")
      navigate("/")
    } catch (err) {
      if (err && err instanceof AxiosError)
        setError(err.response ? err.response.data.message : '');
      else if (err && err instanceof Error) setError(err.message)
      alert("Erreur dans le mot de passe ou l'identifiant")
    }
  }


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  return (
    <form className="login" onSubmit={formik.handleSubmit}>
      <div>{error}</div>
      <h2>Se connecter</h2>
      <label htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <label htmlFor="password">Mot de passe</label>
      <input id="password" name="password" type="password"
        onChange={formik.handleChange} value={formik.values.password} />
      <input id="btn-connect" type="submit" value="Se connecter" />
    </form>
  );
}

export default AxiosForm;