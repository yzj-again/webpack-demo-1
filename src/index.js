import x from './x.js'
import myImage from './assets/img/acg.gy_04.jpg'

console.log(x)
console.log(myImage)
const div = document.getElementById('app1')
div.innerHTML = `<img src="${myImage}">`
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
