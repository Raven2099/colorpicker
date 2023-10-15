import React from 'react';
import ColorPicker from './ColorPicker'; 

function App() {
  const colors = ["#FF5733", "#3498DB", "#2ECC71", "#F39C12", "#9B59B6", "#E74C3C", "#1ABC9C", "#34495E", "#27AE60", "#E67E22", "#8E44AD", "#D35400", "#2980B9", "#C0392B", "#16A085"];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
