<<<<<<< HEAD
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Write from '../components/write'
import Read from '../components/read'
import Header from '../components/header'
import { useState } from 'react'

export default function Home() {
 const [writeToggle,setWriteToggle] =  useState(true)

  return (
    <div>
      <Header isWriteToggle={writeToggle} setWriteToggle={setWriteToggle} />
      {
        writeToggle ? <Write /> : <Read />
      }
=======
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
>>>>>>> refs/remotes/origin/main
    </div>
  )
}
