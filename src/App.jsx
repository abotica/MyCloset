import './App.css'
import ItemsFilter from './components/ItemsFilter/ItemsFilter'
import ItemsForm from './components/ItemsForm/ItemsForm'
import TitleDisplay from './components/TitleDisplay/TitleDisplay'
import UrlContext from "./UrlContext"

function App() {
  // OBAVEZNO OVO VRATI NA LOCALHOST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const URL = "http://192.168.0.68:3001/items"
  const filters = ["Size"]

  return (
    <>
      <UrlContext.Provider value={URL}>
        <TitleDisplay></TitleDisplay>
        <ItemsFilter></ItemsFilter>
        <ItemsForm></ItemsForm>
      </UrlContext.Provider>
    </>
  )
}

export default App
