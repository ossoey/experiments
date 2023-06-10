
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

class HTMLInputText {
  #params;
  constructor(params = {input :{tag:"input" , type: "text", innerHTML:``, id:'input-id', classList:['inputcls']},
  inputframe :{tag:"div", innerHTML:``, id:'inputframe-id', classList:['inputframecls']},
  label :{tag:"div" , innerHTML:`Input Label`, id:'label-id', classList:['labelcls']},
  labelframe :{tag:"div", innerHTML:``, id:'labelframe-id', classList:['labelframecls']}, 

  frame :{tag:"div", innerHTML:``, id:'inputboxframe-id', classList:['inputboxframecls']},
}) {
              
    this.#params = {input :{tag:"input" , type: "text", innerHTML:``, id:'input-id', classList:['inputcls']},
    inputframe :{tag:"div", innerHTML:``, id:'inputframe-id', classList:['inputframecls']},
    label :{tag:"div" , innerHTML:`Input Label`, id:'label-id', classList:['labelcls']},
    labelframe :{tag:"div", innerHTML:``, id:'labelframe-id', classList:['labelframecls']}, 
    frame :{tag:"div", innerHTML:``, id:'inputboxframe-id', classList:['inputboxframecls']},
  }    ;
  
    this.#assign(params);
 
  }

  #assign(params){
    Object.keys(this.#params).forEach(key => {

      if (key in params)  Object.assign(this.#params[key],params[key]);
            
      }); 

       
      this.input = new HTMLComponent ( this.#params.input);

      this.inputFrame  = new HTMLContainer ( 
        {
          container:this.#params.inputframe ,
          children:[this.input ]
        });                
      
      this.label = new HTMLComponent ( this.#params.label);

      this.labelframe  = new HTMLContainer ( 
        {
          container:this.#params.labelframe ,
          children:[this.label]
        }); 
        
        this.frame = new HTMLContainer ( 
        {
          container: this.#params.frame,
          children:[this.labelframe, this.inputFrame ]
        });   
  }
   
  _update(params = {input :{tag:"input" , type: "text", innerHTML:``, id:'input-id', classList:['inputcls']},
    inputframe :{tag:"div", innerHTML:``, id:'inputframe-id', classList:['inputframecls']},
    label :{tag:"div" , innerHTML:`Input Label`, id:'label-id', classList:['labelcls']},
    labelframe :{tag:"div", innerHTML:``, id:'labelframe-id', classList:['labelframecls']}, 
    frame :{tag:"div", innerHTML:``, id:'inputboxframe-id', classList:['inputboxframecls']},
}) {
    this.#assign(params);

  }

  outParams() {
    return Object.assign({},this.#params);
  }
  
}



class HTMLFieldsetInputs {
  #params;
  constructor(params = {inputs: [{input :{tag:"input" , type: "text", innerHTML:``, id:'input-id', classList:['inputcls']},
                                  inputframe :{tag:"div", innerHTML:``, id:'inputframe-id', classList:['inputframecls']},
                                  label :{tag:"div" , innerHTML:`Input Label`, id:'label-id', classList:['labelcls']},
                                  labelframe :{tag:"div", innerHTML:``, id:'labelframe-id', classList:['labelframecls']}, 
                                  frame :{tag:"div", innerHTML:``, id:'inputboxframe-id', classList:['inputboxframecls']}
                                } , 
                                {input :{tag:"input" , type: "text", innerHTML:``, id:'input-id', classList:['inputcls']},
                                inputframe :{tag:"div", innerHTML:``, id:'inputframe-id', classList:['inputframecls']},
                                label :{tag:"div" , innerHTML:`Input Label`, id:'label-id', classList:['labelcls']},
                                labelframe :{tag:"div", innerHTML:``, id:'labelframe-id', classList:['labelframecls']}, 
                                frame :{tag:"div", innerHTML:``, id:'inputboxframe-id', classList:['inputboxframecls']}
                                } , 
                                {input :{tag:"input" , type: "text", innerHTML:``, id:'input-id', classList:['inputcls']},
                                inputframe :{tag:"div", innerHTML:``, id:'inputframe-id', classList:['inputframecls']},
                                label :{tag:"div" , innerHTML:`Input Label`, id:'label-id', classList:['labelcls']},
                                labelframe :{tag:"div", innerHTML:``, id:'labelframe-id', classList:['labelframecls']}, 
                                frame :{tag:"div", innerHTML:``, id:'inputboxframe-id', classList:['inputboxframecls']}
                               } , 
                           ],
                           fieldSet:{tag:"fieldSet" , innerHTML:"", id:'fieldSet-id', classList:['fieldSetcls']},
                           legendcontent:{tag:"p", innerHTML:"legend Text", id:"legendcontent-id", classList:["legendcontentcls"]}
                   
}) {
              

     this.legendcontent = new HTMLComponent(params.legendcontent)

     
     this.legend  = new HTMLContainer (  {
      container:params.fieldSet ,
      children:[  this.legendcontent  ]});

      let fieldsetChildren = [];
      fieldsetChildren.push(this.legend);
      params.inputs.forEach((elt)=>{
        fieldsetChildren.push((new HTMLInputText({elt} )).frame) 
      });
 
      

     this.fieldSet = new HTMLContainer (  {
      container:params.fieldSet ,
      children:fieldsetChildren});
      
  }
 
  _update(params = {}) {
  }

  outParams() {
    return Object.assign({},this.#params);
  }
  
}



let appendChildElements = (htmlElement, elements ) =>{
  elements.forEach((elt)=>{
    htmlElement.appendChild(elt)
  });
}

 

let strConcat = (text = [`el1`,`elt2`,`elt3`]) =>{
    let result = ``;
    text.forEach((elt) =>{
        result += elt; 
    })
    return result; 
}

