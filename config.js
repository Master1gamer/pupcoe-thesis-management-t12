const config = {
  development: {
    db: {
      database: 'd3rqakkbeqjvlh',
      user: 'mcqfiyjhkmlijc',
      password: '63892f5253085e21053ac9322b99122a97181258aa8149734586bd522e39354c',
      host: 'ec2-50-17-246-114.compute-1.amazonaws.com',
      port: 5432,
     ssl: true
    },
    nodemailer: {
    }
  },
  production: {
    db: {
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      host: process.env.DB_HOST,
      port: 5432
    },
    nodemailer: {

    }
  }
};

module.exports = process.env.NODE_ENV === 'production' ? config.production : config.development;
