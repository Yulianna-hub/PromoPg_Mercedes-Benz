(()=>{"use strict";(()=>{const e=document.querySelectorAll("[data-tabs-handler]"),t=document.querySelectorAll("[data-tabs-field]"),s=document.querySelectorAll(".design__title");for(let c of e)c.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("design-list__item_active"))),c.classList.add("design-list__item_active"),t.forEach((e=>{e.dataset.tabsField===c.dataset.tabsHandler?e.classList.remove("hidden"):e.classList.add("hidden")})),s.forEach((e=>{e.classList.toggle("hidden")}))}))})(),(()=>{const e=document.querySelectorAll(".feature-sub"),t=document.querySelectorAll(".feature__link");t.forEach(((s,c)=>{s.addEventListener("click",(()=>{t.forEach(((t,c)=>{t===s?(t.classList.toggle("feature__link_active"),e[c].classList.toggle("hidden")):(t.classList.remove("feature__link_active"),e[c].classList.add("hidden"))}))}))}))})(),(()=>{const e=document.querySelector(".humburger-menu"),t=document.querySelector(".menu");e.addEventListener("click",(()=>{t.classList.toggle("menu-active"),e.classList.toggle("humburger-menu-active")})),t.addEventListener("click",(s=>{s.target.classList.contains("menu-list__link")&&(e.classList.remove("humburger-menu-active"),t.classList.remove("menu-active"))}))})(),(()=>{const e=document.querySelectorAll(".more"),t=document.querySelector(".modal");e.forEach((e=>{e.addEventListener("click",(()=>{t.classList.remove("hidden")}))})),t.addEventListener("click",(e=>{const s=e.target;(s.classList.contains("overlay")||s.classList.contains("modal__close"))&&t.classList.add("hidden")}))})(),(()=>{const e=document.querySelectorAll(".form");for(let t of e)t.addEventListener("submit",(e=>{let s={};for(let{name:e,value:c}of t)e&&(s[e]=c);fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s)}).then((e=>{if(200===e.status||201===e.status)return e.json();throw new Error(e.status)})).then((e=>{console.log("Data saved successfully."),t.reset()})).catch((e=>{console.log("An error occured, status "+e.message)})),e.preventDefault()}))})(),[...document.querySelectorAll(".menu-list__link"),document.querySelector(".main__scroll")].forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").substr(1);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}))}))})();