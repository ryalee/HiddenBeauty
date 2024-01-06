const button = document.getElementsByClassName('formButton');

button.addEventListener('mousemove', function (e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty('--x', `${x}px`);
    button.style.setProperty('--y', `${y}px`);
});