export default [
    { text: '主页', link: '/' },
    // { text: '作品', link: '/work/'},
    { 
        text: '计算机基础',
        items: [
          { text: '软件架构与设计模式', link: '/base/designPatterns/' },
          { text: '操作系统', link: '/base/os/' },
        ]
    },
    { text: '前端', link: '/tech/'},
    // { text: '经验',link: '/summary/'},
    // { text: '阅读', link: '/read/'},
    { 
        text: '生活', 
        items: [
          {text: '周记', link: '/life/weekly/'}
        ]

    },
    {text: 'other', link: '/other/'}
]