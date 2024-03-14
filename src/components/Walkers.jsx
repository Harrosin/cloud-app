import { useEffect, useState } from "react";

function Walkers() {

  const [walkerName, setWalkerName] = useState("")
  const [workDays, setWorkDays] = useState("")
  const [workTime, setWorkTime] = useState("")
  const [data, setData] = useState()

  function AddWalker(){
      var walkerPost = {
          method : "POST",
          body: JSON.stringify(
              {
                  "walkerName": walkerName,
                  "workDays": workDays,
                  "workTime": workTime
              }
          )
      }

      fetch(("https://2v8hb1nh4g.execute-api.eu-north-1.amazonaws.com/Beta/Owner"), walkerPost)
      .then((response) => response.json())
      .then((data) => {console.log(data)})
      .then(() => window.location.reload(true))
  }

  useEffect(() => {
    fetch(("https://2v8hb1nh4g.execute-api.eu-north-1.amazonaws.com/Beta/Owner"), {method: "GET"})
    .then((response) => response.json())
    .then(json => setData(json["body"]))
    .catch(error => console.log(error))
}, [])

function walkerTable(data) {
  return (
      <table>
      <thead>
      <tr bgcolor="DarkGray">
    <th>Walker Name</th>
    <th>Working Days</th>
    <th>Working Time</th>
  </tr>
          {data.map((val, key) => {
              return(
                  <tr key={key}>
                      <td>{val.walkerName}</td>
                      <td>{val.workDays}</td>
                      <td>{val.workTime}</td>
                  </tr>
              )
          })}
      </thead>
  </table>
  )
  
}

    return (
        <>
        <h1>Walkers</h1>
        <h2>Add New Walker</h2>
        <label for="fname">Full name:</label>
        <input type="text" id="fname" name="fname"  onChange={(e) => setWalkerName(e.target.value)}></input>
        <label for="workdays">Available days:</label>
        <input type="text" id="workdays" name="workdays"  onChange={(e) => setWorkDays(e.target.value)}></input>
        <label for="worktimes">Available times:</label>
        <input type="text" id="worktimes" name="worktimes"  onChange={(e) => setWorkTime(e.target.value)}></input>
        <button onClick={() => AddWalker()}>Submit</button>
        <h2>Currently Registered Walkers</h2>

        {data ? walkerTable(data) : <h1>Loading</h1>}

        </>
    )
}

export default Walkers;