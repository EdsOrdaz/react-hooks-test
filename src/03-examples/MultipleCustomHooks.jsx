import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    return (
        <>
            <h1>BreakinBad Quotes</h1>
            <hr />


            {
                isLoading 
                    ? (
                        <LoadingQuote />
                    )
                    : data.map( data => (
                        <Quote { ...data }/>
                    ))
            }
            <hr />
            <p className="fs-3">Frases Mostradas: { counter }</p>
            <br />
            <button type="button" className="btn btn-primary" onClick={ () => increment(1) }>Mostrar mas frases</button>
            <button type="button" className="btn btn-primary" onClick={ () => decrement(1) }>Mostrar menos frases</button>

        </>
    )
}
