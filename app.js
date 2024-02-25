// Attach event listener to the login form
// document.querySelector('#login-form form').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the form from submitting

//     // Get the username and password from the form
//     const username = document.querySelector('#username').value;
//     const password = document.querySelector('#password').value;

//     // Simulate an asynchronous API request to authenticate the user
//     setTimeout(function () {
//         if (username === '1305' && password === '1305') {
//             // Authentication successful - redirect to the main page
//             window.location.href = 'home.html';
//         } else {
//             // Authentication failed - display an error message
//             alert('Invalid username or password');
//         }
//     }, 1000); // Simulate a 1-second delay to simulate API request
// });
// Attach event listener to the login form
document.querySelector('#login-form form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the username and password from the form
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Simulate an asynchronous API request to authenticate the user
    setTimeout(function () {
        if (username === 'sona' && password === 'manu') {
            // Authentication successful - redirect to the main page
            window.location.href = 'home.html';
        } else {
            // Authentication failed - display an error message
            alert('Invalid username or password');
        }
    }, 1000); // Simulate a 1-second delay to simulate API request
});
