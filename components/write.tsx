export default function Write() {
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
      <h1>Entry</h1>
      <textarea name="entry" cols="100" rows="10"></textarea>
      <button>Submit</button>
   </div> 
  )
}
