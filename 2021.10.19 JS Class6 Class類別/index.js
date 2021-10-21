

//class基本操作
class Card{//class以大寫開頭宣告
constructor (initName){
	this.name=initName
}
}


const c1=new Card("Jack")
// console.log(c1);
// console.log(c1.name);

//this
class Card2{
	constructor (initName){
		this.name=initName
	}
	hello(initName){
		// console.log("Hello!,",initName);
		console.log("Hello!,",this.name);
	}
	}


	const c2=new Card2("Jack")
	// console.log(c2);
	// console.log(c2.name);
	// c2.hello("Apple")

	const c3 = { name:"AA"}  //指定AA為c3的物件內容
	c2.Name=c2.hello //增加一個新的子項目(Function不變)
	c2.Name()
	c3.Name=c2.hello //增加一個新的Function及項目
	c3.Name()

	// this一般隨物件執行變動
	// 但可以綁定this的值
	class Card20{
		constructor (initName){
			this.name=initName
			this.Hello=this.hello.bind(this) //將Hello的值固定為hello
		}
		hello(initName){
			// console.log("Hello!,",initName);
			console.log("Hello!,",this.name);
		}
		}


		const c20=new Card20("Pink")
		// console.log(c2);
		// console.log(c2.name);
		// c2.hello("Apple")

		const c30 = { name:"BB"}
		c20.Name=c20.Hello
		c20.Name()
		c30.Name=c20.Hello
		c30.Name()

		//或是更改Function指定方法直接將this綁定(使用箭頭涵式宣告)
		class Card200{
			constructor (initName){
				this.name=initName
			}
			hello=(initName)=>{//使用箭頭涵式宣告
				// console.log("Hello!,",initName);
				console.log("Hello!,",this.name);
			}
			}


			const c200=new Card200("Pink")
			// console.log(c2);
			// console.log(c2.name);
			// c2.hello("Apple")

			const c300 = { name:"BB"}
			c200.Name=c200.hello
			c200.Name()
			c300.Name=c200.hello
			c300.Name()

		//繼承
class Car{
	constructor(initName){
		this.name=initName
	}
	start(){
		console.log("車子啟動");
	}
	superStart(){
		console.log("車子超級啟動");
	}
}

class Mini extends Car{
	constructor(name){
		super(name)//利用super調用所繼承的constructor
	}
key(){
	super.superStart()
	console.log("車子超級啟動BB");
}
}

const mini=new Mini("run")
mini.start()
console.log("super：",mini.name);
// console.log("key.super：",mini.start);
mini.superStart()
console.log("superStart:",mini.name);