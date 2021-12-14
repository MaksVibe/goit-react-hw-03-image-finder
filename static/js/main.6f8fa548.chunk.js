(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(7),s=a.n(o),c=(a(15),a(10)),i=a(6),l=a.n(i),u=a(9),h=a(2),d=a(3),p=a(5),m=a(4),g=a(0),b=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputText:""},e.hendleSubmit=function(t){t.preventDefault(),e.props.hendleSubmit(e.state.inputText)},e.handelChange=function(t){e.setState({inputText:t.target.value.toLowerCase()})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:"Searchbar",children:Object(g.jsxs)("form",{className:"SearchForm",onSubmit:this.hendleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(g.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(g.jsx)("input",{onChange:this.handelChange,value:this.state.inputText,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),j=b,f=function(e){var t=e.children;return Object(g.jsx)("ul",{className:"ImageGallery",children:t})},O=function(e){var t=e.images,a=e.openModal;e.onModalClose,e.isModalOpen;return t.map((function(e){var t=e.webformatURL,n=e.id;e.largeImageURL;return Object(g.jsx)("li",{className:"ImageGalleryItem",children:Object(g.jsx)("img",{src:t,alt:"",className:"ImageGalleryItem-image",onClick:a})},n)}))},v=document.querySelector("#modal-root"),x=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleEsc=function(t){"Escape"===t.code&&e.props.onModalClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onModalClose()},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEsc)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEsc)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:"Modal",children:Object(g.jsx)("img",{src:this.props.largeImage,alt:"",onClick:this.props.onModalClose})})}),v)}}]),a}(n.Component),M=x,y=function(e){var t=e.handleLoadMore;return Object(g.jsx)("button",{type:"button",onClick:t,className:"Button",children:"Load more"})},S=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={q:"",images:[],page:1,isLoading:!1,error:null,largeImage:"",isModalOpen:!1},e.fetchImages=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,n,r,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>1&&void 0!==o[1]?o[1]:1,n="https://pixabay.com/api/?key=24483741-f975205992ca850031cfb75db&q=".concat(t,"&page=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12"),e.next=4,fetch(n);case 4:return r=e.sent,e.abrupt("return",r.ok?r.json():Promise.reject(new Error(r.statusText)));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.hendleSubmit=function(t){if(!t)return!1;e.setState({q:t,images:[]})},e.handleLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.getImages=function(){var t=Object(u.a)(l.a.mark((function t(a,n){var r,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),t.prev=1,t.next=4,e.fetchImages(a,n);case 4:r=t.sent,o=r.hits,e.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(o))}})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e.setState({error:t.t0.message});case 12:return t.prev=12,e.setState({loading:!1}),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(e,a){return t.apply(this,arguments)}}(),e.onModalOpen=function(t){var a=t.target.getAttribute("src");return e.setState({isModalOpen:!0,largeImage:a})},e.onModalClose=function(){return e.setState({isModalOpen:!1})},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.q===this.state.q&&t.page===this.state.page||this.getImages(this.state.q,this.state.page)}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(j,{hendleSubmit:this.hendleSubmit}),this.state.images.length>0&&Object(g.jsx)(f,{children:Object(g.jsx)(O,{images:this.state.images,openModal:this.onModalOpen,onModalClose:this.onModalClose,isModalOpen:this.state.isModalOpen})}),this.state.images.length>11&&Object(g.jsx)(y,{handleLoadMore:this.handleLoadMore}),this.state.isModalOpen&&Object(g.jsx)(M,{largeImage:this.state.largeImage,openModal:this.onModalOpen,onModalClose:this.onModalClose,isModalOpen:this.isModalOpen})]})}}]),a}(n.Component),k=S;s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6f8fa548.chunk.js.map