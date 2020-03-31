/* 
 A script accepting multiple strings by user, adding them to an existing list of strings, and printing all element of the list alphabetically; provided that the first letter of sush strings is uppercase or corrected to uppercase. 
 */


console.log('main.js is working')

var surnames = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi']
var add_button = document.getElementById('add-button')
var new_list_button = document.getElementById('new-list-button')

add_button.addEventListener('click',
    function() {
        var user_input = document.getElementById('new-surname').value
        if (user_input) {
            new_surname = user_input.charAt(0).toUpperCase() + user_input.slice(1)
            surnames.push(new_surname)
        }
        else 
            console.log('You cannot enter a empty string')

        // resetting form-box
        document.getElementById('new-surname').value = ''
        document.getElementById('new-surname').focus
    }
)

new_list_button.addEventListener('click', 
    function() {
        surnames.sort()
        console.table(surnames)

        var output = []
        for (i = 0; i < surnames.length; i++) {
            output[i] = [(i + 1), surnames[i]]
        }

        console.log(output)
    }
)