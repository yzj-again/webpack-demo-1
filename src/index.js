import x from './x.js'

console.log(x)
const div = document.getElementById('app1')
const button = document.createElement('button')
button.innerHTML = "懒加载"
button.onclick = () => {
    const promise = import('./u.js')//异步--延迟对象
    promise.then((module) => {
        //导出了一个模块，模块的默认值就是函数
        const fn = module.default
        fn()
    }, () => {
    })

}
div.appendChild(button)
