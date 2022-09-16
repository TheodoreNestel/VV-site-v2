import anime from 'animejs'

//DomElement querySelections
const nav = document.querySelector(".nav")
//--


//store all animations / supporting functions in one class to keep things organized
class Animations {

    hideNav = ()=>{
        let timeline = anime.timeline({
            duration : "2000",
            ease : "linear"
    
        }).add({
            targets : nav,
            translateX : "800px"
        }).add({
            targets : nav,
            translateX : "0"
        })

        return timeline.finished
    }

    myAnimeEntry = (data)=>{
        let timeline = anime.timeline({
            duration : 400,
            easing : "easeOutQuint",
        }).add({
            targets : ".orb4",
            scale : 0,
            changeComplete : ()=>{
                let bubble = document.getElementsByClassName(`orb4`)
                bubble[0].remove();
            }
        })
        
        return timeline.finished
    }


    //this leaves nothing but a black background
    bubbleExitAnim = (data)=>{
        let timeline = anime.timeline({
            duration : 700,
            easing : "easeOutCirc",
        }).add({
            targets : ".orb0",
            backgroundColor : "rgba(254, 250, 164, 1)",
            scale : 180,
           
        }).add({
            targets : ".orb1",
            backgroundColor : "#000000",
            scale : 180,
            
            
        },'-=400').add({
            targets : ".orb2",
            backgroundColor : "rgba(246, 145, 75, 1)",
            scale : 180,
            
        },'-=400')
        .add({
            targets : ".orb3",
            backgroundColor : "#000000",
            scale : 180,
            
        },'-=400').add({
            targets : ".orb4",
            backgroundColor : "rgb(96, 60, 105)",
            scale : 180,
        },'-=400').add({
            targets : ".orb4",
            changeComplete : ()=>{
                let bubble0 = document.getElementsByClassName(`orb0`)
                let bubble1 = document.getElementsByClassName(`orb1`)
                let bubble2 = document.getElementsByClassName(`orb2`)
                let bubble3 = document.getElementsByClassName(`orb3`)
                bubble0[0].remove();
                bubble1[0].remove();
                bubble2[0].remove();
                bubble3[0].remove();
            },
            })

        return timeline.finished
    }

    bubbleAnimv2 = (data)=>{
        let timeline = anime.timeline({
            duration : 260,
            easing : "easeInOutBack",
        }).add({
            targets : ".orb0",
            backgroundColor : "rgba(254, 250, 164, 1)",
            translateX : "25vw",
            translateY : "-25vh",
            scale : 90,
        }).add({
            targets : ".orb1",
            backgroundColor : "rgba(246, 145, 75, 1)",
            translateX : "-25vw",
            translateY : "25vh",
            scale : 90,
        }).add({
            targets : ".orb2",
            backgroundColor : "rgb(96, 60, 105)",
            translateX : "-25vw",
            translateY : "-25vh",
            scale : 90,
        }).add({
            targets : ".orb3",
            backgroundColor : "rgba(254, 250, 164, 1)",
            translateX : "25vw",
            translateY : "25vh",
            scale : 90,
        }).add({
            targets : ".orb4",
            backgroundColor : "rgba(246, 145, 75, 1)",
            scale : 180,
        }).add({
            changeComplete : ()=>{
                let bubble0 = document.getElementsByClassName(`orb0`)
                let bubble1 = document.getElementsByClassName(`orb1`)
                let bubble2 = document.getElementsByClassName(`orb2`)
                let bubble3 = document.getElementsByClassName(`orb3`)
                bubble0[0].remove();
                bubble1[0].remove();
                bubble2[0].remove();
                bubble3[0].remove();
            }
        })

        return timeline.finished
    }

    // Animv3 = (data)=>{
    //     let timeline = anime.timeline({
    //         duration : 260,
    //         easing : "easeInOutBack",
    //     }).add({
            
    //     })
    // }
    
    addBubblesForAnims = ()=>{
        //we add some html that we will use to animate
        document.querySelector(".bubbleContainer").innerHTML += `

                <div style="border-radius:50%;position:fixed;top:50%;left:50%;z-index:1001;height:1rem;width:1rem;" class="orb0"></div>
                <div style="border-radius:50%;position:fixed;top:50%;left:50%;z-index:1002;height:1rem;width:1rem;" class="orb1"></div>
                <div style="border-radius:50%;position:fixed;top:50%;left:50%;z-index:1003;height:1rem;width:1rem;" class="orb2"></div>
                <div style="border-radius:50%;position:fixed;top:50%;left:50%;z-index:1004;height:1rem;width:1rem;" class="orb3"></div>
                <div style="border-radius:50%;position:fixed;top:50%;left:50%;z-index:1005;height:1rem;width:1rem;" class="orb4"></div>
        `
    }
    

    RandomAnimation = ()=>{
        const Allanimations = [this.bubbleAnimv2 , this.bubbleExitAnim]
        return Allanimations[Math.floor(Math.random()*Allanimations.length)];
    }

}

export default Animations