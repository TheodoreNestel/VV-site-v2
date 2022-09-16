import barba from '@barba/core'
import Animations from "./animations"


//instanciate out anims 
const animations = new Animations

//Barba-js page transition logic 
barba.init({
    debug: true,
    transitions: [{
        name: 'Random Transition',
          async leave(data) {
            //pick a random animation 
            let animation = animations.RandomAnimation()
            
            //adds html divs for the sake of animations
            animations.addBubblesForAnims()

            console.log("exiting")

            //play selected random animation
            await animation(data)

            console.log("exit await done")

        },

          async after(data) {

            console.log("entry")
            
            //When this animation is done properly only one should be needed 
            await animations.myAnimeEntry(data)

            console.log("entry await done")
            
       
        },
        
      }]
  });

