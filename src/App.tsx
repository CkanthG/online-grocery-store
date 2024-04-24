import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GroceryMenu from './component/GroceryMenu';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DairyEggs from './grids/DairyEggsGrid';
import PantryStaples from './grids/PantryStaplesGrid';
import Beverages from './grids/BeveragesGrid';
import MeatSeafoodGrid from "./grids/MeatSeafoodGrid";
import FruitsVegetablesGrid from "./grids/FruitsVegetablesGrid";

function App() {
    return (
        <BrowserRouter>
          <GroceryMenu />
          <Routes>
              <Route path="/" element={<><FruitsVegetablesGrid/><MeatSeafoodGrid/><DairyEggs /><PantryStaples /><Beverages /></>} />
              <Route path="/fruits-vegetables" element={<FruitsVegetablesGrid />} />
              <Route path="/meat-seafood" element={<MeatSeafoodGrid />} />
              <Route path="/dairy-eggs" element={<DairyEggs />} />
              <Route path="/pantry-staples" element={<PantryStaples />} />
              <Route path="/beverages" element={<Beverages />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
