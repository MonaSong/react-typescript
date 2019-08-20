const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-module',
        libraryDirectory: 'lib',
        style: true,
    })
);
