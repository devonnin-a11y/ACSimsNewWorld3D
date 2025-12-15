
const keys={};
addEventListener("keydown",e=>keys[e.key]=true);
addEventListener("keyup",e=>keys[e.key]=false);

window.move=dir=>{
 keys[dir==="up"?"ArrowUp":dir==="down"?"ArrowDown":dir==="left"?"ArrowLeft":"ArrowRight"]=true;
 setTimeout(()=>Object.keys(keys).forEach(k=>keys[k]=false),120);
};

window.refocusCamera=()=>state.camera.follow=true;
window.togglePhone=()=>{
 const p=document.getElementById("phone");
 p.style.display=p.style.display==="flex"?"none":"flex";
};
