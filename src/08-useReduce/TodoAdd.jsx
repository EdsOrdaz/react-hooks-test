import { useRef, useState } from "react"
import { useForm } from "../hooks";

export const TodoAdd = ( {newtodo} ) => {

    const { description, onResetForm, onInputChange } = useForm({
        description: '',
    });

    const onSubmit = (ev) => {
        ev.preventDefault();
        if( description.length < 1 ) return;

        newtodo && newtodo({
            id: new Date().getTime(),
            description: description,
            done: false
        });
        onResetForm();
    }

  return (
    <>
        <form onSubmit={ onSubmit }>
            <input 
                name="description"
                type="text"
                placeholder="Que hay que hacer"
                className="form-control" 
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type="submit" 
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    </>
  )
}
