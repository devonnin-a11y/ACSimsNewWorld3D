
window.toggleCrafting=function(){
 const el=document.getElementById("crafting");
 el.style.display=el.style.display==="block"?"none":"block";
 renderCrafting();
};
function renderCrafting(){
 const i=state.sim.inventory;
 document.getElementById("crafting").innerHTML=`
 <b>Crafting</b><br>
 <button onclick="craft('axe')">🪓 Axe (2 Wood)</button>
 `;
}
window.craft=function(item){
 if(item==="axe" && state.sim.inventory.wood>=2){
  state.sim.inventory.wood-=2;
  alert("Crafted Axe!");
 }
};
