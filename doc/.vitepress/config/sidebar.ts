export default {
    '/base/os': baseOs(),
    '/base/designPatterns/': baseDesignPatterns(),
    '/other/': other(),
    '/tech/': tech()
}


function baseOs() {
    return [
        {
            test: 'os',
            items: [
                {text: '前言', link: '/base/os/index.md'}
            ]
        }
    ]
}

function baseDesignPatterns() {
    return [
        {
            test: '设计模式',
            items: [
                { text: '前言', link: '/base/designPatterns/index.md'},
            ]
        },
    ]
}

function other() {
    return [
        {
            test: '其他',
            items: [
                { text: '前言', link: '/other/index.md'},
                { text: 'markdown测试', link: '/other/markdown测试.md'},
                { text: 'Todo', link: '/other/关于blog的优化.md'},
                { text: 'blog初步建成，想说的一些话', link: '/other/blog初步建成.md'}
            ]
        },
    ]
}

function tech() {
    return [
        {
            test: '前端',
            items: [
                { text: '前言', link: '/tech/index.md'},
            ]
        },
    ]
}