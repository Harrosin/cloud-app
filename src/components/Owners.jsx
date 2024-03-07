import { useState } from "react";

function Owners() {
    const [ownerName, setOwnerName] = useState("")
    const [dogName, setDogName] = useState("")
    const [dogBreed, setDogBreed] = useState("")

    function AddDog(){
        var dogPost = {
            method : "POST",
            body: JSON.stringify(
                {
                    "ownerName": ownerName,
                    "dogName": dogName,
                    "dogBreed": dogBreed
                }
            )
        }

        fetch(("https://2v8hb1nh4g.execute-api.eu-north-1.amazonaws.com/Beta/Dog"), dogPost)
        .then((response) => response.json())
        .then((data) => {console.log(data)})
    }
    
    return (
        <>
        <h1>Owners</h1>
        <h2>Add New Dog</h2>
        <label for="fname">Owner name:</label>
        <input type="text" id="fname" name="fname" onChange={(e) => setOwnerName(e.target.value)}></input>
        <label for="dname">Dog name:</label>
        <input type="text" id="dname" name="dname" onChange={(e) => setDogName(e.target.value)}></input>
        <label for="breeds">Breed:</label>
        <input type="text" id="breeds" name="breeds" onChange={(e) => setDogBreed(e.target.value)}></input>
        <button onClick={() => AddDog()}>Submit</button>
        <h2>Currently Registered Dogs</h2>
        <table bgcolor="Black">
  <tr bgcolor = "DarkGray">
    <th>Owner Name</th>
    <th>Dog Name</th>
    <th>Breed</th>
  </tr>
</table>
        </>
    )
}

export default Owners;