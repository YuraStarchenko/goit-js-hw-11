//! export class PixabayApiImages {
//!   constructor() {
//!     this.searchQuery = '';
//!     this.page = 1;
//!     this.per_page = 40;
//!     this.totalPages = 0;
//!   }
//!   async getImages() {
//!     const searchParams = new URLSearchParams({
//!       key: '33634172-69812b587cbe0ba586ff0443e',
//!       q: `${this.searchQuery}`,
//!       image_type: 'photo',
//!       orientation: 'horizontal',
//!       safesearch: true,
//!       per_page: `${this.per_page}`,
//!       page: `${this.page}`,
//!     });
//!     const { data } = await axios.get(`${BASE_URL}?${searchParams}`);
//!     return data;
//!   }
//!   incrementPage() {
//!     return (this.page += 1);
//!   }
//!   resetPage() {
//!     return (this.page = 1);
//!   }
//!   setTotal(total) {
//!     return (this.totalPages = total);
//!   }
//!   resetTotalPage() {
//!     return (this.totalPages = 0);
//!   }
//!   hasMoreImages() {
//!     return this.page === Math.ceil(this.totalPages / this.per_page);
//!   }
//! }
const o=new URLSearchParams({key:"33854415-dab75466e51d96ca7439b60b4",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:10});console.log(o.toString());const e=`https://pixabay.com/api/?&${o}`;console.log(e),fetch(e).then((o=>o.json())).then((({hits:o})=>console.log(o)));
//# sourceMappingURL=index.fb09f467.js.map
