import{l,o as r,c as s,a6 as d}from"./framework.BQjydDc4.js";const i={class:"canvas-example"},_={__name:"rect",setup(p){const{proxy:n}=d();return l(()=>{const o=document.createElement("canvas");o.width=640,o.height=200,n.$el.appendChild(o);const e=o.getContext("2d");let t=e.createRadialGradient(100,100,0,100,100,100);t.addColorStop(0,"red"),t.addColorStop(1,"green"),e.fillStyle=t,e.fillRect(0,0,200,200),t=e.createConicGradient(-45*(Math.PI/180),100+220,100),t.addColorStop(0,"red"),t.addColorStop(.5,"skyblue"),t.addColorStop(1,"red"),e.fillStyle=t,e.fillRect(220,0,200,200);const a=new Image;a.src="../../../images/notes/canvas/01.png",a.onload=function(){const c=e.createPattern(a,"repeat");e.fillStyle=c,e.fillRect(440,0,200,200)}}),(o,e)=>(r(),s("div",i))}};export{_ as default};
