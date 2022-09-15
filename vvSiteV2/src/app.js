import barba from '@barba/core';
import anime from 'animejs'
import Animations from "./animations"



const animations = new Animations

//Barba-js page transition logic 
barba.init({
    debug: true,
    transitions: [{
        name: 'Random Transition',
          async leave(data) {
            
            animations.addBubblesForAnims()

            //two working exit anims currently 
            await animations.bubbleAnimv2(data)
            // await animations.bubbleExitAnim(data)

        },

          async enter(data) {
            
            //When this animation is done properly only one should be needed 
            await animations.myAnimeEntry(data)
            
       
        }
      }]
  });

  

  //approach 

//   I want to create a stream obs looking animation for that I will use elements added via js as to not clutter
//   my page markeup so parts I will need 
//     -A way to add the necessary js to the page via js 
//     -A way to style said content ? 
//     -A Animate said content 
//     -Remove all added Js 