// Next.js API route support: https://nextjs.org/docs/api-routes/introductions
import { S3 } from 'aws-sdk';
import type { NextApiRequest, NextApiResponse } from 'next'
import { S3Client } from "../../s3/S3Client"

type UploadResponse = {
  message: string
}

const grabRandomEntryKey = async () => {
  const params: S3.ListObjectsRequest = {
    Bucket: process.env.BUCKET_NAME as string
  }
  const list = await S3Client
    .listObjects(params)
    .promise();

  if (list.Contents) {
    const randomEntry = list.Contents[Math.floor(Math.random() * list.Contents.length)]
    if (randomEntry.Key) {
      return randomEntry.Key
    }
  }
  return ""
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse>
) {
	if (req.method == 'GET') {

    const bucketParams: S3.GetObjectRequest = {
      Bucket: process.env.BUCKET_NAME as string,
      Key: await grabRandomEntryKey(),
    }; 
    
    try {
      const s3Response = await S3Client.getObject(bucketParams).promise()
      const entryText = s3Response.Body
      if (entryText !== undefined) {
        res.status(200).json({ message: entryText.toString()})
      } else {
        res.status(404).json({message: "entry cannot be found"})
      }
    } catch (e) {
      res.status(400).json({ message: `There was an error: ${e}` })
    }
	}
  res.status(405).json({ message: 'This endpoint will only take GET requests' })
}