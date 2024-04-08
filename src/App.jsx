import { useEffect, useState } from 'react'
import './App.css'
import ItemsFilter from './components/ItemsFilter/ItemsFilter'
import ItemsForm from './components/ItemsForm/ItemsForm'
import TitleDisplay from './components/TitleDisplay/TitleDisplay'
import UrlContext from "./components/UrlContext"
import axios from "axios"
import Table from './components/Table/Table'

function App() {
  // OBAVEZNO OVO VRATI NA LOCALHOST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const URL = "http://192.168.0.68:3001/items"
  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(URL)
      .then(res => setItems(res.data))
  }, [])

  return (
    <>
      <UrlContext.Provider value={{URL: URL, setItems: setItems, items: items}}>
        <TitleDisplay></TitleDisplay>
        <ItemsFilter></ItemsFilter>
        <ItemsForm></ItemsForm>
        <Table></Table>
      </UrlContext.Provider>
    </>
  )
}

export default App
