// CURSOR
const cur=document.getElementById('CUR');
const cur2=document.getElementById('CUR2');

let mx=0,my=0,rx=0,ry=0;

document.addEventListener('mousemove',e=>{
  mx=e.clientX;
  my=e.clientY;
  cur.style.left=mx+'px';
  cur.style.top=my+'px';
});

function loop(){
  rx+=(mx-rx)*0.1;
  ry+=(my-ry)*0.1;

  cur2.style.left=rx+'px';
  cur2.style.top=ry+'px';

  requestAnimationFrame(loop);
}
loop();


// SCROLL PROGRESS
window.addEventListener('scroll',()=>{
  const p=window.scrollY/(document.body.scrollHeight-window.innerHeight);
  document.getElementById('PROG').style.width=(p*100)+'%';
});


// SIMPLE AI MOCK (backend yo‘q bo‘lsa)
async function ai(q){
  return "This is demo AI response for: " + q;
}