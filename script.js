let age = prompt(" შეიყვანეთ თქვენი ასაკი");
if (age < 10) {
  alert(" ბილეთის ფასი 5ლ");
} else if (age > 10 && age < 65) {
  alert("ბილეთის ფასია 15ლ");
} else if (age > 65) {
  alert("ბილეთის ფასია 10ლ");
}

let movie = prompt("შეიყვანეთ ფილმის ტიპი");
if (movie === "3D") {
  alert("ბილეთის ფასს +5ლ");
}

let time = prompt("შეიყვანეთ დროის მონაკვეთი");

if (time === "საღამო") {
  alert("ბილეთის ფასს +5ლ");
}
alert("ბილეთის ფასი თქვენთვის არის 25ლ");

let discount = prompt("გაქვთ ფასდაკლების ბილეთი?");

if ((discount = "კი")) {
  alert("ბილეთის ფასს დააკლდება 5ლ");
}
