import AWS from 'aws-sdk'

const S3_BUCKET = process.env.BUCKET_NAME
const REGION = process.env.REGION

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY
})

const S3Client = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION
})

export { S3Client }