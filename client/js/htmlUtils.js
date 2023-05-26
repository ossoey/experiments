
 class HTMLComponent {
  #params;
  constructor(params = {tag:"p", innerHTML:"Ebanga est bonnnn", id:"p_id", classList:["cls1", "cls2", "cls3"]}) {
              
    this.#params = {tag:"p", innerHTML:"Ebanga est bon", id:"p_id", classList:["cls1", "cls2", "cls3"]};
    Object.assign(this.#params,params);
    this.$ = document.createElement(this.#params.tag);
    this.#propertiesAssignment();
  }

  #propertiesAssignment(){
    Object.entries(this.#params).forEach(([key, value]) => {
      if (key in this.$) {
        if (key === "classList" ) {
          value.forEach((elt)=>{              
            this.$[key].add(elt);
          })
        }
        else   this.$[key] = value;
      } 
    });
  }

  _update(params = {tag:"p", innerHTML:"", id:"p_id", classList:["cls1", "cls2", "cls3"]}) {
       Object.assign(this.#params,params);
       this.#propertiesAssignment();
  }

  outParams() {
    return Object.assign({},this.#params);
  }
  
}


class HTMLContainer {
  #params;
  
  constructor(params = {
                 container:{tag:"div", innerHTML:"", id:"container_id"},
                 children:[new HTMLComponent({tag:"p", innerHTML:"paragraph 1", id:"par1_id", classList:["cls1"]}),
                           new HTMLComponent({tag:"p", innerHTML:"paragraph 2", id:"par2_id", classList:["cls1"]}),   
                           new HTMLComponent({tag:"p", innerHTML:"paragraph 3", id:"par3_id", classList:["cls1"]}),
                           new HTMLComponent({tag:"p", innerHTML:"paragraph 4", id:"par4_id", classList:["cls1"]}),   
                
                ]}) {
              
    this.#params = {
      container:{tag:"div", innerHTML:"", id:"container_id"},
      children:[new HTMLComponent({tag:"p", innerHTML:"paragraph 1", id:"par1_id", classList:["cls1"]}),
                new HTMLComponent({tag:"p", innerHTML:"paragraph 2", id:"par2_id", classList:["cls1"]}),   
                new HTMLComponent({tag:"p", innerHTML:"paragraph 3", id:"par3_id", classList:["cls1"]}),
                new HTMLComponent({tag:"p", innerHTML:"paragraph 4", id:"par4_id", classList:["cls1"]}),   

      ]};

    Object.assign(this.#params,params);
    this.$ = (new HTMLComponent(this.#params.container)).$
    this.children = [];
    this.#buildChildren();
  }

  #buildChildren(){
    this.#params.children.forEach((elt)=>{
       this.$.appendChild(elt.$);
    })
  }

  _update(params = {
    }) {
       Object.assign(this.#params,params);
  }

 
  outParams() {
    return Object.assign({},this.#params);
  }
  
}


// String utils

let strConcat = (text = [`el1`,`elt2`,`elt3`]) =>{
    let result = ``;
    text.forEach((elt) =>{
        result += elt; 
    })
    return result; 
}


// class HTMLNav {
//   #params;
  
//   constructor(params = {
//                  nav:{tag:"div", innerHTML:"",  classList:["nav_cls"], id:"cls_id"},
//                  list:[ {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li1_id"},
//                         {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li2_id"},
//                         {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li3_id"},
//                         {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li4_id"}],
//                  elements:[ {tag:"button", innerHTML:"Segmentation",  classList:["but_cls"], id:"segbut_id"},
//                  {tag:"button", innerHTML:"Vecmentation",  classList:["but_cls"], id:"vecbut_id"},
//                  {tag:"button", innerHTML:"Indexation",  classList:["but_cls"], id:"indbut_id"},
//                  {tag:"button", innerHTML:"Random",  classList:["but_cls"], id:"ranbut_id"},
//                  {tag:"button", innerHTML:"Matrix",  classList:["but_cls"], id:"mstbut_id"}
//                 ]

//                 }) {
              
//     this.#params = {
//       nav:{tag:"nav", innerHTML:"",  classList:["nav_cls"], id:"cls_id"},
//       list:[ {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li1_id"},
//              {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li2_id"},
//              {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li3_id"},
//              {tag:"li", innerHTML:"",  classList:["li_cls"], id:"li4_id"}],
//       elements:[ {tag:"button", innerHTML:"Segmentation",  classList:["but_cls"], id:"segbut_id"},
//       {tag:"button", innerHTML:"Vecmentation",  classList:["but_cls"], id:"vecbut_id"},
//       {tag:"button", innerHTML:"Indexation",  classList:["but_cls"], id:"indbut_id"},
//       {tag:"button", innerHTML:"Random",  classList:["but_cls"], id:"ranbut_id"},
//       {tag:"button", innerHTML:"Matrix",  classList:["but_cls"], id:"mstbut_id"}]};

//     Object.assign(this.#params,params);

//     this.list = [];

//     this.#params.list.forEach((elt,index) =>{
//       this.list.push(
//         new HTMLContainer( {container:elt,
//                             children:[new HTMLComponent( this.#params.elements[index])]   
//         }))
          
//     });

//     this.nav = new HTMLContainer( {container: this.#params.nav,
//       children:this.list
//     });


//   }


//   _update(params = {
//     }) {
//        Object.assign(this.#params,params);
//   }

 
//   outParams() {
//     return Object.assign({},this.#params);
//   }
  
// }