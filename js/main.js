function myFirstApp(name, age) {
    name = prompt('Как Вас зовут?');
    age = prompt('Какой Ваш возраст?');

  alert('Приветствую - ' + name + ', меня зовут Влад и Вы в моей математической программе!');

  function showSkills() {
    let skills = [
        'О себе: <br>',
        'Уверенное знание HTML <br>',
        'Умение применять CSS <br>',
        'Опытный пользователь калькулятора <br>',
        'Умею нажимать F12 в браузере Chrome в системе Windows'
    ];

    for (let i = 0; i < skills.length; i++) {
      document.write(skills[i]);
    }
  }
  showSkills();

  function cheackAge() {
    if (age > 18) {
      alert('Вы старше 18 лет, поэтому сейчас мы с Вами выполним матечатическую операцию! Готовы?');
    } else {
      alert('Вам нету 18 лет, но мы с Вами всеравно выполним матечатическую операцию!');
    }
  }
  cheackAge();

  function calcPow(num) {
      alert(num * num);
  }
  calcPow(prompt('Давайте возведем в квадрат любое число, введите его ниже:'));
}

myFirstApp();
