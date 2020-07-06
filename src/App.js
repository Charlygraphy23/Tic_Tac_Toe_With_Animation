import React , {useState} from 'react';
import Icon from './components/Icon.js'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


const array=new Array(9).fill("null");

const App =()=> {

  const [isCross , setIsCross] = useState(false);
  const [winner, setWinner] = useState('');
  const [winningOpacity , setWinningColor] = useState(1)

  const reloadGame = () => {
    array.fill("null");
    setIsCross(false);
    setWinner("");
    setWinningColor(1)
  }

  const changePlayer = index => {
    if(winner){
      return toast(`Winner is ${winner}`,{type : "success"});
      
    }

    else if(array[index] === 'null'){
       if(isCross){
          array[index] = 'cross';
          setIsCross(false);
       }
       else{
         array[index] = 'circle';
         setIsCross(true);
       }
    }
    else{
      return toast('Already entered', {type : 'error'})
    }

    winnerSelection();
  }

  const winnerSelection =() =>{
      

      if((array[0] === 'cross' && array[3]=== 'cross' && array[6]=== 'cross' ) || (array[1] === 'cross' && array[4]=== 'cross' && array[7]=== 'cross' ) || (array[2] === 'cross' && array[5]=== 'cross' && array[8]=== 'cross' )
      || (array[0] === 'cross' && array[1]=== 'cross' && array[2]=== 'cross' ) || (array[3] === 'cross' && array[4]=== 'cross' && array[5]=== 'cross' ) || (array[6] === 'cross' && array[7]=== 'cross' && array[8]=== 'cross' )  
      || (array[0] === 'cross' && array[4]=== 'cross' && array[8]=== 'cross' ) || (array[2] === 'cross' && array[4]=== 'cross' && array[6]=== 'cross' )){
        setWinningColor(0.4);
        setWinner('cross')
      }
      else if((array[0] === 'circle' && array[3]=== 'circle' && array[6]=== 'circle' ) || (array[1] === 'circle' && array[4]=== 'circle' && array[7]=== 'circle' ) || (array[2] === 'circle' && array[5]=== 'circle' && array[8]=== 'circle' )
      || (array[0] === 'circle' && array[1]=== 'circle' && array[2]=== 'circle' ) || (array[3] === 'circle' && array[4]=== 'circle' && array[5]=== 'circle' ) || (array[6] === 'circle' && array[7]=== 'circle' && array[8]=== 'circle' )  
      || (array[0] === 'circle' && array[4]=== 'circle' && array[8]=== 'circle' ) || (array[2] === 'circle' && array[4]=== 'circle' && array[6]=== 'circle' )){
        setWinningColor(0.4);
        setWinner('circle')
      }
      
  }
         
  return(
    <div className="app" style={{position : 'relative'}}>
        <ToastContainer position ="bottom-center"/>
        <div className="text-center p-2" style={{marginBottom : "30px",marginTop : '40px'}}> 
             {winner ? (
                    <div>
                      <h1><small>Winner is - {winner} </small></h1>
                      <button onClick={reloadGame} className="btn btn-success" style={{padding : "10px 30px", margin : "10px" , fontSize : '20px'}}> Reload Game</button>
                    </div>
                  ) : ( <h1 className="display-4"><strong>{isCross ? "Cross" : "Circle"}'s </strong>turn </h1>)}
                 
             </div> 
        <div className="container p-5">
    
            <div className="row justify-content-center">
              <div className="col-md-6">
                  <div className="grid">
                    {array.map( (item,index) =>(
                      <div  key={index} className="card">
                        <div onClick={() => changePlayer(index)} className="card-body box" style={{opacity : winningOpacity}}>
                              <Icon name={item}/>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default App;
