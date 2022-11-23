import { useRef, useState } from "react"
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../s3/S3Client";

export const bucketParams = {
  Bucket: process.env.BUCKET_NAME,
  // Specify the name of the new object. For example, 'index.html'.
  // To create a directory for the object, use '/'. For example, 'myApp/package.json'.
  Key: "entry",
  // Content of the new object.
  Body: "BODY",
};

export default function Write() {
  const [message,setMessage] = useState("")
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

	const upload = () => {
    if (textAreaRef !== null) {
      const blob = new Blob(
        [textAreaRef.current?.value as BlobPart],
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
	}

  return (
   <div>
      <h1>Entry</h1>
      <textarea ref={textAreaRef} name="entry" cols="100" rows="10"></textarea>
      <button onClick={upload}>Submit</button>
      <div>{message}</div>
   </div> 
  )
}
