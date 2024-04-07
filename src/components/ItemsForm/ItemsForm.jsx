import { useContext, useId, useState } from "react"
import style from "./ItemsForm.module.css"
import HatImage from "/src/assets/Hat.png"
import JeansImage from "/src/assets/Jeans.png"
import JumperImage from "/src/assets/Jumper.png"
import ShortsImage from "/src/assets/Shorts.png"
import TShirtImage from "/src/assets/T-shirt.png"
import {v4 as uuid} from "uuid"
import axios from "axios"
import SelectInput from "../../FormInputs/SelectInput"
import FieldInput from "../../FormInputs/FieldInput"
import RadioInput from "../../FormInputs/RadioInput"
import UrlContext from "../../UrlContext"

// Using UUID so that I don't have to check if ID already exist in the "database"
// UUIDs are globally unique

function ItemsForm() {
    const URL = useContext(UrlContext)

    const [item, setItemData] = useState(
        {
            item: "",
            brand: "",
            price: "",
            onSale: "",
            size: "",
            color: "#000000",
            dateBought: "",
            imagePath: "",
        }
    )

    function handleSubmit(event){
        event.preventDefault()

        const smallID = uuid().slice(0, 8)
        const imagePath = determineImagePath(item.item)
        
        const postItem = {id: smallID, ...item, imagePath: imagePath}
       
        axios.post(URL, postItem)
        .then(res => console.log(res))
        
    }

    function changeInput(event){
        const { name, value } = event.target
        setItemData({...item, [name]: value}) 
    }

    function determineImagePath(itemName){
        switch (itemName) {
            case "hat":
                return HatImage
        
            case "jumper":
                return JumperImage

            case "jeans":
                return JeansImage

            case "shorts":
                return ShortsImage

            case "t-shirt":
                return TShirtImage
        }
    }

    return (
        <div className={style.mainDiv}>
            <form className={style.form} onSubmit={handleSubmit}>
                <SelectInput labelText={"Select an item from your closet:"}
                selectValue={item.item}
                selectName={"item"}
                onChange={changeInput}
                optionValues={["", "hat", "jumper", "jeans", "shorts", "t-shirt"]}
                innerText={["Item", "Hat", "Jumper", "Jeans", "Shorts", "T-shirt"]}
                ></SelectInput>
                <br />
                <FieldInput labelText={"Brand of the selected item:"} inputType={"text"} inputName={"brand"} inputPlaceholder={"Brand name"} inputValue={item.brand} onChange={changeInput}></FieldInput>
                <br/>
                <FieldInput labelText={"Cost of the item:"} inputType={"number"} inputName={"price"} inputPlaceholder={"Price"} inputValue={item.price} onChange={changeInput} numberStep={"0.01"}></FieldInput>
                <br />
                <RadioInput labelText={"Item was on sale:"} radioValues={["yes", "no"]} radioLabels={["Yes", "No"]} onChange={changeInput} radioName={"onSale"} item={item}></RadioInput>
                <br />
                <SelectInput labelText={"Select size of your item:"}
                selectValue={item.size}
                selectName={"size"}
                onChange={changeInput}
                optionValues={["", "xs", "s", "m", "l", "xl", "xxl", "universal"]}
                innerText={["Size", "XS", "S", "M", "L", "XL", "XXL", "Universal"]}
                ></SelectInput>
                <br />
                <FieldInput labelText={"Item color:"} inputType={"color"} inputName={"color"} inputValue={item.color} onChange={changeInput}></FieldInput>
                <br />
                <FieldInput labelText={"Date bought:"} inputType={"date"} inputName={"dateBought"} inputValue={item.dateBought} onChange={changeInput}></FieldInput>
                <br />

                <button>Add Item</button>
            </form>
        </div>
    )
}

export default ItemsForm