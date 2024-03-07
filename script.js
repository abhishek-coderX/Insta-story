var arr = [
    { dp: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D", img: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D" },
    { dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D", img: "https://plus.unsplash.com/premium_photo-1664356381529-9431be1ab66a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww" },
    { dp: "https://plus.unsplash.com/premium_photo-1674069719655-7289402d71e9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG90cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww", img: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG90cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww" },
    { dp: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG90cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww", img: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG90cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww" }

  ];
  
  var clutter = "";
  
  arr.forEach(function(val, idx) {
    clutter += `<div class="story">
      <img id="${idx}" src="${val.dp}" alt="">
    </div>`;
  });
  

  document.querySelector("#storiyan").innerHTML = clutter;
  
  var grow=0;
  document.querySelector("#storiyan")
    .addEventListener("click", function(dets) {
      document.querySelector("#full").style.display = "block";
      document.querySelector("#full").style.backgroundImage = `url(${arr[dets.target.id].img})`;
      
      setTimeout(function(){
       document.querySelector("#full").style.display ="none"

      },3000)

 if(grow<100){
       
setInterval(function(){
  document.querySelector("#growth").style.width = `${grow++}%`;
  },30)
  
 }
 else{
  grow=0;
 }

    });
  
