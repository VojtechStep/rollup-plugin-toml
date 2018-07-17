# rollup-plugin-toml

Import .toml files into your JavaScript code:

```toml
# config.toml

[config]
api = { hostname = "localhost", port = 3000 }

[probe]
[[probe.nodes]]
id = "api"

[[probe.nodes.replicas]]
address = "localhost:3001"

[[probe.nodes.replicas]]
address = "localhost:3002"

[[probe.nodes]]
id = "web"

[[probe.nodes.replicas]]
address = "localhost:4000"

[[probe.nodes.replicas]]
address = "localhost:4001"
```

```js
// index.js
// Default import
import configuration from './config.toml';

console.log(Object.keys(configuration)); // [ 'config', 'probe' ]

// Named import
import { config, probe } from './config.toml';

console.log(probe.nodes[1].replicas.length); // 2
```

# Installation

`yarn add -D rollup-plugin-toml`  
or  
`npm install --save-dev rollup-plugin-toml`

# Usage

```js
// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import toml from 'rollup-plugin-toml';

export default {
  input: 'src/index.js',
  output: {
    file: 'target/release/index.js',
    format: 'cjs',
  },
  plugins: [
    toml,
    resolve(),
  ],
};
```
