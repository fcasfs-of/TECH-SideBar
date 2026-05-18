function scheck_stringno_valtext(id,g) {   if (id == null || id === "" || id === "undefined") {     return g;    }    return id;   }


var initSidebar_stg = document.createElement("style");
initSidebar_stg.innerHTML='      :root {      --transition-speed: 0.4s;      --transition-curve: cubic-bezier(0.4, 0, 0.2, 1);    }   .sidebar_scroll{  overflow:hidden;  }    .sidebar_al{  display: flex;    flex-direction: row;    flex-wrap: nowrap;    align-items: center;    justify-content: center;    align-content: center;  }       .sidebar_al svg {  margin-right: 8px;   }    .sidebar {   user-select:none;    position: fixed; top: 0;  bottom: 0;    width: 320px;  z-index: 999999;    transition: var(--transition-speed) var(--transition-curve);    box-shadow: 15px 0 35px rgba(0,0,0,0.1);    overflow:auto;  }   .sidebar.fullscreen{   left:0;   top: 0;  bottom: 0;    right:0;    height:100%; width:100%;  }  .sidebar.left{   left:0;   top: 0;  bottom: 0;    border-right: 2px solid #000;    }    .sidebar.right{    border-left: 2px solid #000;    right:0;  top: 0;  bottom: 0;  }    .sidebar.center{  border: 2px solid #000;   top: 50%;    left: 50%;    transform: translate(-50%, -50%);   width: 90%;    height: 70%;   }    .sidebar-closed {  display:none;   }   .left.sidebar-closed { transform: translateX(-105%); }   .right.sidebar-closed { transform: translateX(105%); }     .fullscreen.sidebar-closed, .center.sidebar-closed {   display:none;  }   .sidebar-nav, .sidebar-nav .nav-item {  padding:6px;  }    .sidebar-inner { height: 100%; display: flex; flex-direction: column; }   .theme-light .sidebar-nav svg {  fill: #000;  }   .theme-dark .sidebar-nav svg {  fill: #fff;  }   .theme-light { background: #ffffff; color: #1e293b; --accent: #4f46e5; --muted: #64748b; --hover: #f1f5f9; }   .theme-dark { background: #0f172a; color: #f8fafc; --accent: #818cf8; --muted: #94a3b8; --hover: #1e293b; }    .sidebar-header {       padding: 30px 20px; display: flex; justify-content: space-between; align-items: center;    }  .brand { display: flex; align-items: center; gap: 12px; font-weight: 700; font-size: 1.2rem; }   .brand-logo { background: var(--accent); color: white; padding: 4px 10px; border-radius: 8px; }    .brand-logo svg {  position: relative;    top: 3px;  }   .nav-item {    display: flex; align-items: center; gap: 16px;    padding: 14px 20px; margin: 4px 15px; border-radius: 12px;    transition: 0.3s;    overflow:auto;    }     .nav-item.is-clickable { cursor: pointer; }   .nav-item.is-clickable:hover { background: var(--hover); }    .nav-item.is-clickable:hover svg { fill: var(--accent); }   .nav-item-separate {  pointer-events: none;  width: 100%;    border-top: 1px solid #ccc;    border-radius: 50%;   }   .nav-item.is-clickable:hover .item-title { color: var(--accent); }    .nav-item.not-clickable {    cursor: default; opacity: 0.6; margin-top: 25px; pointer-events: none;     }     .item-icon { color: var(--accent);  margin-left: 6px;  display: flex; align-items: center; }    .item-content { display: flex; flex-direction: column;  width:100%;   }    .item-title { font-weight: 600; font-size: 0.95rem; }    .item-desc { font-size: 0.75rem; color: var(--muted); }    .sidebar-trigger { z-index: 99999;  position: fixed; top: 20px; left: 20px; background: #0f172a; color: #fff; border: 2px solid #ccc; opacity:1;  padding: 12px; border-radius: 10px; cursor: pointer; }   .sidebar-trigger:active {  opacity:1; border: 1px solid #ccc; }  .sidebar-trigger:hover {  opacity:0.8; border: 0px solid #ccc; }   .sidebar .close-x { background: none; border: none; font-size: 1.8rem; color: inherit; cursor: pointer; }   .sidebar-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); display: none; z-index: 9990; }     .sidebar-overlay.active { display: block; }   .sidebar .close-x svg path {  fill:#444;   }    .close-x:hover svg path {  fill:#ccc;   }    @media (max-width: 480px) { .sidebar { width: 85%; }   }     .accordion-group {   width: 100%;   box-sizing: border-box;   font-size: 14px;  }  .acc-item {   background: #ffffff;   border: 1px solid #e2e8f0;   overflow: hidden;  box-shadow: 0 4px calc(4px * 2) rgba(0, 0, 0, 0.15);  transition: all 0.3s ease; }  .acc-item {  border-radius: 12px;   margin-bottom: 12px;  }  .acc-item:last-child {   margin-bottom: 0;   }  .accordion-group .acc-item summary {   padding: 16px;   display: flex;   justify-content: space-between;   align-items: center;  cursor: pointer;  list-style: none;   font-weight: 600;  color: #1e293b;   transition: background 0.2s ease;   }  .accordion-group .acc-item summary:hover {   background: #f8fafc; }  .accordion-group .acc-item summary::-webkit-details-marker {   display: none;  }  .acc-icon {   color: #2563eb;   transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }  .content-wrapper {   height: 0;   overflow: hidden;   transition: height 0.3s ease;   background: #ffffff;  }.content-body {   padding: 20px;   color: #64748b;   line-height: 1.6;   }  .acc-item.is-open .acc-icon {   transform: rotate(180deg);  }  .acc-item.is-open summary {   text-align: center;background:#f8fafc; }  .acc-item.is-open:active summary {  background:#f8fafc;  }  ';  
if(document.getElementsByTagName("head")[0]){  document.getElementsByTagName("head")[0].appendChild(initSidebar_stg);  }



function initSidebar_start(){

const ModalFSOF = (() => {
    const activeModals = new Map();
    let zIndexCounter = 10000;
    const taskbarId = `fsof_taskbar_${Math.random().toString(36).substr(2, 5)}`;
    const sidebarId = `fsof_sidebar_${Math.random().toString(36).substr(2, 5)}`;

    const i18n = {
        pt: { manage: "Ver Minimizados", closeAll: "Fechar Todos", tMin: "Minimizar", tMax: "Maximizar", tClose: "Fechar", tRest: "Restaurar", stOpen: "Aberto", stMin: "Minimizado", stMax: "Maximizado", stClosed: "Fechado" },
        en: { manage: "View Minimized", closeAll: "Close All", tMin: "Minimize", tMax: "Maximize", tClose: "Close", tRest: "Restore", stOpen: "Open", stMin: "Minimized", stMax: "Maximized", stClosed: "Closed" }
    };

    const themes = {
        light: { bg: '#ffffff', text: '#2d3436', border: '#dfe6e9', header: '#f1f2f6', shadow: '0 10px 30px rgba(0,0,0,0.1)', accent: '#0984e3' },
        dark: { bg: '#1e272e', text: '#dfe6e9', border: '#444', header: '#2d3436', shadow: '0 10px 30px rgba(0,0,0,0.5)', accent: '#3498db' }
    };

    const icons = {
        close: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
        min: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
        max: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2.5"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg>`,
        restore: `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>`,
        grid: `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`
    };

    const createModernTooltip = (btn, text) => {
        const tip = document.createElement('div');
        Object.assign(tip.style, {
            position: 'absolute', top: '140%', left: '50%', transform: 'translateX(-50%) translateY(10px)',
            background: 'rgba(20, 20, 20, 0.9)', backdropFilter: 'blur(4px)', color: '#fff', overflow: "auto", 
            padding: '5px 12px', borderRadius: '6px', fontSize: '11px', whiteSpace: 'nowrap', 
            pointerEvents: 'none', opacity: '0', transition: 'all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28)', 
            zIndex: '100001', border: '1px solid rgba(255,255,255,0.1)', fontWeight: '500'
        });
        tip.innerText = text;
        btn.style.position = 'relative';
        btn.appendChild(tip);
        btn.onmouseenter = () => { tip.style.opacity = '1'; tip.style.transform = 'translateX(-50%) translateY(0px)'; };
        btn.onmouseleave = () => { tip.style.opacity = '0'; tip.style.transform = 'translateX(-50%) translateY(10px)'; };
    };

    const manageUI = (lang) => {
        const minimized = [...activeModals.values()].filter(m => m.statusRaw() === 'minimizado');
        let taskbar = document.getElementById(taskbarId);
        const labels = i18n[lang] || i18n.portugues;

        if (minimized.length === 0) {
            if (taskbar) taskbar.remove();
            const sb = document.getElementById(sidebarId);
            if (sb) sb.remove();
            return;
        }

        if (!taskbar) {
            taskbar = document.createElement('div');
            taskbar.id = taskbarId;
            Object.assign(taskbar.style, {
                position: 'fixed', bottom: '0', left: '0', right: '0', height: '55px',
                background: '#ffffff', borderTop: '1px solid #dfe6e9', display: 'flex',
                alignItems: 'center', overflow: "auto", padding: '0 25px', zIndex: '20000', gap: '15px',
                boxShadow: '0 -4px 20px rgba(0,0,0,0.08)', fontFamily: 'system-ui, sans-serif'
            });
            document.body.appendChild(taskbar);
        }

        taskbar.innerHTML = '';
        const btnShow = document.createElement('button');
        Object.assign(btnShow.style, { display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 16px', border: '1px solid #dfe6e9', borderRadius: '8px', background: '#fff', cursor: 'pointer', fontWeight: '700', color: '#636e72', fontSize: '13px' });
        btnShow.innerHTML = `${icons.grid} ${labels.manage} (${minimized.length})`;
        btnShow.onclick = () => renderSidebar(lang);
        
        const btnCloseAll = document.createElement('button');
        Object.assign(btnCloseAll.style, { marginLeft: 'auto', background: '#ff7675', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '800', fontSize: '12px' });
        btnCloseAll.innerText = labels.closeAll.toUpperCase();
        btnCloseAll.onclick = () => { [...activeModals.values()].forEach(m => m.close()); };

        taskbar.append(btnShow, btnCloseAll);
    };

    const renderSidebar = (lang) => {
        const minimized = [...activeModals.values()].filter(m => m.statusRaw() === 'minimizado');
        let sb = document.getElementById(sidebarId);

        if (minimized.length === 0) {
            if (sb) sb.remove();
            return;
        }

        if (!sb) {
            sb = document.createElement('div');
            sb.id = sidebarId;
            Object.assign(sb.style, {
                position: 'fixed', bottom: '55px', left: '0', right: '0', background: '#f8f9fa',
                borderTop: '1px solid #dfe6e9', padding: '20px', zIndex: '19999', display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px',
                maxHeight: '45vh', overflowY: 'auto', boxShadow: '0 -10px 30px rgba(0,0,0,0.05)', fontFamily: 'system-ui'
            });
            document.body.appendChild(sb);
        }

        sb.innerHTML = '';
        minimized.forEach(m => {
            const item = document.createElement('div');
            Object.assign(item.style, { background: '#fff', padding: '12px', borderRadius: '10px', border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' });
            item.innerHTML = `<div style="display:flex; width:22px; height:22px; color:#3498db">${m.config.icon || ''}</div>
                              <div style="flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; font-size:14px; font-weight:700; color:#2d3436">${m.config.titulo}</div>`;
            
            const btnR = document.createElement('div'); 
            Object.assign(btnR.style, { cursor: 'pointer', display: 'flex', color: '#636e72' });
            btnR.innerHTML = icons.restore;
            btnR.onclick = () => m.open();

            const btnC = document.createElement('div'); 
            Object.assign(btnC.style, { cursor: 'pointer', color: '#ff7675', marginLeft: '10px', display: 'flex' });
            btnC.innerHTML = icons.close;
            btnC.onclick = () => { m.close(); renderSidebar(lang); };

            item.append(btnR, btnC);
            sb.appendChild(item);
        });
    };

    window.modal_fsof = function(config) {
        const id = Math.random().toString(36).substr(2, 9);
        const modalId = `fsof_modal_${id}`;
        let currentTheme = themes[config.theme] || config.theme || themes.light;
        const lang = config.idioma || 'portugues';
        const labels = i18n[lang];
        let currentState = 'fechado';

        const wrapper = document.createElement('div');
        wrapper.id = modalId;
        Object.assign(wrapper.style, {
            position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
            display: 'none', zIndex: zIndexCounter++, background: 'rgba(0,0,0,0.3)',
            alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)'
        });

        const container = document.createElement('div');
        const header = document.createElement('div');
        const content = document.createElement('div');
        const actions = document.createElement('div');

        const applyStyles = (t) => {
            Object.assign(container.style, { background: t.bg, color: t.text, borderRadius: '16px', boxShadow: t.shadow, display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative', transition: 'all 0.3s ease' });
            Object.assign(header.style, { padding: '14px 22px', background: t.header, display: 'flex', alignItems: 'center', borderBottom: `1px solid ${t.border}`, userSelect: 'none' });
            Object.assign(content.style, { flex: '1', padding: '25px', overflowY: 'auto' });
        };

        const api = {
            config,
            changeTheme: (newTheme) => {
                currentTheme = themes[newTheme] || newTheme;
                applyStyles(currentTheme);
            },
            open: () => { 
                wrapper.style.display = 'flex'; currentState = 'aberto'; 
                wrapper.style.zIndex = zIndexCounter++;
                manageUI(lang); if(config.callback?.abrir) config.callback.abrir();
            },
            close: () => { 
                wrapper.remove(); currentState = 'fechado';
                activeModals.delete(modalId); manageUI(lang); if(config.callback?.fechar) config.callback.fechar();
            },
            minimize: () => { 
                wrapper.style.display = 'none'; currentState = 'minimizado'; 
                manageUI(lang); if(config.callback?.minimizar) config.callback.minimizar();
            },
            maximize: () => {
                const isMax = currentState === 'maximizado';
                currentState = isMax ? 'aberto' : 'maximizado';
                Object.assign(container.style, isMax ? 
                    { width: config.size?.width || '650px', height: config.size?.height || '480px', borderRadius: '16px', position: 'relative', top: 'auto', left: 'auto' } : 
                    { top: '0', left: '0', width: '100vw', height: '100vh', borderRadius: '0', overflow: 'auto', position: 'fixed' });
                if(config.callback?.maximizar) config.callback.maximizar();
            },
            status: () => labels[({aberto:'stOpen', minimizado:'stMin', maximizado:'stMax', fechado:'stClosed'}[currentState])],
            statusRaw: () => currentState
        };

        applyStyles(currentTheme);
        header.innerHTML = `<div style="margin-right:15px; display:flex; color:${currentTheme.accent}">${config.icon || ''}</div><div style="flex:1; font-weight:800; font-size:15px; letter-spacing:-0.3px">${config.titulo}</div>`;
        actions.style.display = 'flex'; actions.style.gap = '12px';

        const createActionBtn = (svg, fn, tip) => {
            const b = document.createElement('button');
            Object.assign(b.style, { background: 'transparent', border: 'none', cursor: 'pointer', color: 'inherit', opacity: '0.6', display: 'flex', padding: '5px', transition: '0.2s' });
            b.innerHTML = svg;
            b.onclick = (e) => { e.stopPropagation(); fn(); };
            createModernTooltip(b, tip);
            return b;
        };

        if (config.display?.minimize !== false) actions.appendChild(createActionBtn(icons.min, api.minimize, labels.tMin));
        if (config.display?.maximize !== false) actions.appendChild(createActionBtn(icons.max, api.maximize, labels.tMax));
        if (config.display?.close !== false) actions.appendChild(createActionBtn(icons.close, api.close, labels.tClose));
        
        header.appendChild(actions);
        content.innerHTML = config.texto_html || '';
        container.append(header, content);
        wrapper.appendChild(container);
        document.body.appendChild(wrapper);

        activeModals.set(modalId, api);
        if (config.startMaximized) api.maximize();
        if (config.startOpen) api.open();

        container.onmousedown = () => { wrapper.style.zIndex = zIndexCounter++; };
        return api;
    };
})();
	
	
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
if(item.separate===true){
div.className = `nav-item-separate`; 
div.innerHTML = ``; 
}
if (canClick && div) { div.addEventListener('click', () => {  item.onClick();  initSidebar_close(sidebar_obj, ott);    });  } 
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
var initSideiteg = document.createElement("style");
initSideiteg.innerHTML=""+id+" { opacity:1 !important;  pointer-events:auto !important;   }";
	sidebar_obj.appendChild(initSideiteg);
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
 if(id){ 	var fs_loaded_app_calls_iff=""+Number(id);
	if(Number(scheck_stringno_valtext(id, "1"))==1 || Number(id)<=0){  fs_loaded_app_calls_iff="1";  }
  initSidebar_oac(config_pp, setup_slide_style_cog+".item"+fs_loaded_app_calls_iff+"");   } 
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
