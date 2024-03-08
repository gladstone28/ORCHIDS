// Example of simple JS for interactivity (e.g., logging image names on click)
document.querySelectorAll('.image').forEach(item => {
  item.addEventListener('click', event => {
    console.log(item.querySelector('p').textContent);
  });
});
