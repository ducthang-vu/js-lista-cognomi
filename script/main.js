/* 
 A script accepting multiple strings by user, adding them to an existing list of strings, and printing all elements of the list alphabetically; provided that the first letter of sush strings is uppercase or corrected to uppercase. 
 */


console.log('main.js is working')

var surnames = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi']
var add_button = document.getElementById('add-button')
var new_list_button = document.getElementById('new-list-button')
var table_body =  document.getElementById('table-body')
var message = document.getElementById('admin-msg')


// FUNCTIONS
function formatting_surnames(text) {
    // A function accepting a string, and returning a string with the first letter capitalized and others unmodified.
    return text.charAt(0).toUpperCase() + text.slice(1)
}


function send_AdminMessage(text_array) {
    // A fuction accepting an array [('error' || 'success' || 'normal'), text], and printing the text on #admin-msg element, and applying relevant class

    if (text_array[0] == 'error') {
        message.className = ' red-color'
    } else if (text_array[0] == 'success') {
        message.className = ' green-color'
    }  
    else {
        message.className = ''
    }

    message.innerHTML = text_array[1]
}



// EVENTS
add_button.addEventListener('click',
    function() {
        var user_input = document.getElementById('new-surname').value.trim()
        var new_surname 
        var text_to_user = []

        if ((user_input) && isNaN(user_input)) {
            new_surname = formatting_surnames(user_input)
            surnames.push(new_surname)

            text_to_user = ['success', '"' + new_surname + '" added. You can add a new surname.']
        }

        else {
            text_to_user = ['error', 'You cannot enter a empty string or a number. You can add a new surname.']
        }

        // Message to user
        send_AdminMessage( text_to_user)

        // resetting form-box
        document.getElementById('new-surname').value = ''
        document.getElementById('new-surname').focus
    }
)


new_list_button.addEventListener('click', 
    function() {
        /* A fuction sorting alphabetically all surnames and associating each of them with its ordinal number, and for builting a table and sending message to user */
        var output = []
        var new_content = ''

        // Sorting alphabetically all surnames and associating each of them with its ordinal number
        surnames.sort()
        for (i = 0; i < surnames.length; i++) {
            output[i] = [(i + 1), surnames[i]]
        }

        // Building table
        for (i = 0; i < output.length; i++) {
           new_content += '<tr><td>' + output[i][0] + '</td><td>'  + output[i][1] + '</td></tr>'
        }
        table_body.innerHTML = new_content

        // Message to user
        send_AdminMessage(['success', 'List created. You can add new surnames and create a new list.'])
    }
)
