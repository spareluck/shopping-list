$(document).ready(function() {

	//Add new li to shopping list ul
	function appendLi() { 
		var newItem = $('.new-item').val();
		if (newItem != "") {
			$('.list-items ul').append("<li><input type='checkbox'><span>" + newItem + "</span><div class='buttons'><button title='Rename Item' class='rename'><i class='fa fa-pencil'></i></button><button title='Delete Item' class='delete'><i class='fa fa-ban'></i></button></div></li>");
			$('.new-item').val("");
		}
	}

	//Add Li when enter key is pressed
	function enterKey(e) {
		var key = e.which;
 		if(key == 13) {
    	$('.add-item').append(appendLi);
  		}
	}

	// Delete li from ul
	function deleteItem() {
		$(this).closest('li').remove();
	}

	//
	function checkedItem() {
		$(this).next('span').toggleClass('checked');
	}

	// Focus on textbox when loaded
	$('.new-item').focus();

	//Shopping Cart Add button adds new list item
	$('.add-item').on('click', appendLi);

    //If enter key is pressed, add new list item
    $('body').keypress(enterKey);

    //Delete Item from list when delete button is pressed
  	$('.main').on('click', '.delete', deleteItem);

  	//Add checked class when checkbox is clicked

  	$('.main').on('click', 'input:checkbox',checkedItem);
	
	//Rename item when pencil Icon is clicked
	$('.main').on('click','.rename', function() {
  		var newItem = prompt("Please rename item");
  		if( newItem != null && newItem != "" ) {
  			$(this).parent().siblings('span').text(newItem);
  		}
  	});
});


