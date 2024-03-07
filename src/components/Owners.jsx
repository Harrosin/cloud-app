function Owners() {
    return (
        <>
        <h1>Owners</h1>
        <h2>Add New Dog</h2>
        <label for="fname">Owner name:</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="dname">Dog name:</label>
        <input type="text" id="dname" name="dname"></input>
        <label for="breeds">Breed:</label>
        <input type="text" id="breeds" name="breeds"></input>
        <button>Submit</button>
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