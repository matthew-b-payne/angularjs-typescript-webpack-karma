var webpack = require('webpack');

module.exports = {
    mode: 'development',
    context: __dirname + '/app',
    entry: './app.ts',
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        clean: true
    },
    devServer: {
        static: __dirname + '/'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                 {
                    loader: 'ts-loader',
                    options: {
                      configFile: 'pmltsconfig.json',
                    },
                  }],
                exclude: {
                  or: [/node_modules/, /e2e/],
                },
              },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    }
};