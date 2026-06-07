module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        baseUrl: `${env("MINIO_ENDPOINT")}/${env("MINIO_BUCKET")}`,
        s3Options: {
          credentials: {
            accessKeyId: env("MINIO_ACCESS_KEY"),
            secretAccessKey: env("MINIO_SECRET_KEY"),
          },
          region: env("MINIO_REGION", "us-east-1"),
          endpoint: env("MINIO_ENDPOINT"),
          forcePathStyle: true,
          params: {
            ACL: env("MINIO_ACL", "public-read"),
            Bucket: env("MINIO_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
