{/* <h1 class="mbr-section-title mbr-semibold mbr-fonts-style align-center display-5">بداية عقد التأجير: </h1>
<p class="mbr-text mbr-fonts-style display-5">${this.contract_type}<br/></p> */}
function get_data(html_element) {
    const data = {}
    const children = [...html_element.children];
    children.forEach((e) => {
        if (e.tagName.startsWith('DATA-')) {
            data['__' + e.tagName.split('-')[1]] = e.innerHTML;
            e.remove();
        }
    });
    return data
}

function set_data(data, doc) {
    const result = doc.match(/(\b__\S+\b)/ig);
    if (result && result.length)
        result.forEach((e) => {
            console.log(e);
            if (data.hasOwnProperty(e.toUpperCase()))
                doc = doc.replace(e, data[e.toUpperCase()]);
        })    
    return doc;    
}        	
function remove_empty_args(doc) {
    const result = doc.match(/(\b__\S+\b)/ig);
    if (result && result.length)
        result.forEach((e) => {            
                doc = doc.replace(e, '');
        })    
    return doc;    
}
 /**
         * @return {HTMLElement}
         */
  class project extends HTMLElement
  {    
      constructor(){
          super();
          console.log('project')
          const data = get_data(this);
            this.info = this.getAttribute("info") ?? '';    this.image_two = this.getAttribute("image_two") ?? '';    this.project_name = this.getAttribute("project_name") ?? '';    this.image_one = this.getAttribute("image_one") ?? '';    this.project_location = this.getAttribute("project_location") ?? '';    this.content = this.getAttribute("content") ?? '';    this.contract_type = this.getAttribute("contract_type") ?? '';          
          this.innerHTML = remove_empty_args(set_data(data,`
                    <div class="row" style="margin-top:70px">
                    <div class="row" 
                    <hr style="border: 0;
          height: 1px;
          background: #fe8f49;
          background-image: linear-gradient(to right, #fe8f49, #fe8f49, #ccc);display: block;
          width: 100%; margin-bottom:40px;">
          </div>
<div class="col-lg-7">
<h1 class="mbr-section-title mbr-semibold mbr-fonts-style align-center display-2">${this.project_name}</h1>
<p class="mbr-text mbr-fonts-style display-5">
      ${this.info}
  </p>
<h1 class="mbr-section-title mbr-semibold mbr-fonts-style align-center display-5">محتويات المشروع</h1>
<p class="mbr-text mbr-fonts-style display-5">
      ${this.content}
  </p>

<div class="mbr-section-btn align-right"><a class="btn btn-warning display-7" href="${this.project_location}">موقع المشروع</a></div>
</div>
<div class="col-lg-5">
<div class="image-block image-block-2">
<img alt="" class="img-small" src="assets/images/${this.image_one}"/>
<figcaption class="mbr-figure-caption mbr-figure-caption-over">
<div class="wrap">
<h3 class="mbr-white mbr-bold align-left mbr-fonts-style display-5"></h3>
<p class="mbr-white align-left mbr-fonts-style display-7"></p>
</div>
</figcaption>
</div>
<div class="image-block image-block-3">
<img alt="" class="img-small" src="assets/images/${this.image_two}"/>
<figcaption class="mbr-figure-caption mbr-figure-caption-over">
<div class="wrap">
<h3 class="mbr-white mbr-bold align-left mbr-fonts-style display-5"></h3>
<p class="mbr-white align-left mbr-fonts-style display-7"></p>
</div>
</figcaption>
</div>
</div>
</div>`));        
          
      }
  }
  customElements.define('x-project', project);