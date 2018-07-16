const { parse } = require('toml');
const { dataToEsm } = require('rollup-pluginutils');

const ext = /\.toml$/;

module.exports = {
  name: 'toml',
  transform(toml, id) {
    if (!ext.test(id)) return null;
    const data = parse(toml);
    return dataToEsm(data, {
      preferConst: true,
      objectShorthand: true,
    });
  },
};
