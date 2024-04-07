import { useId, useState } from "react"
import style from "./ItemsForm.module.css"
import HatImage from "/src/assets/Hat.png"
import JeansImage from "/src/assets/Jeans.png"
import JumperImage from "/src/assets/Jumper.png"
import ShortsImage from "/src/assets/Shorts.png"
import TShirtImage from "/src/assets/T-shirt.png"
import {v4 as uuid} from "uuid"
import axios from "axios"

// Using UUID so that I don't have to check if ID already exist in the "database"
// UUIDs are globally unique

function ItemsForm() {

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
       
        axios.post("http://localhost:3001/items", postItem)
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
                <label>
                Select an item from your closet:
                <br />
                    <select name="item" onChange={changeInput} value={item.item} required>
                        <option value="" hidden>Item</option>
                        <option value="hat">Hat</option>
                        <option value="jumper">Jumper</option>
                        <option value="jeans">Jeans</option>
                        <option value="shorts">Shorts</option>
                        <option value="t-shirt">T-shirt</option>
                    </select>
                </label>
                <br />
                <label>Brand of the selected item: <br /><input value={item.brand} onChange={changeInput} type="text" name="brand" placeholder="Brand name" required></input></label>
                <br/>
                <label>Cost of the item:<br /><input value={item.price} onChange={changeInput} type="number" name="price" placeholder="Price" step="0.01" required></input></label>
                <br />
                <label>
                    Item was on sale:
                    <br />
                    <input value={"yes"} onChange={changeInput} name="onSale" type="radio" required></input>
                    Yes
                    <input value={"no"} onChange={changeInput} name="onSale" type="radio" required></input>
                    No
                </label>
                <br />
                <label>
                Select size of your item:
                <br />
                    <select value={item.size} onChange={changeInput} name="size" required>
                        <option value="" hidden>Size</option>
                        <option value="xs">XS</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                        <option value="universal">Universal</option>
                    </select>
                </label>
                <br />
                <label>
                    Item color:
                    <br />
                    <input value={item.color} onChange={changeInput} className={style.colorpicker} type="color" name="color"></input>
                </label>
                <br />
                <label>
                    Date bought:
                    <br />
                    <input value={item.dateBought} onChange={changeInput} type="date" name="dateBought" required></input>
                </label>
                <br />

                <button>Add Item</button>
            </form>
        </div>
    )
}

export default ItemsForm