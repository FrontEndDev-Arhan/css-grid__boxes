const wrapper = document.getElementsByClassName('wrapper')[0];

if (Modernizr.opacity) {
  wrapper.style.backgroundColor = 'grey';
} else {
  wrapper.style.backgroundColor = 'pink';
}
