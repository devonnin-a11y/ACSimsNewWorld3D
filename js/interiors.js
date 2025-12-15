
window.toggleHouse=function(){
 state.sim.inside=!state.sim.inside;
 if(state.sim.inside){
  THREEWORLD.scene.background=new THREE.Color(0xddd2b4);
  THREEWORLD.house.visible=false;
 }else{
  THREEWORLD.scene.background=new THREE.Color(0x87ceeb);
  THREEWORLD.house.visible=true;
 }
};
