
function loop(){
 const s=state.sim;
 if(keys.ArrowUp) s.pos.z-=s.speed;
 if(keys.ArrowDown) s.pos.z+=s.speed;
 if(keys.ArrowLeft) s.pos.x-=s.speed;
 if(keys.ArrowRight) s.pos.x+=s.speed;

 THREEWORLD.sim.position.set(s.pos.x,1+Math.sin(s.anim)*0.05,s.pos.z);
 s.anim+=0.1;

 if(state.camera.follow){
  THREEWORLD.camera.position.x=s.pos.x;
  THREEWORLD.camera.position.z=s.pos.z+8;
  THREEWORLD.camera.lookAt(THREEWORLD.sim.position);
 }

 tryGather();
 THREEWORLD.renderer.render(THREEWORLD.scene,THREEWORLD.camera);
 requestAnimationFrame(loop);
}
loop();
