
//宣告
function name名稱(params參數) {
	執行的事件
}

function hello() {
	console.log("你好");

}
//執行
hello()

//將參數放入function
function count(item, price) {
	console.log("item:", item);
	console.log("price:", price);
	console.log("sum:", item * price);
}

// 執行function帶入變數
count(5, 100)

//有回傳值的function
function sum(item, price) {
	let sum = item * price
	let message = "此次消費" + sum + "元為一般會員"
	if (sum >= 50000) {
		message = "此次消費" + sum + "元為尊榮會員"
		return message
		// return sum

	}
	if (sum >= 20000) {
		message = "此次消費" + sum + "元為白金會員"
		return message
	}
	return message
}
// 執行function帶入變數
let total = sum(200, 100)
console.log(total);

//構造函數 Function
function creatCard(initName) {
	this.name = initName
}


//new 將Function建立或是實體化
let a1 =new creatCard("小明")
console.log(a1);
console.log(a1.name);

//function 的3種表示方法
// function hello(params) {}
// let hello = function (params) {}
// let hello = (params) => {}