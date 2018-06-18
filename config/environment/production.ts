// Production specific configuration
// =================================
export default {
  allowedOrigins: [
    'https://your-site.com',
  ],

  // Server IP
  ip: process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined,

  // Server port
  port: 8080,
  mongo: {
    uri: 'mongodb://brocker:brocker1@ds163650.mlab.com:63650/brocker'
  },
};
