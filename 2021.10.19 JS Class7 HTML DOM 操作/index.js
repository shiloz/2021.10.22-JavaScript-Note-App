//操作HTML的功能主要分為
// 1.windows
// window.alert("Hi")
// 2.document


//callBack 回呼涵式
window.addEventListener("load",function() {
	console.log("load done!");
	const p1=document.getElementById("text")//指定要選取的ID
	console.log(p1);
//p
	p1.innerText="text change"//取得資料內的文字並修改
	console.log(p1);
//btn
const btn=document.getElementById("btn")
btn.addEventListener("click",function (click) {
	console.log(click);
})
//div
const div=document.getElementById("div")
div.innerHTML="<li>12345</li>"
//input
const input=document.getElementById("input")
input.addEventListener("keyup",function (key) {
	// console.log(key);
	// console.log(key.key);
	console.log(key.target.value);
})
})