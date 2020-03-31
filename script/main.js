/* 
 A script accepting multiple strings by user, adding them to an existing list of strings, and printing all elements of the list alphabetically; provided that the first letter of sush strings is uppercase or corrected to uppercase. 
 */


console.log('main.js is working')

var surnames = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi']
var add_button = document.getElementById('add-button')
var new_list_button = document.getElementById('new-list-button')
var get_index_button = document.getElementById('index-button')
var table_body =  document.getElementById('table-body')
var message = document.getElementById('admin-msg')



// FUNCTIONS
function building_table_orderItem(array, table) {
    // A function accepting an array and a element table-body, and building 2-cells rows (index-position, item) from the array

    var new_content = ''
    for (i = 0; i < array.length; i++) {
        new_content += '<tr><td>' + i + '</td><td>'  + array[i] + '</td></tr>'
    }
    table.innerHTML = new_content  
    console.log('building_table_orderItem function used.')
}


function formatting_surnames(text) {
    // A function accepting a string, and returning the same string, the first letter being capitalized and the others unmodified. Return -1 if: input is of type number, or empty.
    if ((text) && isNaN(text)) {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }
    else {
        return -1
    }
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
    console.table(text_array)
}


function resetting_input_with_focus(input_element) {
    // A fuction accepting a input element and assigning value: '', and giving focuc on said input
    document.getElementById(input_element).value = ''
    document.getElementById(input_element).focus()
}




// ON PAGE LOAD
surnames.sort()
building_table_orderItem(surnames, table_body)




// EVENTS
add_button.addEventListener('click',
    function() {
        var user_input = document.getElementById('new-surname').value.trim()
        var text_to_user = []
        

        // formatting surname adding to list "surnames" if valid
        var new_surname = formatting_surnames(user_input)
        if (new_surname != -1) {
            surnames.push(new_surname)

            // Sorting alphabetically all surnames 
            surnames.sort()

            // Builting table
            building_table_orderItem(surnames, table_body)

            text_to_user = ['success', '"' + new_surname + '" added in index-position: ' + surnames.indexOf(new_surname) +'. You can add a new surname, or look for the index position of any surname']
        }
        else {
            text_to_user = ['error', 'You cannot enter an empty string or a number. You can add a new surname, or look for the index position of any surname']
        }


        // Message to user and resetting form-box
        send_AdminMessage( text_to_user)
        resetting_input_with_focus('new-surname')
    }
)


get_index_button.addEventListener('click', 
    function() {
        /* A fuction returning index position of surname in the list*/
        var user_input = document.getElementById('new-surname').value.trim()
        var text_to_user = []

        if (surnames.indexOf(user_input) >= 0) {
            text_to_user = ['normal', '"' + user_input + '" is a surname with index-value: ' + surnames.indexOf(user_input) +'.']
        }
        else {
            text_to_user = ['error', '"' + user_input + '" not found, try again or add a new surname.']
        }


        // Message to user and resetting form-box
        send_AdminMessage(text_to_user)
        resetting_input_with_focus('new-surname')
    }
)