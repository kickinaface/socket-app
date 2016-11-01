// Karma configuration
module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-filter/dist/angular-filter.min.js',
        'socket.io/socket.io.js',
        'public/js/**/**.js',
        'test/**/**.js'
    ],

    exclude: [
    ],

    preprocessors: {
        'public/js/*/!(*.test).js': ['coverage']
    },

    reporters: ['coverage', 'spec'],

    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-coverage',
        'karma-spec-reporter',
        'karma-phantomjs-launcher'
    ],

    coverageReporter: {
        type: 'html',
        dir: 'coverage/'
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    phantomjsLauncher: {
        exitOnResourceError: true
    },

    singleRun: false,

    concurrency: Infinity
  })
}
