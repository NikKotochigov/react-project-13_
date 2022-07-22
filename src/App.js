import { useState, useRef } from "react"
import useMapbox from "./useMapBox";
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  border: 0;
  padding: 15px 20px;
  min-width: 150px;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  transition: opacity 200ms ease-out;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  &hover: {
    opacity: 0.8;
  }

  &disabled: {
    opacity: 0.4;
    cursor: disabled;
  }

  &active: {
    box-shadow: 0 0px rgba(0, 0, 0, 0.2);
    transform: translateY(1px);
  }
`

const Map = styled.div`
  height: 100vh;
`

function App() {
  const [random, setRandom] = useState(Math.random());
  const mapRef = useRef();

  useMapbox(mapRef);

  return (
    <>
      <Button id="rerender" onClick={() => setRandom(Math.random())}>
        Ререндер!
      </Button>
      <Map ref={mapRef} ></Map>
    </>
  );
}

export default App;
