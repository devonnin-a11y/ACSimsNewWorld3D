
function spawn(type,x,z){
 const color=type==="wood"?0x8b5a2b:type==="fiber"?0x4caf50:0xff5555;
 const mesh=new THREE.Mesh(
  new THREE.CylinderGeometry(0.3,0.4,1,6),
  new THREE.MeshStandardMaterial({color})
 );
 mesh.position.set(x,0.5,z);
 mesh.userData={type,hits:3};
 THREEWORLD.scene.add(mesh);
 state.world.objects.push(mesh);
}

for(let i=0;i<6;i++){
 spawn("wood",Math.random()*20-10,Math.random()*20-10);
 spawn("fiber",Math.random()*20-10,Math.random()*20-10);
 spawn("food",Math.random()*20-10,Math.random()*20-10);
}

window.tryGather=function(){
 state.world.objects.forEach((o,i)=>{
  const d=o.position.distanceTo(THREEWORLD.sim.position);
  if(d<1){
   o.userData.hits--;
   if(o.userData.hits<=0){
    state.sim.inventory[o.userData.type]++;
    THREEWORLD.scene.remove(o);
    state.world.objects.splice(i,1);
   }
  }
 });
};
