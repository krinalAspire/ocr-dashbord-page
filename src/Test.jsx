import React, { useState } from "react";
import { Button} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Test(){
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonId) => {
    
    setSelectedButtons((prevSelectedButtons) => {
      if (prevSelectedButtons.includes(buttonId)) {
        return prevSelectedButtons.filter((id) => id !== buttonId);
      } else {
        return [...prevSelectedButtons, buttonId];
      }
    });
  };

  const buttons = [
    { id: 'button1', label: 'Button 1' },
    { id: 'button2', label: 'Button 2' },
    { id: 'button3', label: 'Button 3' },
    { id: 'button4', label: 'Button 4' },
    { id: 'button5', label: 'Button 5' },
    { id: 'button6', label: 'Button 6' },
    { id: 'button7', label: 'Button 7' },
    { id: 'button8', label: 'Button 8' },
    { id: 'button9', label: 'Button 9' },
    { id: 'button10', label: 'Button 10' },
  ];
  
    return(
      <>
   <div>
    {buttons.map((button) => (
      <Button
        key={button.id}
        variant={selectedButtons.includes(button.id) ? 'contained' : 'outlined'}
        sx={{color:"white", backgroundColor:"rgba(102, 105, 103,0.4)"}}
        onClick={() => handleButtonClick(button.id)}
      >
        {button.label}
        {selectedButtons.includes(button.id) ? <CheckCircleIcon/>:null}
      </Button>
    ))}
  </div>
      </>
    );
}

export default Test;