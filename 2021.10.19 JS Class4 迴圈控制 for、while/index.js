//for 迴圈
// for (let i = 0; i < 10; i++) {
// console.log("i:",i);
// }

//取出陣列資料
let classA=[100,90,59]
// console.log(classA[0]);
// console.log(classA[1]);
// console.log(classA[2]);
// console.log(classA.length);
classA.push(40,90,89,778,09,77)
//以迴圈取出陣列資料
// for (let i = 0; i < classA.length; i++) {
// 	console.log(classA[i]);
// }

//以for迴圈更改陣列資料
// for (let i = 0; i < classA.length; i++) {
// if (i>=5) {
// 	classA[i]="..."
// }
// console.log(classA[i]);
// }


// while 迴圈
let condition=true
let target=10
let i=0
while (condition) {
if (i===target) {
	condition=false
}
console.log(i)
i++
}