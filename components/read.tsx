import { useState } from "react"

export default function Read() {
  const date = "2022, November 17"
  const [entryText, setEntryText] = useState("")

  const getEntryData = () => {
    fetch('/api/get-entry', {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
      }
    }).then((res) => res.json())
    .then(data => setEntryText(data.message)) 
  }

  return (
   <div>
      <button onClick={getEntryData}>Random entry</button>
      <h1>{date}</h1>
      <p>{entryText}</p>
   </div> 
  )
}
