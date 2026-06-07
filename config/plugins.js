const normalizeMinioEndpoint = require("./utils/normalize-minio-endpoint");

module.exports = ({ env }) => {
  const minioEndpoint = normalizeMinioEndpoint(env("MINIO_ENDPOINT"));
  const minioPublicEndpoint = normalizeMinioEndpoint(
    env("MINIO_PUBLIC_ENDPOINT", minioEndpoint)
  );

  return {
    "users-permissions": {
      config: {
        jwtSecret: env("JWT_SECRET"),
      },
    },
    upload: {
      config: {
        provider: "aws-s3",
        providerOptions: {
          baseUrl: `${minioPublicEndpoint}/${env("MINIO_BUCKET")}`,
          s3Options: {
            credentials: {
              accessKeyId: env("MINIO_ACCESS_KEY"),
              secretAccessKey: env("MINIO_SECRET_KEY"),
            },
            region: env("MINIO_REGION", "us-east-1"),
            endpoint: minioEndpoint,
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
  };
};
