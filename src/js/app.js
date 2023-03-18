'use strict';
// -------------------------------------------
const $ = document,
  btn = $.querySelector('button');
// ------------------------------------------
function changeUser({ name, location, phone, picture }) {
  $.querySelector('.phone').textContent = phone;
  $.querySelector('.location').textContent = location.country;
  $.querySelector(
    '.username'
  ).textContent = `${name.title}.${name.first} ${name.last}`;
  $.querySelector('#profile_img').src = picture.large;
}
// changing user info by clicking the button
btn.addEventListener('click', function () {
  fetch('https://randomuser.me/api/')
    .then((response) => {
      if (response.status === 200) return response.json();
      return new Error('error fetching data :(');
    })
    .then((data) => {
      let newUser = data.results.at(0);
      changeUser(newUser);
    });
});