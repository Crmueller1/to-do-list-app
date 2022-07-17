// Adding new item to list

function newItem() {

    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('You must write something!!');
    } else {
        $('#list').append(li);
    }
    // Crossing out item from list

    function crossOut() {
        li.toggleClass('strike');
    }

    li.on('dblclick', function crossOut() {
        li.toggleClass('strike');
    });

    // Adding delete button x

    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    // Connecting CSS Display: NONE to Delete class. 

    crossOutButton.on('click', deletelistItem);

    function deletelistItem() {
        li.addClass('delete')
    }
    // adding the manual ordering of list items

    $('#list').sortable();

}