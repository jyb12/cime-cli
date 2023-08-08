#!/usr/bin/env node

// commander 编写命令包 
const program = require('commander')
const package = require('../package.json');
const inquirer = require('inquirer');


program.version(`@cime/cli  v${package.version}`)

program.command('create')
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
        console.log('用户创建的的项目名字是：', name);



        let {
            template
        } = await inquirer.prompt({
            type: "list", // 实现选择下载模板
            name: 'template',
            message: '请选择下载的项目：',
            choices: [
                // {
                //  name:"列表名",
                //  value:'下载模板需要的链接地址',   
                // }
                {
                    name: "default vue2.x",
                    value: 'github',
                }, {
                    name: 'default vue2.x',
                    value: 'gitee',
                }, {
                    name: 'mananuly 自定义',
                    value: 'aa',
                }
            ]
        })
        console.log('选择模板：', template);

        if (template == 'aa') {
            // 选择vue的版本
            let {
                v
            } = await inquirer.prompt({
                type: "list", // 实现选择下载模板
                name: 'v',
                message: '请选择下载的项目：',
                choices: [
                    {
                        name: "vue2.x",
                        value: 'github',
                    }, {
                        name: 'vue3.x',
                        value: 'gitee',
                    }
                ]
            })
            console.log('选择的vue版本是：',v);
            // 选择项目中安装的依赖
            let {
                color
            } = await inquirer.prompt({
                type: "checkbox",
                message: "选择颜色:",
                name: "color",
                choices: [
                    new inquirer.Separator(), // 添加分隔符
                    {
                        name: "vue-router",
                        checked: true // 默认选中
                    },
                    {
                        name: "vuex"
                    },
                    {
                        name: "axios"
                    }
                ]
            })

            console.log(color);

            
        }

    })

// 写在最后
program.parse(process.argv)


/**
 * 需求：
 * cime-cli create
 *  myapp
 * 选择下载模板
 */