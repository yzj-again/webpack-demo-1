import myImage from "./assets/img/acg.gy_04.jpg";

export default function () {
    console.log(myImage)
    const string=`<img src="${myImage}">`
    const div = document.getElementById('app1')
    div.innerHTML= string
    console.log("我是一个懒加载")
}