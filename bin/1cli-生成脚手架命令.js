#!/usr/bin/env node

console.log('----cli run----');
/**
 * 需求；在终端输入 cime-cli 
 * 当前 cli.js文件可以执行
 * 
 * package.json 配置 bin 
 *      key   cime-cli 命令名；脚手架名
 *      value ./bin/cli.js 输入命令时候执行文件
 * npm link  全局下产生  cime-cli 命令滚
 * cime-cli  node会执行  bin/cli.js
 */