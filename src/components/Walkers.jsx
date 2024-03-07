function Walkers() {
    return (
        <>
        <h1>Walkers</h1>
        <h2>Add New Walker</h2>
        <label for="fname">Full name:</label>
        <input type="text" id="fname" name="fname"></input>
        <label for="workdays">Available days:</label>
        <input type="text" id="workdays" name="workdays"></input>
        <label for="worktimes">Available times:</label>
        <input type="text" id="worktimes" name="worktimes"></input>
        <button>Submit</button>
        <h2>Currently Registered Walkers</h2>
        <table bgcolor="Black">
  <tr bgcolor="DarkGray">
    <th>Walker Name</th>
    <th>Working Days</th>
    <th>Working Time</th>
  </tr>
</table>
        </>
    )
}

export default Walkers;