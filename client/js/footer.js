
const footerIniContent = (footerObj)=>{

    footerObj.footertext = new HTMLComponent ( 
     {tag:"p", innerHTML:`&copy; ${info.start} - ${info.appname}`, id:"footertext-id", classList:["footertext"]})                 
     
     footerObj.footertextainer = new HTMLContainer ( 
     {
       container:{tag:"h3", innerHTML:"", id:"footertextainer-id", classList:["footertextainer"]},
       children:[footerObj.footertext]});
 
}

const footerIni = (footerObj)=>{
   
    footerIniContent(footerObj);
     document.querySelector('#footer-id').appendChild( footerObj.footertextainer.$);
    
}

