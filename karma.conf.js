var webpackConfig = require('./webpack.config.js');
module.exports = function (config) {
    config.set({
        basePath: './app',
        files: [
            '../node_modules/angular/angular.js',
            '../node_modules/angular-animate/angular-animate.js',
            '../node_modules/angular-resource/angular-resource.js',
            '../node_modules/angular-route/angular-route.js',
            './data/angular/unit-test-data-module.js',
            './data/angular/**/*.js',
            '**/*.+(js|ts|html)',
            // '**/*.spec.js',
            // '**/*.spec.ts',
        ],
        autoWatch: true,
        frameworks: ['jasmine', 'chai','webpack'],
        plugins: [
            'karma-jasmine',
            'karma-chai-plugins',
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
            '**/*.+(js|ts)': ['webpack'],
            '**/*.html': ['ng-html2js']
        },
        ngHtml2JsPreprocessor: {
            prependPrefix: 'app/',
            moduleName: function (htmlPath, originalPath) {
                return htmlPath;
            }
        },
        browsers: ['Chrome'],
        reporters: ['mocha']
    });
};
