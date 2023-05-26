
const footerIniContent = (footerObj)=>{

    footerObj.footertext = new HTMLComponent ( 
     {tag:"p", innerHTML:`&copy; 2023 - Experiments`, id:"footertext_id", classList:["footertext"]})                 
     
     footerObj.footertextainer = new HTMLContainer ( 
     {
       container:{tag:"h3", innerHTML:"", id:"footertextainer_id", classList:["footertextainer"]},
       children:[footerObj.footertext]});
 
}

const footerIni = (footerObj)=>{
   
    footerIniContent(footerObj);
     document.querySelector('#footer').appendChild( footerObj.footertextainer.$);
    
}

