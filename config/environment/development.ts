'use strict'

// Development specific configuration
// ==================================
export default {
  allowedOrigins: [
    'http://localhost:3000',
  ],
  mongo: {
    // uri: 'mongodb://mongo/typeExpress-dev'
    uri: 'mongodb://brocker:brocker1@ds163650.mlab.com:63650/brocker'
  },
};
