import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as y,i as u}from"./assets/vendor-77e16229.js";function p(e){const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),f=Math.floor(e%864e5%36e5/6e4),h=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function o(e){return String(e).padStart(2,"0")}const t=document.querySelector("button");t.disabled=!0;const d=document.querySelector("input");let c,i;y("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0].getTime()>Date.now()?(c=e[0].getTime(),t.disabled=!1):(u.error({titleColor:"#fff",message:"Please choose a date in the future",messageColor:"#fff",color:"#ef4040",position:"topRight"}),t.disabled=!0)}});t.addEventListener("click",()=>{t.disabled=!0,d.disabled=!0,b()});function b(){i=setInterval(()=>{const e=c-Date.now();if(e<=0)clearInterval(i),u.info({message:"Time is up!",position:"topCenter"}),d.disabled=!1;else{const{days:n,hours:r,minutes:s,seconds:a}=p(e);document.querySelector("[data-days]").textContent=o(n),document.querySelector("[data-hours]").textContent=o(r),document.querySelector("[data-minutes]").textContent=o(s),document.querySelector("[data-seconds]").textContent=o(a)}},1e3)}
//# sourceMappingURL=commonHelpers.js.map
