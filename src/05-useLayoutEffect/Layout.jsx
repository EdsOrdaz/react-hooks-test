import { useCounter, useFetch } from "../hooks/index";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {

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
                        <Quote key={ data.quote } { ...data }/>
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
