import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Quote from './components/ui/Quote';


const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query])


  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/quotes">
            <Quote />
          </Route>
          <Route exact path="/">
            <button className="main-page-button quote-button">
              <Link to="/quotes">Check quotes</Link>
            </button>
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <CharacterGrid isLoading={isLoading} characters={items} />
          </Route>
        </Switch>
      </div>
    </Router >
  );

}

export default App;