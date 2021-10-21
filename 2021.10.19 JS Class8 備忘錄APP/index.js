// const note=document.getElementById("note")
// const date=document.getElementById("date")
// const addbtn=document.getElementById("addbtn")
// const delbtn=document.getElementById("delbtn")

// //設定資料存取的陣列
// const addNote =[]
// function addNoteHtml() {
// 	//渲染頁面的資料
// 	let htmlNote=""
// 	addNote.forEach(function (note) {
// console.log(note);
// //以JavaScript 字符串模板``寫入HTML資料
// htmlNote=htmlNote + `
// <fieldset>
// 						<legend>${note.date}記事</legend>
// 						<div class="item">
// 								<div>
// 										<p>內容：${note.note}</p>
// 								</div>
// 						</div>
// 					</fieldset>`
// 	})
// //將資料連同HTML寫入頁面
// 	addOn.innerHTML=htmlNote
// }

// //設定add按鍵的功能
// addbtn.addEventListener("click",function () {
// 	// console.log(note.value);
// 	// console.log(date.value);
// 	// addNote.push({//以push在陣列後方插入資料
// 	addNote.unshift({//以unshift在陣列前方插入資料
// 		note:note.value,
// 		date:date.value
// 	})

// 	// console.log(addNote);
// addNoteHtml()

// })

// //設定del按鍵的功能
// delbtn.addEventListener("click",function () {
// addNote.pop()//以pop移除陣列中的最後一筆資料
// addNote.shift()//以shift移除陣列中的第一筆資料

// addNoteHtml()
// })

const note = document.getElementById("note")
const date = document.getElementById("date")
const addbtn = document.getElementById("addbtn")
const delbtn = document.getElementById("delbtn")

const noteArray = [];



addbtn.addEventListener("click",function () {
	noteArray.unshift({
		note1:note.value,
		date1:date.value
	})

	let htmlString = ""
	noteArray.forEach(function (value) {
		htmlString = htmlString + `
		<fieldset class="addNote">
								<legend>${value.date1}記事</legend>
								<div class="item">
										<div>
												<pre>${value.note1}</pre>
										</div>
								</div>
							</fieldset>`
						})
	addOn.innerHTML=htmlString
	// console.log(noteArray)
})


/*  */
// const note=document.getElementById("note")
// const date=document.getElementById("date")
// const addbtn=document.getElementById("addbtn")
// const delbtn=document.getElementById("delbtn")

// //設定資料存取的陣列
// const addNote =[]

// //設定add按鍵的功能
// addbtn.addEventListener("click",function () {
// 	// console.log(note.value);
// 	// console.log(date.value);
// 	// addNote.push({//以push在陣列後方插入資料
// 	addNote.unshift({//以unshift在陣列前方插入資料
// 		note:note.value,
// 		date:date.value
// 	})

// 	// console.log(addNote);
// 	let htmlNote=""
// 	addNote.forEach(function (note) {
// console.log(note);
// //以JavaScript 字符串模板``寫入HTML資料
// htmlNote=htmlNote + `
// <fieldset>
// 						<legend>${note.date}記事</legend>
// 						<div class="item">
// 								<div>
// 										<p>內容：${note.note}</p>
// 								</div>
// 						</div>
// 					</fieldset>`
// 	})
// //將資料連同HTML寫入頁面
// 	addOn.innerHTML=htmlNote

// })

// //設定del按鍵的功能
// delbtn.addEventListener("click",function () {
// addNote.pop()//以pop移除陣列中的最後一筆資料
// addNote.shift()//以shift移除陣列中的第一筆資料

// let htmlNote=""
// 	addNote.forEach(function (note) {
// console.log(note);
// //以JavaScript 字符串模板``寫入HTML資料
// htmlNote=htmlNote + `
// <fieldset>
// 						<legend>${note.date}記事</legend>
// 						<div class="item">
// 								<div>
// 										<p>內容：${note.note}</p>
// 								</div>
// 						</div>
// 					</fieldset>`
// 	})
// //將資料連同HTML寫入頁面
// 	addOn.innerHTML=htmlNote
// })