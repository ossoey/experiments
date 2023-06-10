
 
let matriccontainer;



const matrixIni = (moduleObj)=>{
     document.querySelector('#main-id').innerHTML ="";
     
     let input = new HTMLInputText({input:{  size: "30"}});
     let input1 = new HTMLInputText({input:{  size: "10"}, label :{innerHTML:`JJ colombe `}});
     let input2 = new HTMLInputText({input:{  size: "23"}});


     let fieldset = new HTMLFieldsetInputs({inputs: [{input :{tag:"input" , type: "text", innerHTML:``, id:'input-id', classList:['inputcls']},
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
                         , 
                         {input :{tag:"input" , type: "text", innerHTML:``, id:'input-id', classList:['inputcls']},
                         inputframe :{tag:"div", innerHTML:``, id:'inputframe-id', classList:['inputframecls']},
                         label :{tag:"div" , innerHTML:`siko`,size:"16px", id:'label-id', classList:['labelcls']},
                         labelframe :{tag:"div", innerHTML:``, id:'labelframe-id', classList:['labelframecls']}, 
                         frame :{tag:"div", innerHTML:``, id:'inputboxframe-id', classList:['inputboxframecls']}
                         } , 
                         ],
                         fieldSet:{tag:"fieldSet" , innerHTML:"", id:'fieldSet-id', classList:['fieldSetcls']},
                         legendcontent:{tag:"p", innerHTML:"legend Text", id:"legendcontent-id", classList:["legendcontentcls"]}

});

     appendChildElements(document.querySelector('#main-id'), [fieldset.fieldSet.$]);
}

