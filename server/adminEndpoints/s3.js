const aws = require('aws-sdk');

module.exports = {
    generateUrl: (req, res) => {
        const { BUCKET_NAME, BUCKET_REGION, AWSID, AWSkey } = process.env
        aws.config = {
            region: BUCKET_REGION,
            accessKeyId: AWSID,
            secretAccessKey: AWSkey,
        };

        const s3 = new aws.S3();
        const fileName = req.query['file-name'];
        const fileType = req.query['file-type'];
        const s3Params = {
            Bucket: BUCKET_NAME,
            Key: fileName,
            Expires: 60,
            ContentType: fileType,
            ACL: 'public-read',
        };

        s3.getSignedUrl('putObject', s3Params, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Could not make post');
            }
            const returnData = {
                signedRequest: data,
                url: `https://${BUCKET_NAME}.s3.amazonaws.com/${fileName}`,
            };

            return res.send(returnData);
        });
    }
}
