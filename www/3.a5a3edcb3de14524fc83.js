(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"3YLQ":function(e,t,s){"use strict";s.r(t),s.d(t,"startFocusVisible",function(){return c});const o="ion-focused",n=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],c=()=>{let e=[],t=!0;const s=document,c=t=>{e.forEach(e=>e.classList.remove(o)),t.forEach(e=>e.classList.add(o)),e=t},i=()=>{t=!1,c([])};s.addEventListener("keydown",e=>{t=n.includes(e.key),t||c([])}),s.addEventListener("focusin",e=>{if(t&&e.composedPath){const t=e.composedPath().filter(e=>!!e.classList&&e.classList.contains("ion-focusable"));c(t)}}),s.addEventListener("focusout",()=>{s.activeElement===s.body&&c([])}),s.addEventListener("touchstart",i),s.addEventListener("mousedown",i)}}}]);