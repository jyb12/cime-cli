#!/usr/bin/env node

// commander 编写命令包 
const program = require('commander')
const package = require('../package.json');


// 创建命令行的版本命令  --version
program.version(`@cime/cli  v${package.version}`)
// 解析用户执行命令传入参数
program.parse(process.argv)


/**
 * 需求  cime-cli  --version 有效
 *  1：commander 
 */