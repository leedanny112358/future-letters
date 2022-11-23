import AWS from 'aws-sdk'

const S3_BUCKET = process.env.BUCKET_NAME
const REGION = process.env.REGION

AWS.config.update({
    accessKeyId: "AKIA3AXDXZP4R4VSO6AM",
    secretAccessKey: "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"
})

const S3Client = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION
})

export { S3Client }