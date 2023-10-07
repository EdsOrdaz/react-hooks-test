import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: ''
    })

    const { username, email } = formState;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    };


    useEffect(() => {
        // console.log( 'Use efect called!!' );
    
    }, [])
    useEffect(() => {
        // console.log( 'Form state change' );
    
    }, [formState])
    useEffect(() => {
        // console.log( 'Email change' );
    
    }, [email])
   
    

  return (
    <>
        <h1>Formulario Simple</h1>
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
        </div>

        {
            (username === 'Edson') && <Message />
        }
    </>
  )
}
