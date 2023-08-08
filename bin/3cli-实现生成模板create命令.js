#!/usr/bin/env node

// commander 编写命令包 
const program = require('commander')
const package = require('../package.json');
const inquirer = require('inquirer');


program.version(`@cime/cli  v${package.version}`)

// command 返回值：命令的实例对象
program.command('create') //  创建一个命令  叫做 create --> cime-cli create
    .description('创建模版') //  设置命令描述 
    .action(async () => { // 异步处理函数
        // 创建终端输入框
        let {
            name
        } = await inquirer.prompt({
            type: 'input', // list 列表选择  confirm 选择框
            name: 'name', // 问题名称  
            message: '请输入项目名称：'
        })
        console.log('用户创建的的项目名字是：',name);
    })

// 写在最后
program.parse(process.argv)


/**
 * 需求：
 * 创建生成模板的命令  cime-cli create
 * 
 * 输入自定义项目名：myapp
 *  打印：用户输入myapp
 */