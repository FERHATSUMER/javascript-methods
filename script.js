
















// function f1() {
//     console.log('f2');
// }

// function f2() {
//     console.log('f2');
// }

// function main() {
//     console.log('main');
    
//     setTimeout(f1, 0);
    
//     new Promise((resolve, reject) =>
//         resolve('I am a promise')
//     ).then(resolve => console.log(resolve))
    
//     f2();
// }

// main();






//added newfUNCTİON 


// let text = "Ferhat";
// const myArr=text.split("",4);
// // let word = myArr[0];
// console.log(myArr)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join(" ");
// console.log(text)




// let text = "Ferhat Sümer 20 yaşında "
// const myArr = text.split("")
// console.log(myArr) 


//funcition

// function square(num) {
//     return (num * num ); 
// }
// console.log(square(2))
// console.log(square) //=>fonksiyonun kendisini gösterir.

//function Declaration-->hoisted
//--->>console yukarıda olsada çalışır.
// console.log(square(2))

// function square(num) {
//     return (num * num ); 
// }

// const square=(num)=>{
//     return (num * num);
// }
// console.log(square(6))

// const myArr= [6, "Ferhat ", function() {console.log("Merhaba Ferhat");}]
// myArr[2]();// sondaki parantez fonksiyonu çağırır.

// const obj= {
//     name:"Ferhat",
//     age:5,
//     func:function(){console.log("Ferhat");}
// };
// obj.func();
// console.log(20 + (function(){return 10;})() );



// let str = "";
// for(let i=0;i<10;i++){
//     str=str.concat(i);
//     console.log(str);
// }

// const name='Ferhat';
// const age=20;
// const surName='Sümer';

// if(name == 'Ferhat'){
//     console.log('Merhaba Ferhat');
// }
// let isLoggedin = false
// if (isLoggedin == true){
//     console.log('giriş yaptiniz')
// }else{
//     console.log('giriş yapmadiniz!')
// }

// const  users=["FERHAT", "IsA", "TUgCe","MAnsUR"]
// // const newUser= users.map(user=>user.toLowerCase())
// const newUser= users.map(user=>user.toUpperCase())
// console.log(newUser)

// const newUser2=users. map(user=>{
//   return{
//     userName:user, shortName:`${user[0]}.`,newName:`${user[0].toUpperCase()}${user.slice(1).toLowerCase()} `
//   }
// })

// console.log(newUser2)

// ---- İf else koşul ifadeleri

// if (3 < 4) {
//     console.log('üç büyüktür')
// } else {
//     console.log('üç küçüktür')
// }

// let isLoggedin = false;

// if (isLoggedin == true){
//     console.log('giriş yaptiniz')
// }else{
//     console.log('giriş yapmadiniz!')
// }

//////////////ARRAY

// ////////////** .push()
// **** var olan bir diziye yeni bir eleman eklememizi sağlıyor eklemek istediğimiz elemanı parantez içerisine yazıyoruz1
// let alisverisListem = ["elma","ekmek","süt"];

// alisverisListem.push("yumurta");

// ** .pop()
// **** var olan dizideki en son elemanı silmemizi sağlar

// alisverisListem.pop();

// ** .includes()
// **** bir elemanın dizi içerisinde bulunup bulunmadığını kontrol eder.Boolean olarak çıktı alınır

// let elmaVar = alisverisListem.includes("elma");
// console.log(elmaVar);

// ** .slice()
// **** bir dizinin bir kısmının kopyasıyla yeni bir dizi oluşturmamıza olanak sağlıyor.

// let yeniAlisverisListem = alisverisListem.slice(0,2);
// console.log(yeniAlisverisListem);

// ** .join()
// **** Parantez içerisine dizi elemanları arasına koymak istediğimiz string'i parametre olarak girebiliriz. Eğer bir parametre vermezsek virgül bastırır.

// let stringAlisverisListem = alisverisListem.join();
// console.log(stringAlisverisListem);

// console.log(alisverisListem);

// let userName = 'esrasumer';
// let password = '1234';

// if (userName == 'esrasumerr') {
//      if (password == '12345') {
//         console.log('giris yaptiniz')
//     } else {
//         console.log('parola yanlis!!')
//     }
// } else {
//     console.log('kullanici adi yanlis')
// }

// let not1 = 60;
// let not2 = 50;
// let ort = (not1 + not2) / 2

// if(ort >=50){
//     console.log('gectiniz')
// }else{
//     console.log('kaldiniz :(')
// }

// and operatörü &&
// true, true = true
//true, false = false

// let muratBoy = 190;

// let muratKg = 90;

// if((muratBoy >=185 && muratKg <=100)){
//     console.log('murat model olabilir')
// }else{'murat model olamaz'}

// or operatörü || veya
// true, true = true
//true, false = true

// let tecrübe = 5;
// let dil = false;
// let cinsiyet = 'kadin';

// if((tecrübe >= 2) && (dil== true) && (cinsiyet == 'kadin' || cinsiyet == 'erkek')){
//     console.log('işe alindiniz!!')
// }else{
//     console.log('biz sizi arayacağiz')
// }

// soru1
// let num = 60;

// if(10<num && num<50){
//     console.log('sayi 10 ile 50 arasinda')
// }else{
//     console.log('sayi 10 ile 50 arasinda değil')
// }

//soru2

// let num = 4;

// if(num % 2 == 0){
//     console.log('çift sayı')
// }else{
//     console.log('tek sayi')
// }

//soru3

// let x = 10 , y = 10, z = 10;

// if (x > y && x > z) {
//     console.log('x en büyük')
// } else if (y > x && y > z ) {
//     console.log('y en büyüktür')
// } else if(z>x && z>y){
//     console.log('z en büyüktür')
// }else {
//     console.log('sayilar eşit')
// }

// soru4

// let vize1 = 30;
// let vize2 = 70;
// let final = 70;

// let ort = (vize1 + vize2 + final) / 3;

// if (ort >= 50 && final >= 50) {
//   console.log("gecti");
// } else if (final == 70 && ort < 50) {
//   console.log("gectiniz");
// } else {
//   console.log("kaldi");
// }

// let durum = ort > 50 ? "gectiniz" : "kaldiniz";

// console.log(durum);
