document.addEventListener('DOMContentLoaded', function () {
    const greetingEl = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();

    let greeting = '';

    if (hour < 12) {
        greeting = 'Good morning!';
    } else if (hour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    greetingEl.textContent = greeting;
});
