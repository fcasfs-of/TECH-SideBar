  var initSidebar_stg = document.createElement("style");
initSidebar_stg.innerHTML='      :root {      --transition-speed: 0.4s;      --transition-curve: cubic-bezier(0.4, 0, 0.2, 1);    }   .sidebar_scroll{  overflow:hidden;  }    .sidebar_al{  display: flex;    flex-direction: row;    flex-wrap: nowrap;    align-items: center;    justify-content: center;    align-content: center;  }       .sidebar_al svg {  margin-right: 8px;   }    .sidebar {   user-select:none;    position: fixed; top: 0;  bottom: 0;    width: 320px;  z-index: 999999;    transition: var(--transition-speed) var(--transition-curve);    box-shadow: 15px 0 35px rgba(0,0,0,0.1);    overflow:auto;  }   .sidebar.fullscreen{   left:0;   top: 0;  bottom: 0;    right:0;    height:100%; width:100%;  }  .sidebar.left{   left:0;   top: 0;  bottom: 0;    border-right: 2px solid #000;    }    .sidebar.right{    border-left: 2px solid #000;    right:0;  top: 0;  bottom: 0;  }    .sidebar.center{  border: 2px solid #000;   top: 50%;    left: 50%;    transform: translate(-50%, -50%);   width: 90%;    height: 70%;   }    .sidebar-closed {  display:none;   }   .left.sidebar-closed { transform: translateX(-105%); }   .right.sidebar-closed { transform: translateX(105%); }     .fullscreen.sidebar-closed, .center.sidebar-closed {   display:none;  }   .sidebar-nav, .sidebar-nav .nav-item {  padding:6px;  }    .sidebar-inner { height: 100%; display: flex; flex-direction: column; }   .theme-light .sidebar-nav svg {  fill: #000;  }   .theme-dark .sidebar-nav svg {  fill: #fff;  }   .theme-light { background: #ffffff; color: #1e293b; --accent: #4f46e5; --muted: #64748b; --hover: #f1f5f9; }   .theme-dark { background: #0f172a; color: #f8fafc; --accent: #818cf8; --muted: #94a3b8; --hover: #1e293b; }    .sidebar-header {       padding: 30px 20px; display: flex; justify-content: space-between; align-items: center;    }  .brand { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 1.2rem; }   .brand-logo { background: var(--accent); color: white; padding: 4px 10px; border-radius: 8px; }    .brand-logo svg {  position: relative;    top: 3px;  }   .nav-item {    display: flex; align-items: center; gap: 16px;    padding: 14px 20px; margin: 4px 15px; border-radius: 12px;    transition: 0.3s;    overflow:auto;    }     .nav-item.is-clickable { cursor: pointer; }   .nav-item.is-clickable:hover { background: var(--hover); }    .nav-item.is-clickable:hover svg { fill: var(--accent); }   .nav-item.is-clickable:hover .item-title { color: var(--accent); }    .nav-item.not-clickable {    cursor: default; opacity: 0.6; margin-top: 25px; pointer-events: none;     }     .item-icon { color: var(--accent); display: flex; align-items: center; }    .item-content { display: flex; flex-direction: column;  width:100%;   }    .item-title { font-weight: 600; font-size: 0.95rem; }    .item-desc { font-size: 0.75rem; color: var(--muted); }    .sidebar-trigger { z-index: 99999;  position: fixed; top: 20px; left: 20px; background: #0f172a; color: #fff; border: 2px solid #ccc; opacity:1;  padding: 12px; border-radius: 10px; cursor: pointer; }   .sidebar-trigger:active {  opacity:1; border: 1px solid #ccc; }  .sidebar-trigger:hover {  opacity:0.8; border: 0px solid #ccc; }   .sidebar .close-x { background: none; border: none; font-size: 1.8rem; color: inherit; cursor: pointer; }   .sidebar-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); display: none; z-index: 9990; }     .sidebar-overlay.active { display: block; }   .sidebar .close-x svg path {  fill:#444;   }    .close-x:hover svg path {  fill:#ccc;   }    @media (max-width: 480px) { .sidebar { width: 85%; }   }     .accordion-group {   width: 100%;   box-sizing: border-box;   font-size: 14px;  }  .acc-item {   background: #ffffff;   border: 1px solid #e2e8f0;   overflow: hidden;  box-shadow: 0 4px calc(4px * 2) rgba(0, 0, 0, 0.15);  transition: all 0.3s ease; }  .acc-item {  border-radius: 12px;   margin-bottom: 12px;  }  .acc-item:last-child {   margin-bottom: 0;   }  .accordion-group .acc-item summary {   padding: 16px;   display: flex;   justify-content: space-between;   align-items: center;  cursor: pointer;  list-style: none;   font-weight: 600;  color: #1e293b;   transition: background 0.2s ease;   }  .accordion-group .acc-item summary:hover {   background: #f8fafc; }  .accordion-group .acc-item summary::-webkit-details-marker {   display: none;  }  .acc-icon {   color: #2563eb;   transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }  .content-wrapper {   height: 0;   overflow: hidden;   transition: height 0.3s ease;   background: #ffffff;  }.content-body {   padding: 20px;   color: #64748b;   line-height: 1.6;   }  .acc-item.is-open .acc-icon {   transform: rotate(180deg);  }  .acc-item.is-open summary {   text-align: center;background:#f8fafc; }  .acc-item.is-open:active summary {  background:#f8fafc;  }  ';  
if(document.getElementsByTagName("head")[0]){  document.getElementsByTagName("head")[0].appendChild(initSidebar_stg);  }



function initSidebar_start(){

function gerarIDSimples(tamanho = 8) {  return Math.random().toString(36).substring(2, 2 + tamanho);   }

 function initSidebar_check(gf, sidebar_obj, sidebar_obj2d, arr){    var initSidebar_checkdf;
 if(gf && gf==true){ if(typeof sidebar_obj === 'function' && arr){  initSidebar_checkdf=sidebar_obj(arr);  } }
 else {  if(typeof sidebar_obj2d === 'function' && arr){  initSidebar_checkdf=sidebar_obj2d(arr);    }
  }  return initSidebar_checkdf;  }


function initSidebar_close(sidebar_obj, cl){ 
if(sidebar_obj){ 
const sidebar = sidebar_obj.getElementsByClassName('sidebar')[0]; 
const overlay = sidebar_obj.getElementsByClassName('sidebar-overlay')[0];
if(sidebar){ sidebar.classList.add('sidebar-closed'); }
if(overlay){ overlay.classList.remove('active'); } 
	document.body.classList.remove('sidebar_scroll'); 
if (typeof cl === 'function') {  cl();  } 
}   }   

function initSidebar_open(sidebar_obj, cl){ 
if(sidebar_obj){ 
const sidebar = sidebar_obj.getElementsByClassName('sidebar')[0]; 
const overlay = sidebar_obj.getElementsByClassName('sidebar-overlay')[0];
if(sidebar){ sidebar.classList.remove('sidebar-closed'); }
if(overlay){ overlay.classList.add('active'); } 
	document.body.classList.add('sidebar_scroll'); 
if (typeof cl === 'function') {  cl();  }
}  }  


function initSidebar_accAdd(id="", iye=[]) {  if(iye && id && id!=""){ 
const mainVidime = document.getElementById(id); 
if(mainVidime){

var liestrood="";   var liestrddfood="";
   for(var j=0; j<iye.length; j++){

if(iye[j].txt && iye[j].txt!="" && iye[j].name && iye[j].name!=""){ 
liestrood=liestrood+'<details class="acc-item">    <summary>      <span>'+iye[j].name+'</span>         <span class="acc-icon">▼</span>    </summary>    <div class="content-wrapper">     <div class="content-body">'+iye[j].txt+'</div>    </div>  </details>';
}
   }

mainVidime.innerHTML=liestrood;

}  }
}


function initSidebar(sidebar_obj, menuData=[], theme = 'light', ott) {
if(sidebar_obj){ 
const sidebar = sidebar_obj.getElementsByClassName('sidebar')[0]; 
const nav = sidebar_obj.getElementsByClassName('sidebar-nav')[0];
if(sidebar && nav){ 
nav.innerHTML=""; 
sidebar.classList.add('theme-light'); sidebar.classList.remove('theme-dark');
if(theme=="dark"){ sidebar.classList.add('theme-dark'); sidebar.classList.remove('theme-light'); } 
var idex_itenf=0;
menuData.forEach(item => { 
const canClick = item.label && item.onClick; 
const div = document.createElement('div'); 
idex_itenf=idex_itenf+1;
div.className = `nav-item item${idex_itenf} ${canClick ? 'is-clickable' : 'not-clickable'}`; 
div.innerHTML = ` ${item.icon ? `<div class="item-icon">${item.icon}</div>` : ''} <div class="item-content"> <span class="item-title">${item.label}</span> ${item.desc ? `<span class="item-desc">${item.desc}</span>` : ''} </div> `; 
if (canClick && div) { div.addEventListener('click', () => { item.onClick();  initSidebar_close(sidebar_obj, ott); }); } 
nav.appendChild(div); }); 
} } 
}

function initSidebar_theme(sidebar_obj, theme = 'light') {
if(sidebar_obj){ 
const sidebar = sidebar_obj.getElementsByClassName('sidebar')[0];
if(sidebar){ 
sidebar.classList.add('theme-light'); sidebar.classList.remove('theme-dark');
if(theme=="dark"){ sidebar.classList.add('theme-dark'); sidebar.classList.remove('theme-light'); } }
} } 


function initSidebar_pos(sidebar_obj, pos = 'left') {
if(sidebar_obj){ 
const sidebar = sidebar_obj.getElementsByClassName('sidebar')[0];
if(sidebar){ 
sidebar.classList.remove('right');
sidebar.classList.remove('center');
sidebar.classList.remove('fullscreen');
sidebar.classList.add('left');
if(typ=="right"){ 
sidebar.classList.remove('left');
sidebar.classList.remove('center');
sidebar.classList.remove('fullscreen');
sidebar.classList.add('right'); } 
if(typ=="center"){ 
sidebar.classList.remove('right');
sidebar.classList.remove('left');
sidebar.classList.remove('fullscreen');
sidebar.classList.add('center');  }
if(typ=="fullscreen"){ 
sidebar.classList.remove('right');
sidebar.classList.remove('center');
sidebar.classList.remove('left');
sidebar.classList.add('fullscreen'); }
}  } } 



function initSidebar_oac(sidebar_obj, id){ 
if(sidebar_obj && id && id!=""){ 
	//if(document.querySelector(id)){   document.querySelector(id).classList.remove("not-clickable");    }
sidebar_obj.innerHTML=sidebar_obj.innerHTML+"<style>  "+id+" { opacity:1 !important;  pointer-events:auto !important;   } </style>";
}    }


const autoClose = true;

function initSidebar_acc(){   
document.querySelectorAll('.acc-item').forEach(el => {
  const summary = el.querySelector('summary');
  const wrapper = el.querySelector('.content-wrapper');

  summary.onclick = (e) => {
    e.preventDefault();
    const isOpen = el.classList.contains('is-open');

	if (isOpen) {
	  el.classList.remove('is-open');
	  wrapper.style.height = '0px';
	  setTimeout(() => el.open = false, 310);
	} else {
	  if (autoClose) {
		document.querySelectorAll('.acc-item.is-open').forEach(openItem => {
		  openItem.classList.remove('is-open');
		  openItem.querySelector('.content-wrapper').style.height = '0px';
		  setTimeout(() => openItem.open = false, 310);
		});
	  }
	  el.open = true;
      el.classList.add('is-open');
      wrapper.style.height = wrapper.querySelector('.content-body').scrollHeight + 'px';
	}
  };
});
} 


function initSidebar_creater(btn="this", id="this", list=[], title="", icon="", theme = 'light', typ="left", callf, option={ run:false, btn_close:true, btn: "Open SidebarFS", icon:"" }){ 
var setup_slide_style="left";  var setup_slidef_logo="";   
if(typ=="right"){ setup_slide_style="right"; } 
if(typ=="center"){ setup_slide_style="center"; }
if(typ=="fullscreen"){ setup_slide_style="fullscreen"; }

if(icon && icon!=""){ setup_slidef_logo='<div class="brand-logo">'+icon+'</div>'; }
if(list && id && btn && option){

var btnfs_initSideba=false;   var onjfs_initSideba=false;
if(btn=="this"){  btnfs_initSideba=true;   }
if(id=="this"){  onjfs_initSideba=true;   }

var fs_geniddd=gerarIDSimples(6);

  var initSidebar_gnerbrnt= "SidebarFS_Btn_"+fs_geniddd;
 var initSidebar_gner= "SidebarFS_"+fs_geniddd;

const setup_slidef_objrc = initSidebar_check(onjfs_initSideba,function(aa){
  var initSidebar_crayteg = document.createElement("div");
  initSidebar_crayteg.setAttribute("id", aa[1]); 
if(document.getElementsByTagName("body")[0]){  document.getElementsByTagName("body")[0].appendChild(initSidebar_crayteg);  }
return document.getElementById(aa[1]);   }, function(aa){  return document.getElementById(aa[2]);  }, { [1]:initSidebar_gner, [2]:id });


if(setup_slidef_objrc){ 
var setup_slide_style_cog=".sidebar-nav .nav-item";  

  var initSidebar_creater_closde='<button class="sidebar-close close-x"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path fill="#444" d="M15.1 3.1l-2.2-2.2-4.9 5-4.9-5-2.2 2.2 5 4.9-5 4.9 2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9z"></path></svg></button>';
if(option.btn_close===false){   initSidebar_creater_closde="";   }  
setup_slidef_objrc.innerHTML='<aside class="sidebar '+setup_slide_style+' sidebar-closed"> <div class="sidebar-inner"> <header class="sidebar-header"> <div class="brand"> '+setup_slidef_logo+' <span>'+title+'</span> </div> '+initSidebar_creater_closde+' </header> <nav class="sidebar-nav"></nav> <br/><br/> </div></aside><span class="sidebar-config"></span><div class="sidebar-overlay"></div>'; 

const overlay = setup_slidef_objrc.getElementsByClassName('sidebar-overlay')[0];
const navItens = setup_slidef_objrc.getElementsByClassName('sidebar-nav')[0];

const config_pp = setup_slidef_objrc.getElementsByClassName('sidebar-config')[0];
config_pp.innerHTML="";

const btn_copene = initSidebar_check(btnfs_initSideba,function(aa){
 var initSidedbar_crayteg = document.createElement("button");
  initSidedbar_crayteg.setAttribute("id", aa[1]); 
initSidedbar_crayteg.className = "sidebar-trigger sidebar_al"; 
 initSidedbar_crayteg.innerHTML = "";
if(option.icon && option.icon!=""){   initSidedbar_crayteg.innerHTML = initSidedbar_crayteg.innerHTML+""+option.icon;    }
if(option.btn && option.btn!=""){   initSidedbar_crayteg.innerHTML = initSidedbar_crayteg.innerHTML+"  "+option.btn;    }
if(document.getElementsByTagName("body")[0]){  document.getElementsByTagName("body")[0].appendChild(initSidedbar_crayteg);  }
return document.getElementById(aa[1]);   }, function(aa){  return document.getElementById(aa[2]);  }, { [1]:initSidebar_gnerbrnt, [2]:btn });

initSidebar(setup_slidef_objrc, list, theme, option.close); 

function fs_loaded_app_calls(){
if (typeof callf === 'function') { callf({ active: function(id){ 
 if(id){   initSidebar_oac(config_pp, setup_slide_style_cog+" .item"+(Number(id)+1)+"");   } 
}, 
acc: function (id, list){  initSidebar_accAdd(id, list);  initSidebar_acc();  },
pos: function (pos = 'left'){  initSidebar_pos(setup_slidef_objrc, pos);  },
theme: function (theme = 'light'){  initSidebar_theme(setup_slidef_objrc, theme);  },
btn_open: btn_copene.style,
close: function(){ initSidebar_close(setup_slidef_objrc, option.close); }, 
open: function(){ initSidebar_open(setup_slidef_objrc, option.open); }, 
obj: navItens  });  } 
}


if(btn_copene){ 
btn_copene.onclick = function(){ 
fs_loaded_app_calls();  initSidebar_open(setup_slidef_objrc, option.open); }; 
}

const btn_close = setup_slidef_objrc.getElementsByClassName('sidebar-close')[0];
if(btn_close){ btn_close.onclick = function(){ initSidebar_close(setup_slidef_objrc, option.close); }; }
if(overlay){ overlay.onclick = function(){ initSidebar_close(setup_slidef_objrc, option.close); }; }

if (option.run && option.run===true){   fs_loaded_app_calls();  initSidebar_open(setup_slidef_objrc, option.open);  } 

} } 
}


if (typeof initSidebar_onload === 'function') {  initSidebar_onload(initSidebar_creater);		}  

}

function initSidebar_startEx(ff){  if (typeof ff === 'function') {  ff(initSidebar_creater);		}  }


initSidebar_start();
