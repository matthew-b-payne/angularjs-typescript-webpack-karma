module.exports = {
    mode: 'development',
    context: __dirname + '/app',
    entry: './app.ts',
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: __dirname + '/'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
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