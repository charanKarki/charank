
$(document).ready(function () {
    // navbar
    $('#navbarId').on('hide.bs.collapse ',function(){$('#navbarId').slideUp()})
    $('#navbarId').on('show.bs.collapse ',function(){$('#navbarId').slideDown()})


    window.onscroll = function(){
        

        if($('.navbar').offset().top<=50){
            $('.navbar').removeClass(' bg-light').addClass('navbar-dark')
            $('#navbarId .nav-item .nav-link ,.navbar-brand').css('color','white')

        }
        else{
            $('.navbar').addClass('navbar-light bg-light').removeClass('navbar-dark')
            $('#navbarId .nav-item .nav-link,.navbar .navbar-brand').css('color','#06BCC1')
        }
        
        
    }
    
  


        // scroll to top
        $(".scroll-to-top").click(function(){
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth'
              });
            
        })
        // aimation 




    
      var controller = new ScrollMagic.Controller()

      var scene = new ScrollMagic.Scene({
          triggerElement:   '#work',
          duration:400,

      }).setAnime(anime({
          targets:'#work .row .col-sm-12',
          translateY:[100,0],
          opacity:[0,1],
          delay:anime.stagger(200)
      })).addTo(controller)
      
   


});