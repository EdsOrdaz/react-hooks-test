import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });
  
    

  return (
    <>
        <h1>Formulario With Custom Hook</h1>
        <hr />

        <div className="mb-3">
          <input type="text"
            className="form-control" 
            name="username" 
            id="" 
            value={ username }
            onChange={ onInputChange }
            placeholder="Username" />

          <input type="text"
            className="form-control mt-3" 
            name="email" 
            id="" 
            value={ email }
            onChange={ onInputChange }
            placeholder="email" />

          <input type="password"
            className="form-control mt-3" 
            name="password" 
            id="" 
            value={ password }
            onChange={ onInputChange }
            placeholder="Password" />

            <button className="btn btn-primary mt-3" onClick={ onResetForm }> Borrar</button>
        </div>

    </>
  )
}
