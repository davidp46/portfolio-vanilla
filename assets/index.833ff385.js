!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const e=document.querySelector("#navbar"),r=document.querySelector(".landing__nav"),t=document.querySelector(".landing"),o=document.querySelector("#about-me"),n=document.querySelector("#skills"),s=document.querySelector("#projects");const i=new window.IntersectionObserver((function(r){const[t]=r;t.isIntersecting?e.classList.add("navbar--hidden"):e.classList.remove("navbar--hidden")}),{threshold:1}),c=new window.IntersectionObserver((function(e){e.forEach((e=>{const r=e.target.id?`#${e.target.id}`:"/";e.isIntersecting&&window.history.pushState(null,"title",r)}))}),{threshold:.5});i.observe(r),c.observe(t),c.observe(o),c.observe(n),c.observe(s);