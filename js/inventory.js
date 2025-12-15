
window.toggleInventory=function(){
 const el=document.getElementById("inventory");
 el.style.display=el.style.display==="block"?"none":"block";
 renderInventory();
};
function renderInventory(){
 const i=state.sim.inventory;
 document.getElementById("inventory").innerHTML=`
 <b>Inventory</b><br>
 🪵 Wood: ${i.wood}<br>
 🌾 Fiber: ${i.fiber}<br>
 🍎 Food: ${i.food}
 `;
}
