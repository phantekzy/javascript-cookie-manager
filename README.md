🍪 JavaScript Cookie Manager
This project provides two essential utility functions in JavaScript to set and get browser cookies. It's a small, practical snippet aimed at helping beginners understand how cookies work in the frontend and how to manage simple data persistence in web applications.

🚀 Features
Set cookies with an expiration date.

Retrieve cookies by name.

Safe encoding/decoding of values.

Graceful fallback when a cookie doesn't exist.

Code Overview
getCookies(name)
Retrieves the value of a cookie by its name.

/**
 * @param {String} name
 * @returns {String|null}
 */
function getCookies(name) {
    const cookies = document.cookie.split('; ')
    const value = cookies
        .find(c => c.startsWith(name + '='))
        ?.split('=')[1]
    
    if (value === undefined) {
        return null
    }

    return decodeURIComponent(value)
}

setCookies(name, value, days)
Sets a cookie with a given name, value, and expiration (in days).

/**
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
function setCookies(name, value, days) {
    const date = new Date()
    date.setDate(date.getDate() + days)

    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}`
}

💡 Example Usage

// Set a cookie named 'user' with the value 'Lotfi' that expires in 7 days
setCookies('user', 'Lotfi', 7)

// Get the value of the 'user' cookie
const username = getCookies('user')
console.log(username) // Output: 'Lotfi'

📚 What You'll Learn
How to work with document.cookie in JavaScript.

How to parse cookies from the browser.

How to handle encoding and decoding.

How to use JavaScript's Date object.

How to write clean, modular, and readable functions.


🛠️ Future Improvements
Add support for secure cookies (Secure and SameSite).

Add support for path and domain attributes.

Add a function to delete cookies.

Convert the utilities to an ES6 class or reusable module.

📄 License
MIT – free to use, share, and modify!

✨ Author
Maini Lotfi Abdelkader
Learning and building cool stuff with JavaScript 🍀
