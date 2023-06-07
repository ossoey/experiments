
 
let matriccontainer;


const textInPutModel = (params)=>{
  return   new HTMLComponent ( 
      {tag:"input" , type: "text", innerHTML:``, id:'gogo', classList:['fofo']})                 
    
    
}

const matrixMain = (params)=>{
   matriccontainer = new HTMLContainer ( 
      {
        container:{tag:"div", innerHTML:"", id:"iii", classList:['echo']},
        children:params.children });                
     
     
 }
 



const matrixIni = (moduleObj)=>{
     document.querySelector('#main-id').innerHTML ="";
     let textin = textInPutModel();
     matrixMain({children:[textin]});
     
     document.querySelector('#main-id').appendChild(matriccontainer.$);
     
}

