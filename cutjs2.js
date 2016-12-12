$( document ).ready(function() {
    console.log( "ready" );
    
    
    $('.image-toggler').click(function(){
		$('.image-toggle').hide();
		$($(this).attr('data-image-id')).show();
	});
    
    
    var add = document.getElementById("add-cart")
    
    
    add.onclick = function(){
        var value = parseInt($(".badge").text(), 10) + 1;
        $(".badge").text(value);
    }
});