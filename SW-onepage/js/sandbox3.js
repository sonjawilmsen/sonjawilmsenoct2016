jQuery(document).ready(function() {
   console.log("ready");

   var imageUrls = [
      'http://goldenagegems.com/sitebuildercontent/sitebuilderpictures/l88corvette.jpg',
      'http://previews.123rf.com/images/6thgear/6thgear0904/6thgear090400005/4724372-New-American-Muscle-Car-Stock-Photo-car-sports.jpg',
      'http://alternativeinvestmentcoach.com/wp-content/uploads/2016/01/American-Muscle-Car-HD-images-8-AMB-660x330.jpg'
   ];

   function initialize() {

      var thumbsContainerElem = $( "div#thumbs" );

      for ( i = 0; i < imageUrls.length; i++ ) {

         var thumbImgElem = $( "<img/>" )
            .addClass( 'thumb' )
            .attr( 'id', "thumb" + i )
            .attr( 'src', imageUrls[i] )
            .data( 'index', i );


         thumbsContainerElem.append( thumbImgElem );
         thumbImgElem.bind( 'click', selectPic );
      }

     }

   initialize();

   function selectPic() {
      var thumbImgElem = $( this );

      i = thumbImgElem.data( 'index' );

      $( "img#pic" ).attr( 'src', imageUrls[i] );

      console.log( "Select " + thumbImgElem.attr( 'id' ) );
   }

});
