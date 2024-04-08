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
  const URL = "http://localhost:3001/items"
  const [items, setItems] = useState([])

  const itemsDropdownOptionValues = ["", "hat", "jumper", "jeans", "shorts", "t-shirt"]
  const itemsDropdownInnerText = ["Item", "Hat", "Jumper", "Jeans", "Shorts", "T-shirt"]
  const sizesDropdownOptionValues = ["", "xs", "s", "m", "l", "xl", "xxl", "universal"]
  const sizesDropdownInnerText = ["Size", "XS", "S", "M", "L", "XL", "XXL", "Universal"]

  useEffect(() => {
    axios.get(URL)
      .then(res => setItems(res.data))
  }, [])

  return (
    <>
      <UrlContext.Provider value={{URL: URL, setItems: setItems, items: items, itemsDropdownOptionValues: itemsDropdownOptionValues,
      itemsDropdownInnerText: itemsDropdownInnerText, sizesDropdownOptionValues: sizesDropdownOptionValues, sizesDropdownInnerText: sizesDropdownInnerText}}>
        <TitleDisplay></TitleDisplay>
        <ItemsFilter></ItemsFilter>
        <ItemsForm></ItemsForm>
        <Table></Table>
      </UrlContext.Provider>
    </>
  )
}

export default App
