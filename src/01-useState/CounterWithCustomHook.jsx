import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {


  const { counter, increment, decrement, reset } = useCounter();


  return (
    <>
        <h1>Counter with Hook: { counter }</h1>
        <hr />

        <button type="button" className="btn btn-primary" onClick={ () => increment(2) }> +1 </button>
        <button type="button" className="btn btn-primary" onClick={ reset }> Reset </button>
        <button type="button" className="btn btn-primary" onClick={ () => decrement(2) }> -1 </button>
        
    
    </>
  )
}
