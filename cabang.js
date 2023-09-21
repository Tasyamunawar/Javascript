// 1. Syntac Percabangan If

var totalbelanja = 20000;

if (totalbelanja > 10000) {
  document.getElementById("if").innerHTML = "Selamat kamu dapat piring";
}

// 2. Syntac Percabangan If Else

var umurPengunjung = 17;

if (umurPengunjung >= 17) {
  document.getElementById("ifelse").innerHTML = "Kamu Boleh Masuk Wahana";
} else {
  document.getElementById("ifelse").innerHTML = "Maaf Kamu Boleh Masuk Wahana";
}

// 3. Percabangan If Else If

var tiket = 8;

if (tiket >= 6) {
  document.getElementById("ifelseif").innerHTML = "Dapat Popcorn";
} else if (tiket >= 4) {
  document.getElementById("ifelseif").innerHTML = "Dapat Makanan Ringan";
} else if (tiket >= 2) {
  document.getElementById("ifelseif").innerHTML = "Dapat Permen";
} else {
  document.getElementById("ifelseif").innerHTML = "Tidak Dapat Snack";
}

// 4. Syntac Percabangan Switch Case

//  Cara Pertama
// var umurPengunjung = prompt("Masukkan Umur Anda !");
// var wahana;

// switch (true){
//     case umurPengunjung >= 18:
//         wahana = "Boleh Masuk Kora-kora";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;
//         case umurPengunjung >= 16:
//         wahana = "Boleh Masuk Flying Fox";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;
//         case umurPengunjung >= 14:
//         wahana = "Boleh Masuk Halilintar";
//         document.getElementById("switchcase").innerHTML = wahana;
//         break;
//         default :
//             wahana = "Terimakasih sudah berkunjung";
//             document.getElementById("switchcase").innerHTML = wahana;
// }

// Cara Kedua
// var nilai = prompt("Massukkan Nilai Anda");
// var grade = "";

// switch (true) {
//   case nilai > 90:
//     grade = "A+";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;
//   case nilai > 80:
//     grade = "A";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;
//     case nilai > 70:
//     grade = "B";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;
//     case nilai > 60:
//     grade = "C";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;case nilai > 50:
//     grade = "D";
//     document.getElementById("switchcase").innerHTML = grade;
//     break;
//   default:
//     grade = "f";
// }

// 5. Percabangan Ternary ?
var tanya = prompt ("Apakah Serang Ibukota Banten ?");

var jawaban = (tanya.toUpperCase() == "IYA") ? "Benar": "Salah";
document.getElementById("ternary").innerHTML = jawaban;

// // 6. Percabangan Nested
// var user = {
//     nama: "Tasya",
//     email: "tasyamunawar6@gmail.com",
//     password: "261004",
//     role: "admin"
// };

// function masuk(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     console.log(email);
//     if(user.email == email){
//         if(user.password == password){
//             if(user.role == "admin"){
//                 alert("Selamat Datang" + user.nama);
//             }
//         }else{
//             alert("Tidak Bisa Masuk");
//         }
//     }else{
//         alert("Bukan Admin !");
//     }
// }
