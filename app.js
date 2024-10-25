// if , else, swich , case.
// const person = parseInt(prompt ('How old are you?'))
// if (person >= 13 && person <=19) {
//     console.log(`you are an adult`);   
// } else if (person >=20 && person <= 65) {
//     console.log(`you are vzroslyi`); 
// } else {
//     console.log(`you are a pensioner`);  
// }
// const ball = parseInt(prompt('kancha ball'))
// if (ball >= 100 && ball <= 120){
//     console.log(`stipendia alasyn`);

// } else if (ball >= 80 && ball <= 100){
//     console.log(`okuu`);


// } else if (ball >= 60 && ball <=80){
//     console.log(`bad`);

// } else{
//     console.log(`too bad`);   
// }
// 100-120 stipendia alasyn
// 80-100 dagy okuu
// 60-80 bad


// 2ге болунсо когсол чет деп
// let num = parseInt(prompt("san jaz"))
// if (num % 2 == 0) {
//     console.log(`jup san`);
// } else {
//     console.log(`tak san`);    
// }

// const food = prompt('choose the color')
// switch (food) {
//     case 'green':
//         console.log('ukrop');
//      break;
//      case 'yellow':
//         console.log('banana');
//          break;

//      case 'red':
//         console.log('apple');
//         break;
//          default:
//             console.log('myndai jok');      
// }
const seasons = parseInt(prompt("write a number"))
switch (seasons) {
   case 12:
   case 1:
   case 2:
      console.log('winter');
      break;
   case 3:
   case 4:
   case 5:
      console.log('spring');
      break;
   case 6:
   case 7:
   case 8:
      console.log('summer');
      break;
   case 9:
   case 10:
   case 11:
      console.log('autumn');
      break;
   default:
      console.log('no season');
}
