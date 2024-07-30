let Successful_show=document.querySelector(".Proceed-to-Pay")
console.log(Successful_show)
     Successful_show.addEventListener("click",function(){
          console.log('this')
          let hide_show=document.querySelector (".Successful")
          hide_show.classList.toggle("show")                 
     })
     
     
     let stops=document.querySelector(".box-close")  
     console.log(stops)
     stops.addEventListener("click",function(){
          console.log('this')
          let hide_show=document.querySelector(".Successful")
                    hide_show.classList.toggle("show")
                    // hide_show.classList.remove("show")
                    // hide_show.classList.add("hide")
    })

// ------------------------------------------------------------------------------------------


 