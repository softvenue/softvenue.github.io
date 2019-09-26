$(document).ready(function(){
    var classList = document.getElementById('hero').className.split(/\s+/);
    for (var i = 0; i < classList.length; i++) {
        if (classList[i] == 'is-main') {
          $(".banner").css({
                      "height": "100vh",
          });
        }else{
          $(".banner").css({
            "height": "75vh"
          });
        }
    }
  
    // Fix navbar issue
  
    $('.category-card-columns .card').click(function(){
      window.location.href=$(this).data('link');
    });
    $('.card').each(function(){
      var cardBgUrl = $(this).data('image');
      var filename = cardBgUrl.split('/');
      filename = filename[filename.length - 1];
      if(cardBgUrl !== '' && filename !=="default.png"){
          $(this).css({
              "backgroundImage": "url("+cardBgUrl+")",
              "backgroundSize": "cover"
          });  
          $(this).addClass('bg-is-image');
          $(this).find('.category-card-blockquote').css({"visibility": "hidden"});
      }else{
          $(this).addClass('bg-primary-gradient');
          $(this).find('.category-card-blockquote').css({
              "visibility": "visible"
          });
      }
    });
  // Dropdown menu fix
  $('.dropdown .nav-link[data-toggle=dropdown]').addClass("dropdown-toggle");
  
  // Footer 
  $('.footer a.nav-link').each(function(){
        $(this).removeClass('nav-link');
  });
  
  // more-card
  
  $('.more-card').click(function(){
        window.location.href=$(this).data('link');
  })
  $('.card-excerpt').each(function(){
      $(this).text($(this).text().split(' ').slice(0,5).join(' ')).append('...'); 
  });
  
  // Parallax 
  var controller = new ScrollMagic.Controller();
  
  new ScrollMagic.Scene({
      triggerElement: "#quote",
      triggerHook: "onEnter"
  })
  .duration("600%")
  .setTween("#quote", {
      backgroundPosition: "50% 100%",
      ease: Linear.easeNone
  }).addTo(controller);
  
  // Contact form
  $('#budget').change(function(){
      $('#budget-display').html("<br>"+$(this).val()+" DZA");
  });
  // Sticky elements with scrollmagic
  $('#launchmodal').click(function(){
      $('#exampleModal').modal();
  });
  // Owl carousel
  $(".owl-carousel").owlCarousel({
      margin:15,
      loop:false,
      autoWidth:true,
      items:5
  });
  // Particles.js
  particlesJS("hero",{
      particles: {
          number: {
              value: 80,
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          color: {
              value: '#ffffff'
          },
          shape: {
              type: 'circle',
              stroke: {
                  width: 0,
                  color: '#000000'
              },
              polygon: {
                  nb_sides: 5
              },
              image: {
                  src: 'img/github.svg',
                  width: 100,
                  height: 100
              }
          },
          opacity: {
              value: 0.3,
              random: true,
              anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.05,
                  sync: false
              }
          },
          size: {
              value: 3,
              random: true,
              anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
              }
          },
          line_linked: {
              enable: false
          },
          move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200
              }
          }
      },
      interactivity: {
          detect_on: 'canvas',
          events: {
              onhover: {
                  enable: false,
                  mode: 'repulse'
              },
              onclick: {
                  enable: false,
                  mode: 'push'
              },
              resize: true
          },
          modes: {
              grab: {
                  distance: 400,
                  line_linked: {
                  opacity: 1
                  }
              },
              bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3
              },
              repulse: {
                  distance: 200,
                  duration: 0.4
              },
              push: {
                  particles_nb: 4
              },
              remove: {
                  particles_nb: 2
              }
          }
      },
      retina_detect: true
      })
  });
  
  var cpbtn = document.getElementById('copyField');
  if(cpbtn){
      cpbtn.addEventListener('click', function(){
          /* Get the text field */
              var copyText = document.getElementById("copyText");
          
              /* Select the text field */
              copyText.select();
          
              /* Copy the text inside the text field */
              document.execCommand("copy");
          
              // Show message
              document.getElementById('copy-message').innerText = "Lien copiÃ© !";
              setTimeout(function(){
                  document.getElementById('copy-message').innerText = "";
              }, 3000);
      });
  }
  document.querySelectorAll('.modal-circle').onclick= function(){
      window.open(this.childNodes.href, 'mywin','left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); 
      return false;
  }