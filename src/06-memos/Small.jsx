import { memo } from "react";

export const Small = memo(({ value }) => {
    console.log( 'Otra vez :( ' );
  return (
    <>
        <small> { value }</small>
    </>
  )
})
