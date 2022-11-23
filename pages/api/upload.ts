import type { NextApiRequest, NextApiResponse } from 'next'
import { S3Client } from "../../s3/S3Client"
import { S3 } from 'aws-sdk';

type UploadResponse = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse>
) {
	if (req.method == 'POST') {

    const params: S3.PutObjectRequest = {
      Body: req.body,
      Bucket: process.env.BUCKET_NAME as string,
      Key: Date.now().toString(),
      ContentType: "text/plain"
    }
    
    try {
      const s3Response = await S3Client.putObject(params).promise()
      res.status(200).json({ message: `The file has been succesfully added` })
    } catch (e) {
      res.status(400).json({ message: `There was an error: ${e}` })
    }
	}
  res.status(405).json({ message: 'This endpoint will only take POST requests' })
}