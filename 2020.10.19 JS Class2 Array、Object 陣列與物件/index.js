
//Array陣列：

		//假設需要處理同學的座號及姓名
				// let c1 = "小明"
				// let c2 = "小白"
				//......
				// let c30 = "小華"

		//以陣列方式表示

				let classA = ["小明","小白","小華"]
				console.log("轉學前：",classA);
				console.log(classA,length);  //顯示陣列長度(資料數量)

				classA.push("小黃") //將資料放入陣列後方
				console.log("轉學後：",classA);
				console.log(classA,length);  //顯示陣列長度(資料數量)

//Object物件：
//不同類型的集合
	const post = {
img:"https://picsum.photos/50/50/?random=1",
text:"這是一張圖片",
date:"2020/10/19",
comment:["拍得好棒","不錯不錯"],
	}

	//可以將物件放入陣列
	const show = [
		post,
		post,
		post,
		post,
		post,
	]

	console.log("show:",show);
	//指定顯示第幾筆資料
	console.log("1st",show[0]);
	console.log("2nd",show[1]);
	console.log("3rd",show[2]);

	//取出物件中的值
	console.log("img link:",post.img);// "."=>資料中的
	console.log("1st img link:",show[0].img);