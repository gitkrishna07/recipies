import './App.css';
import Navbar from './components/navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/recipeDetails/RecipeDetails';
import Home from './components/home/Home';
import FavoriteFoods from './components/favouriteFoods/FavouriteFoods'

function App() {
  return (
    <div>
   <Navbar />
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/recipe/:id' element={<RecipeDetails /> } />
   <Route path="/favorites" element={<FavoriteFoods />} />
   </Routes>
    </div>
  );
}

export default App;
