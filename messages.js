// let showChatli=document.querySelector(".chat-person")   //chat-person ul li  Jennifer-Winged -------------> wark on event bubling
//     console.log(showChatli)
//     showChatli.addEventListener("click",function(){

//           let flexbox=document.querySelector(".chat-massage")       // main div
//           console.log(flexbox)
//               flexbox.classList.toggle('make-grid-two')
//               flexbox.style.gap="20px";
        
//           let messageShow=document.querySelector(".Messages-chat") //Messages-chat hide
//               console.log(messageShow)
//                messageShow.classList.toggle("show")
                  
             
//     })

// let showChatli=document.querySelectorAll(".Jennifer-Winged")          ----------------->for each           
//     showChatli.forEach(function(item,i){
//         item.addEventListener('click',()=>{
           
//             let flexbox=document.querySelector(".chat-massage")       // main div
//                          console.log(flexbox)
//                           flexbox.classList.toggle('make-grid-two')
//                           flexbox.style.gap="20px";

//           let messageShow=document.querySelector(".Messages-chat") //Messages-chat hide
//                       console.log(messageShow)
//                        messageShow.classList.toggle("show")
//         })
//     })

    // let showChatli=document.querySelectorAll(".chat-person")  
    //     showChatli.addEventListener("click",function(e){
    //         console.log(e.toggle.tagName)
    //     })


let showChatli=document.querySelector(".chat-person")   //chat-person ul li  Jennifer-Winged      //---------->wark on th event deligation
    showChatli.addEventListener("click",function(e){
          console.log(e.target.tagName)
          console.log(e.target.classList.contains)

          if(e.target.tagName ==="DIV" && e.target.classList.contains("Jennifer-Winged") )
          {  let flexbox=document.querySelector(".chat-massage")       // main div
                flexbox.classList.toggle('make-grid-two')
                flexbox.style.gap="20px";
          
            let messageShow=document.querySelector(".Messages-chat") //Messages-chat hide
             
                 messageShow.classList.toggle("show")}        
    })