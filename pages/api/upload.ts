// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type UploadResponse = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UploadResponse>
) {
	if (req.method == 'POST') {
		const blobfile = req.body
		res.status(200).json({ message: `The upload message was: ${blobfile}` })
	}
  res.status(405).json({ message: 'This endpoint will only take POST requests' })
}
