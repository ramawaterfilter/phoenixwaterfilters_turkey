// jQuery_T4NT(document).ready(function($) {

//      /**
//      *  Variant selection changed
//      *  data-variant-toggle="{{ variant.id }}"
//      */
// 	   $( document ).on( "variant:changed", function( evt ) {
// 	     // console.log( evt.currentVariant );
// 	     // $('[data-variant-toggle]').hide(0);
// 	     // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
// 	   });

// });
jQuery_T4NT(document).ready(function($) {

     /**
     *  Variant selection changed
     *  data-variant-toggle="{{ variant.id }}"
     */
	   $( document ).on( "variant:changed", function( evt ) {
	     // console.log( evt.currentVariant );
	     // $('[data-variant-toggle]').hide(0);
	     // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
	   });

  document.addEventListner('cart:refresh:opend', function(evt){
    getToFetch(true);
    alert('aa');
  });

});