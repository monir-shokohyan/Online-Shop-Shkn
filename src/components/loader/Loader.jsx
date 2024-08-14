import React from 'react'
import { PacmanLoader } from 'react-spinners'

function LoaderComp() {
  return <PacmanLoader
    color={"#f9b20b"}
    size={30}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
  
}

export default LoaderComp