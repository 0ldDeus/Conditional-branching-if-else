/*Задание №1*/

let userNumber = prompt("Введите число");
if (userNumber > 10) {
    console.log("Число больше 10");
} else {
    console.log("Число меньше или равно 10");
}

/*Задание №2*/

let userConfirmed = confirm("Вы уверены что хотите удалить файл?");

if (userConfirmed) {
    console.log("Файл удален");
} else {
    console.log("Удаление отменено");
}

/*Задание №3*/

let userAge = prompt("Введите ваш возраст");
if (userAge < 18) {
    console.log("Вы еще подросток");
} else if (userAge >= 18 && userAge <= 30) {
    console.log("Вы молодой взрослый");
} else {
    console.log("Вы взрослый");
}

/*Задание №4*/

let multiplicityOfNumber = prompt("Введите число");
let multiplicity = (multiplicityOfNumber % 2 === 0) ? "Число четное" : "Число нечетное";
console.log(multiplicity);

/*Задание №5*/

let weekDay = prompt("Введите число от 1 до 7");
let Day;
switch (weekDay) {
    case "1":
        Day = "Понедельник";
        break;
    case "2":
        Day = "Вторник";
        break;
    case "3":
        Day = "Среда";
        break;
    case "4":
        Day = "Четверг";
        break;
    case "5":
        Day = "Пятница";
        break;
    case "6":
        Day = "Суббота";
        break;
    case "7":
        Day = "Воскресенье";
        break;
    default:
        Day = "Некорректное значение"
}
console.log(Day);

/*Задание №6*/

let firstNumber = prompt("Введите первое число");
let secondNumber = prompt("Введите второе число");

if (firstNumber == secondNumber) {
  console.log("Числа равны");
} else {
  let result = (firstNumber > secondNumber) ? "Первое число больше" : "Второе число больше";
  console.log(result);
}

/*Дополнительное задание*/

let numberOfSeason = prompt("Введите число от 1 до 12");
let season;
switch (numberOfSeason) {
    case "1":
        season = "Январь";
        break;
    case "2":
        season = "Февраль";
        break;
    case "3":
        season = "Март";
        break;
    case "4":
        season = "Апрель";
        break;
    case "5":
        season = "Май";
        break;
    case "6":
        season = "Июнь";
        break;
    case "7":
        season = "Июль";
        break;
            case "8":
        season = "Август";
        break;
    case "9":
        season = "Сентябрь";
        break;
            case "10":
        season = "Октябрь";
        break;
    case "11":
        season = "Ноябрь";
        break;
            case "12":
        season = "Декабрь";
        break;
    default:
        season = "Некорректное значение"
        
}
console.log(season);