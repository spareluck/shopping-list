$(document).ready(function() {
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
	$('.main').on('click','.rename' , function() {
  		var newItem = prompt("Please rename item");
  		if( newItem != null || newItem == "" ) {
  			$(this).siblings('span').text(newItem);
  		}
  	});
});
	
  	 

//Add new li to shopping list ul
function appendLi() {
	var newItem = $('.new-item').val();
	$('.list-items ul').append("<li><input type='checkbox'><span>" + newItem + "</span>\
								<button title='Delete Item' class='delete'>\
								<i class='fa fa-ban'></i></button>\
								<button title='Rename Item' class='rename'>\
								<i class='fa fa-pencil'></i></button></li>");
	$('.new-item').val("");
}
function enterKey(e) {
	var key = e.which;
 		if(key == 13) {
    		$('.add-item').append(appendLi);
  		}
}
function deleteItem() {
	$(this).closest('li').remove();
}
function checkedItem() {
	$(this).next('span').toggleClass('checked');
}


// Normal li
//<li><input type="checkbox"><span>Cheese</span>
//<button title="Delete Item" class="delete">
//<i class="fa fa-ban"></i></button>
//<button title="Rename Item" class="rename">
//<i class="fa fa-pencil"></i></button></li>

//Checked li				
//<li><input type="checkbox"><span class="checked">Kale</span>
//<button title="Delete Item" class="delete">
//<i class="fa fa-ban"></i></button>
//<button title="Rename Item" class="rename">
//<i class="fa fa-pencil"></i></button></li>