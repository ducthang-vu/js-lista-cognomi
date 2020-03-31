/* 
 A script accepting multiple strings by user, adding them to an existing list of strings, and printing all element of the list alphabetically; provided that the first letter of sush strings is uppercase or corrected to uppercase. 
 */


console.log('main.js is working')

// global variables
var surnames = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi']
var add_button = document.getElementById('add-button')
var new_list_button = document.getElementById('new-list-button')
var table_body =  document.getElementById('table-body')
var message = document.getElementById('admin-msg')


// FUNCTIONS



add_button.addEventListener('click',
    function() {
        var user_input = document.getElementById('new-surname').value.trim()
        var new_surname 

        if ((user_input) && isNaN(user_input)) {
            new_surname = user_input.charAt(0).toUpperCase() + user_input.slice(1)
            surnames.push(new_surname)
            message.innerHTML = '"' + new_surname + '" added. You can add a new surname.'
            message.className = ' green-color'
        }

        else {
            message.className = ' red-color'
            message.innerHTML = 'You cannot enter a empty string or a number. You can add a new surname.'
        }


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

        var new_content = ''

        for (i = 0; i < output.length; i++) {
           new_content += '<tr><td>' + output[i][0] + '</td><td>'  + output[i][1] + '</td></tr>'
        }

        table_body.innerHTML = new_content

        message.innerHTML = 'List created. You can add new surnames and create a new list.'
        message.className = ' green-text'
    }
)