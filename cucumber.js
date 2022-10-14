module.exports = {
  default: {
    paths: ['features/**/*.feature'],
    requireModule: ['ts-node/register'],
    require: ['support/**/*.ts'],
    format: ['progress-bar', '@cucumber/pretty-formatter'],
    publish: true,
    backtrace: true
  }
};

