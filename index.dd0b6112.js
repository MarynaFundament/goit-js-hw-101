const e=document.getElementById("search-box");console.log(e);const t=document.querySelector(".country-info");console.log(t),e.addEventListener("input",(function(e){e.preventDefault();e.target.value.trim();fetch("https://restcountries.com/v3.1/name/${name}").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{console.log(e)}))}));
//# sourceMappingURL=index.dd0b6112.js.map
