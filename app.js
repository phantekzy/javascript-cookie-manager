/**
 * 
 * @param {String} name 
 *       @returns {String|null}
 */
function getCookies(name){
    const cookies = document.cookie.split('; ')
        const value = cookies
            .find(c => c.startsWith(name + '='))
                ?.split('=')[1]
                    if(value === undefined){
                        return null
                    }
                             return decodeURIComponent(value)
}

/**
 * 
 * @param {String} name 
*       @param {String} value 
*            @param {Number} days 
 */
function setCookies(name , value , days){
    const date = new Date()
        date.setDate(date.getDate() + days)
             document.cookie = `${name} = ${encodeURIComponent(value)} ; expires = ${date.toUTCString()}`
}


