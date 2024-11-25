import { useEffect, useState } from 'react'
import config from '../firebase.config'
import { getDatabase, ref, onValue } from 'firebase/database'
import './App.css'

import Header from './components/Header'
import CardGrid from './components/CardGrid'

const BASE_API_URL = 'https://finalspaceapi.com/api/v0/character/'

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchItems = async () => {
    const itemsJson = await fetch(BASE_API_URL);
    const itemData = await itemsJson.json(); 
    console.log(itemData);
    setItems(itemData);
    setIsLoading(false);
  }

  useEffect(() => {

    // initialize the firebase database with provided configuration
    const database = getDatabase(config)

    const collectionRef = ref(database, "characters");

    fetchItems();
  }, [])

  return (
    <div className='container'>
      <Header />
      <CardGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
