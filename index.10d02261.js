const t=document.querySelector(".search-form"),e=document.querySelector(".gallery");function n(t){e.innerHTML=t}function r(t){console.error(t),n("<p>Hits not found</p>")}t.addEventListener("submit",(function(t){t.preventDefault();const e=t.currentTarget;(a=e.elements.searchQuery.value.trim(),fetch(`https://pixabay.com/api/?key=33854415-dab75466e51d96ca7439b60b4&q=${a}&per_page=5&page=1`).then((t=>t.json()))).then((({hits:t})=>{if(0===t.length)throw new Error("Sorry, there are no images matching your search query. Please try again.");return t.reduce(((t,e)=>function({tags:t,webformatURL:e,largeImageURL:n,likes:r,views:a,comments:o,downloads:s}){return`\n\t\t<div class="photo-card">\n\t\t\t<a class="images-link" href="${n}">\n\t\t\t\t<img src="${e}" alt="${t}" loading="lazy" />\n\t\t\t</a>\n\t\t\t<div class="info">\n\t\t\t\t<p class="info-item">\n\t\t\t\t<b>Likes</b>:\n\t\t\t\t${r}\n\t\t\t\t</p>\n\t\t\t\t<p class="info-item">\n  \t\t\t\t<b>Views</b>:\n\t\t\t\t${a}\n\t\t\t\t</p>\n\t\t\t\t<p class="info-item">\n  \t\t\t\t<b>Comments</b>:\n\t\t\t\t${o}\n\t\t\t\t</p>\n\t\t\t\t<p class="info-item">\n  \t\t\t\t<b>Downloads</b>:\n\t\t\t\t${s}\n\t\t\t\t</p>\t\t\t\t\n\t\t\t</div>\t\t\t\t\n\t\t</div>\n\t`}(e)+t),"")})).then(n).catch(r).finally((()=>e.reset()));var a}));document.getElementById("search-form"),document.querySelector(".gallery");
//# sourceMappingURL=index.10d02261.js.map