var n=document.querySelector(".game-score"),t=document.querySelector(".button.start"),e=document.querySelector(".message-lose"),r=document.querySelector(".message-win"),o=document.querySelector(".message-start"),c=Array.from(document.querySelectorAll(".field-row")),i=[,,,,].fill(0).map(function(n){return[,,,,].fill(0)}),u={UP:"ArrowUp",DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight"};function a(){var n=function(){var n={row:0,column:0};do n.row=Math.floor(4*Math.random()),n.column=Math.floor(4*Math.random());while(0!==i[n.row][n.column])return n}(),t=n.row,e=n.column;i[t][e]=.9>Math.random()?2:4}function s(){i.map(function(n,t){n.map(function(n,e){var r=c[t].children[e];0===n?(r.textContent="",r.classList="field-cell"):(r.textContent=n,r.classList="field-cell field-cell--".concat(n))})}),n.textContent=i.reduce(function(n,t){return n+t.reduce(function(n,t){return n+t})},0)}function l(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[[],[],[],[]];if(n===u.UP||n===u.DOWN)for(var o=0;o<4;o++)for(var c=0;c<4;c++)r[c][o]=t[o][c];if(n===u.LEFT||n===u.RIGHT)for(var i=0;i<4;i++)for(var a=0;a<4;a++)r[i][a]=t[i][a];return e&&(n===u.RIGHT||n===u.DOWN)&&r.map(function(n){return n.reverse()}),r}function d(n){var t=l(n,i,!0),e=!1;return t.map(function(n,t){var r=n.filter(function(n){return 0!==n});r.map(function(n,t,r){n===r[t+1]&&(r[t]*=2,r.splice(t+1,1),e=!0)}),e=e||4!==r.length,n.map(function(n,t,e){e[t]=r[t]||0})}),!!e&&((n===u.RIGHT||n===u.DOWN)&&t.map(function(n){return n.reverse()}),l(n,t))}t.addEventListener("click",function(){i.map(function(n){return n.map(function(n,t,e){return e[t]=0})}),s(),o.classList.add("hidden"),t.classList.remove("start"),t.classList.add("restart"),t.textContent="Restart",n.textContent="0",r.classList.contains("hidden")||r.classList.add("hidden"),e.classList.contains("hidden")||e.classList.add("hidden"),a(),a(),s()}),document.addEventListener("keydown",function(n){var t=i.some(function(n){return n.some(function(n){return 0===n})}),o=Object.values(u),c=o.includes(n.key)?n.key:"",l=[];c&&((l=d(c))&&t||(t=o.some(function(n){return c!==n&&!!d(n)})),t||e.classList.remove("hidden"),l&&(i.map(function(n,t,e){n.map(function(n,r){e[t][r]=l[t][r]})}),i.some(function(n){return n.some(function(n){return 2048===n})})&&r.classList.remove("hidden"),a(),s()))});
//# sourceMappingURL=index.47f939b3.js.map
