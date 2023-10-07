import { useEffect, useLayoutEffect, useRef, useState } from "react"

export const Quote = ( { quote, author } ) => {

  const [boxSize, setboxSize] = useState({
    width: 0,
    height: 0
  })

  const pRef = useRef()

  useEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setboxSize({
      width,
      height
    })
  }, [quote])

  return (
    <>
        <blockquote key={ quote } className="blockquote mb-1 text-end"
        style={{ display: 'flex '}}>
            <p ref={ pRef  }>{ quote }</p>
            <footer className="blockquote-footer">{ author }</footer>
            <hr />
        </blockquote>
        <code>{ JSON.stringify( boxSize ) }</code>
    </>
  )
}
