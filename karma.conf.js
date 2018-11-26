var webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
    config.set({
        basePath: './app',
        files: [
            '../node_modules/angular/angular.js',
            '../node_modules/angular-animate/angular-animate.js',
            '../node_modules/angular-resource/angular-resource.js',
            '../node_modules/angular-route/angular-route.js',
            '**/*.+(ts|html)'
        ],
        autoWatch: true,
        frameworks: ['jasmine', 'karma-typescript'],
        plugins: [
            'karma-jasmine',
            'karma-sourcemap-loader',
            'karma-chrome-launcher',
            'karma-webpack',
            'karma-mocha-reporter',
            'karma-typescript',
            'karma-ng-html2js-preprocessor'
        ],

        port: 9876,
        webpack: webpackConfig,
        preprocessors: {
            '**/*.+(js|ts)': ['webpack', 'karma-typescript'],
            '**/*.html': ['ng-html2js']
        },
        browsers: ['Chrome'],
        reporters: ['mocha']
    });
};
