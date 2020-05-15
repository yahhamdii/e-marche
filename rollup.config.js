
export default {
  entry: './src/index.js',
  moduleName: 'rollup',
  targets: [
    { dest: 'dist/index.bundle.js', format: 'umd' },
  ],
  external: [
    'fs',
    'http',
    'lodash',
    'async',
    'dotenv',
  ],
  globals: {
    fs: 'fs',
    http: 'http',
    lodash: 'lodash',
    async: 'async',
    'dotenv': 'dotenv',
  },

};