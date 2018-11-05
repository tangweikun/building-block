# Building Block

[![npm version](https://badge.fury.io/js/building-block.svg)](https://www.npmjs.com/package/building-block)
[![npm downloads](https://img.shields.io/npm/dm/building-block.svg)](https://www.npmjs.com/package/building-block)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Getting Start

```bash
yarn add building-block
import { Tooltip, ScrollContainer } from 'building-block'
```

## Live Demo

[http://building-block.surge.sh](http://building-block.surge.sh)

## 遇到的坑

### `webpack`配置不完善，在其他项目引用该模块时，`styled-components`的样式被影响，并且生成的包体积过大

因为在配置`webpack`的时候没有`externals`依赖包，导致了该问题

[解决方案](https://github.com/tangweikun/building-block/commit/78fa27935b37167707265ff4a9c137740406124d)
