// deleteは暗黙に定義された場合は変数は削除できるが、
// var(let) や function文中の変数はnon-configurableであり削除できない

//globaleオブジェクト
x = 43;

//暗黙に定義されたglobale変数なので
//true 
console.log(delete x);

//var宣言
//削除できない
// false 
let y = 3;
console.log(delete y);


//関数宣言文の中でのdelete
function f(){
 var z = 44;
 delete z;
 console.log(z)
}
f()
//44 //削除されていない

// 【配列の要素の削除】
// 1
let color = ['red', 'blue', 'green'];
//要素として存在する状態にするが値は未定義
color[1]= undefined;
color
//["red", undefined, "green"]
if(1 in color){console.log('実行されてます')}
//実行されてます

(()=>{
// 2
let color = ['red', 'blue', 'green'];
delete color[1]
//true
color.length//削除しても配列の長さには影響しない
})()


//3
//配列の一部ではなくなります
if(1 in color){console.log('実行されてます')}
//出力されない(1との違いに注意してください)

//
function Foo(){}
Foo.prototype.bar = 42;
let foo = new Foo();
delete foo.bar;
//true

//trueを返すがプロトタイプから継承してオブジェクトに存在するプロパティは削除できない
foo.bar
//42

//プロトタイプ上でプロパティを削除
delete foo.prototype.bar;
foo.bar 
//undefined