var path = require('path');

var distpath = path.resolve(__dirname, 'dist');

var rules = [
    {
        test: /.*\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    }
];

var config = {
    mode: 'development',
    entry: './src/wyraz.js',
    output: { path: distpath, filename: 'wyraz.js' },
    module: { rules: rules }
};

module.exports = [config];
