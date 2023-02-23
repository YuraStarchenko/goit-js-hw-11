fetch("https://pixabay.com/api/?key=33854415-dab75466e51d96ca7439b60b4&q=image_type=photo&orientation=horizontal&safesearch=true").then((function(e){return e.json()})).then((function(e){var t=e.webformatURL,o=e.largeImageURL,a=e.tags,n=e.likes,r=e.views,i=e.comments,s=e.downloads;return console.log(t,o,a,n,r,i,s)}));
//# sourceMappingURL=index.281262a7.js.map
