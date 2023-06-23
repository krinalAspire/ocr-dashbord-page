import React, { useState } from "react";
import { Button, Checkbox } from '@mui/material';

function Test2(){
    // const [isChecked, setIsChecked] = useState(false);
    const [showCheckbox, setShowCheckbox] = useState(false);

    const handleButtonClick = () => {
        setShowCheckbox(true);

      };

    // const handleCheckboxChange = (event) => {
    //     setIsChecked(event.target.checked);
    //   };
    return(
        <>
        {/* <div>
        <Button variant="contained" color="primary">
          Button
        </Button>
        <Checkbox
          checked={isChecked}
          onChange={handleCheckboxChange}
          color="primary"
        />
      </div> */}

<div>
    <Button variant="outlined" color="primary" onClick={handleButtonClick}>
      Show Checkbox
      {showCheckbox && <Checkbox defaultChecked />}
    </Button>
    {/* {showCheckbox && <Checkbox defaultChecked/>} */}
  </div>
      </>
    );
}

export default Test2;