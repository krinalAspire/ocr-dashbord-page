import './App.css';
import Test from './Test';
import Page from './Page';
import Test2 from './Test2';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { useState } from 'react';

function App() {
  // const [isClicked, setIsClicked] = useState(false);

  // const handleButtonClick = () => {
  //   setIsClicked(true);
  // };
  return (
    <>
    {/* <div> */}
      {/* <Page/> */}
       <Test/>
      {/* <Test2/> */}

      {/* <div>


   {/* <div>
      <Button variant="outlined" color="primary" onClick={handleButtonClick}>
        {isClicked ? <CheckCircleIcon /> : null}
        Click Me
      </Button>
    </div>
    // </div> */}
    </>
  );
}

export default App;
