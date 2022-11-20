import { useState } from "react"

export default function Home() {
	const [message,setMessage] = useState("")

	const upload = () => {
		const blob = new Blob(
			["This is some asdfasd fa simportant text"],
			{ type: "text/plain" }
		)
	
		fetch('/api/upload', {
			method: 'POST',
			headers: {
				'Content-Type': 'text/plain',
			},
			body: blob,
		}).then((res) => res.json())
		.then(data => setMessage(data.message))
	}

  return (
    <div>
      <button onClick={upload}>Submit</button>
			<div>{message}</div>
    </div>
  )
}
