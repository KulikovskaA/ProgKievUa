;(function(){

// var f1 = function(){
//   var a = 10;
//   return function( newVal ){
//     if( newVal !== undefined ){
//       a = newVal;
//     }
//     a++;
//     return a;
//   }
// }
//
// var closure = f1();
// console.log( closure() );
// console.log( closure() );
// console.log( closure() );
// console.log( closure() );
// console.log( closure( 0 ) );
// console.log( closure() );
// console.log( closure() );
// console.log( closure() );

// var f1 = function(){
//   var a = 10;
//   a++;
//   return a;
// }
//
// console.log( f1() );
// console.log( f1() );


// for (var i = 0; i < 5; i++) {
//   console.log( i );
// }
// console.log( i );
// console.log( i );
// console.log( i );



// var intro = function( introMess, x ){
//   return introMess + this.name;
// }
//
// var man = {
//   name: 'Bob',
//   intro: intro
// }
// console.log( man.intro('Hello! My name is ') );
//
// var man2 = {
//   name: 'Ivan',
//   intro: intro
// }
// console.log( man2.intro.call(man, 'Приветики. Я ') );
// // console.log( man2.intro.apply(man, ['Приветики. Я ']) );


//
// var Car = function(mark, model){
//
//   this.mark = mark;
//   this.model = model;
//
// }
//
// Car.prototype.drive = function(){
//   console.log('ВРУУУМ!');
// }
//
// var car1 = new Car('BMW', 'm3');
// var car2 = new Car('Mazda', 'mps 3');
//
// car1.drive();
// car2.drive();
// console.log( car1.mark );


// var vehicle = {
//   drive: true
// }
//
// var car = {
//   wheels: 4
// }
// car.__proto__ = vehicle;
//
// var boat = {
//   wheels: 0
// }
// boat.__proto__ = vehicle;
//
// console.log( car );
// // console.log( boat.wheels );
//
// console.log( car.drive );
// // console.log( boat.drive );



// console.log( a );
// let a = 10;
//
// if (true) {
//   let a = 10;
// }
//
// console.log( a );

// const CONSTANT1 = 10;
// CONSTANT1 = 20;
// console.log( CONSTANT1 );


// let greet = function( name ){
//   return `Hello1 I'm ${name}`;
// }
// console.log( greet('Bob') );

// let params = [1, false, 'example'];
// let f1 = function(a, b, c){
//   console.log( a );
//   console.log( b );
//   console.log( c );
// }
// f1(...params);


// class User{
//
//   constructor(){
//     this.error;
//   }
//
//   auth(name, email, pass, role){
//     this.name = name;
//     this.email = email;
//     this._role = role;
//     this.pass = pass;
//     this._friends = ['sfsdf', 'sdfsdf'];
//   }
//
//
//   get role(){
//     let lang = 'ru';
//     if( lang === 'en' ){
//       return 'This is Admin';
//     }else if( lang === 'ru' ){
//       return "Это админ";
//     }
//   }
//
//   set friends( id ){
//     let newFriend;
//     for (let f of this._friends) {
//       if( f !== id ){
//         newFriend = id;
//       }else{
//         this.error = 'Уже есть';
//       }
//     }
//     if( !newFriend ){
//       this.showError;
//     }else{
//       this._friends.push(newFriend)
//     }
//   }
//
//   showError(){
//     console.error( this.error );
//   }
//
//
//
// }
//
// let user = new User();
// user.auth('Bob', 'info@mail.com', 'qwerty', 'admin');
// user.friends = 'id12345';
// console.log( user.role );





}());
