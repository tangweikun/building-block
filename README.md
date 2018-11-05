# Building Block

## Get Start

```bash
git clone https://github.com/tangweikun/building-block.git
cd building-block
yarn
yarn build-storybook
yarn storybook
```

## 遇到的坑

### `webpack`配置不完善，在其他项目引用该模块时，`styled-components`的样式被影响，并且生成的包体积过大

因为在配置`webpack`的时候没有`externals`依赖包，导致了该问题

[解决方案](https://github.com/tangweikun/building-block/commit/78fa27935b37167707265ff4a9c137740406124d)
