#!/usr/bin/env node

// commander 编写命令包 
const program = require('commander')
const package = require('../package.json');
const inquirer = require('inquirer');
const downloadGitRepo = require('download-git-repo');
const path = require('path');
const ora = require('ora')
const loading = ora('正在下载....')

let templates =  [{
    name: 'cime-admin-react',
    value: 'https://github.com:guojiongwei/webpack5-react-ts'
},
{
    name: 'cime-admin-react-electron',
    value: 'https://github.com:guojiongwei/react18-vite2-ts'
},
{
    name: 'cime-admin-vue',
    value: 'https://github.com:guojiongwei/dumi2-demo'
}
]

// let templates =  [
//     // {
//     //  name:"列表名",
//     //  value:'下载模板需要的链接地址',   
//     // }
//     {
//         name: "cime-admin-react",
//         value: 'https://github.com:yq979292/react-to-vue',
//     }, {
//         name: 'cime-admin-vue',
//         value: 'https://github.com:yq979292/hooks',
//     }, {
//         name: 'cime-admin-electron ts学习笔记',
//         value: 'https://github.com:yq979292/TypeScript-Tiny-Book',
//     }
// ]
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
            choices:templates
        })
        console.log('选择模板：', template);

        loading.start()
        // 开始下载代码：
        // downloadGitRepo('下载路径','目标文件夹路径','下载完毕后执行的函数')
        // process.cwd() 获取 命令是在哪个目录下输入的
        let dest = path.join(process.cwd(), name)
        downloadGitRepo(template, dest, function (err) {
            if (err) {
                loading.fail('创建模版失败：' + err.message) // 失败loading
            } else {
                loading.succeed('创建模版成功!') // 成功loading
            }
        })
    })

// 写在最后
program.parse(process.argv)


/**
 * 需求：
 * cime-cli create
 *  myapp
 * 选择下载模板
 *  开始下载模板，
 *   1：将模板代码放在本地，
 *     优点：下载速度块 
 *     缺点：每次更新模板修需要更新脚手架
 *   2：从github 或者 gitee 等代码托管平台下载
 *     好处：如果不修改脚手架代码不需要更新版本
 *     弊端：下载熟读慢
 */