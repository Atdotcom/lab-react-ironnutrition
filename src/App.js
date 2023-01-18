import './App.css';
 import { useState } from 'react';
 import foods from './foods.json';
import FoodBox from './components/FoodBox';


function App() {

  const [listFoods, setListFoods] = useState(foods);

  return (
        <div className="App">
        <h1>Food List</h1>
    
   {listFoods.map((food) => {
        return (
              <FoodBox food={food}/>
            
            );
        }
    )
   }

          </div>
  );
}
    
export default App;
