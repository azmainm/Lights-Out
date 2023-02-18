import './App.css';
import {useState,useEffect} from 'react';

function App() {
  const [board, setBoard] = useState([
  ])

  const toggle = (j, i) => {
    const newB = board;
    // corners
    if (j == 0 && i ==0){ 
      newB[j][i] = ! newB[j][i];
      newB[j+1][i] = ! newB[j+1][i];
      newB[j][i+1] = ! newB[j][i+1];
      setBoard([...newB])
    }
    else if (j==0 && i==4){
      newB[j][i] = ! newB[j][i];
      newB[j+1][i] = ! newB[j+1][i];
      newB[j][i-1] = ! newB[j][i-1];
      setBoard([...newB])
    }
    else if (j==4 && i==0){
      newB[j][i] = ! newB[j][i];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j][i+1] = ! newB[j][i+1];
      setBoard([...newB])
    }
    else if (j==4 && i==4){
      newB[j][i] = ! newB[j][i];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j][i-1] = ! newB[j][i-1];
      setBoard([...newB])
    }
    else if (j==1 && i==0){
      newB[j][i] = ! newB[j][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j+1][i] = ! newB[j+1][i];
      setBoard([...newB])
    }
    else if (j==1 && i==4){
      newB[j][i] = ! newB[j][i];
      newB[j][i-1] = ! newB[j][i-1];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j+1][i] = ! newB[j+1][i];
      setBoard([...newB])
    }
    else if (j==2 && i==0){
      newB[j][i] = ! newB[j][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j+1][i] = ! newB[j+1][i];
      setBoard([...newB])
    }
    else if (j==2 && i==4){
      newB[j][i] = ! newB[j][i];
      newB[j][i-1] = ! newB[j][i-1];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j+1][i] = ! newB[j+1][i];
      setBoard([...newB])
    }
    else if (j==3 && i==0){
      newB[j][i] = ! newB[j][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j+1][i] = ! newB[j+1][i];
      setBoard([...newB])
    }
    else if (j==3 && i==4){
      newB[j][i] = ! newB[j][i];
      newB[j][i-1] = ! newB[j][i-1];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j+1][i] = ! newB[j+1][i];
      setBoard([...newB])
    }
    else if (j==0 && i==1){
      newB[j][i] = ! newB[j][i];
      newB[j+1][i] = ! newB[j+1][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j][i-1] = ! newB[j][i-1];
      setBoard([...newB])
    }
    else if (j==0 && i==2){
      newB[j][i] = ! newB[j][i];
      newB[j+1][i] = ! newB[j+1][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j][i-1] = ! newB[j][i-1];
      setBoard([...newB])
    }
    else if (j==0 && i==3){
      newB[j][i] = ! newB[j][i];
      newB[j+1][i] = ! newB[j+1][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j][i-1] = ! newB[j][i-1];
      setBoard([...newB])
    }
    else if (j==4 && i==1){
      newB[j][i] = ! newB[j][i];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j][i-1] = ! newB[j][i-1];
      setBoard([...newB])
    }
    else if (j==4 && i==2){
      newB[j][i] = ! newB[j][i];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j][i-1] = ! newB[j][i-1];
      setBoard([...newB])
    }
    else if (j==4 && i==3){
      newB[j][i] = ! newB[j][i];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j][i-1] = ! newB[j][i-1];
      setBoard([...newB])
    }
    else{
      newB[j][i] = ! newB[j][i];
      newB[j+1][i] = ! newB[j][i-1];
      newB[j-1][i] = ! newB[j-1][i];
      newB[j][i+1] = ! newB[j][i+1];
      newB[j][i-1] = ! newB[j][i-1];
      setBoard([...newB])
    }
  }

  useEffect(() => {
    const NB = [];
    for (let i = 0; i < 5; i++) {
      NB.push([Math.random() < 0.1,Math.random() < 0.5,Math.random() < 0.5,Math.random() < 0.5,Math.random() < 0.5])
    }
    setBoard([...NB]);
  }, [])    
  return (
    
    <div className="cardgrid items-center justify-center">
      <h1 className="header">Lights Out</h1>
    {
        board.map((item,j) => {
          return (
            <div className="flex items-center justify-center">
            {
              item.map((subItem, i) => {
                return(
                  <div className={subItem ? 'bg-black card' : 'bg-white card'} onClick={() => {toggle(j, i)}}></div>
                )
              })
            }
            </div>
          )
        }
        )
    }
    </div>
  );
  }
    export default App;











