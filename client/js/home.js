
const homeIniModulesButtons = (homeObj)=>{

    // <li><a href="#"> <i class="fas fa-ellipsis-h"></i> &#32; Segment </a></li>
    // <li><a href="#"><i class="fas fa-bullseye"></i> &#32; Target</span> </a></li>
    // <li><a href="#">  <i class="fas fa-wave-square"></i> &#32; Function </li>
    // <li><a href="#"> <i class="fas fa-cube"></i> &#32;Single</a></li>
    // <li><a href="#"><i class="fas fa-cubes"></i>  &#32;List</a></li>
    // <li><a href="#"><i class="fas fa-table"></i>&#32;Output</a></li>

    homeObj.moduleButtomIcon = new HTMLComponent ( 
     {tag:"div", innerHTML:``, id:"moduleButtomIcon_id", classList:["fas", "fa-ellipsis-h"]})                 
     
     homeObj.moduleButtomtitletext = new HTMLComponent ( 
     {tag:"div", innerHTML:`Random`, id:"moduleButtomtitletext_id", classList:["moduleButtomtitletext"]})                 


     homeObj.moduleButtomtitle = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:"footertextainer_id", classList:["footertextainer"]},
       children:[ homeObj.moduleButtomIcon, homeObj.moduleButtomtitletext ]});

  
    homeObj.moduleButtomimage = new HTMLComponent ( 
      {tag:"div", innerHTML:``, id:"moduleButtomimage_id", classList:["moduleButtomimage"]});                
   

     homeObj.moduleButtomImageFrame = new HTMLContainer ( 
        {
         container:{tag:"div", innerHTML:"", id:"moduleButtomImageFrame_id", classList:["moduleButtomImageFrame"]},
         children:[  homeObj.moduleButtomimage ]});


    homeObj.moduleButtomDescription = new HTMLComponent ( 
        {tag:"p", innerHTML:`Here's the module random that decribe the following function`, 
        id:"moduleButtomDescription_id", classList:["moduleButtomDescription"]});                
         
           

     homeObj.moduleButtomDescriptionFrame = new HTMLContainer ( 
        {
            container:{tag:"div", innerHTML:"", id:"moduleButtomDescriptionFrame_id", classList:["moduleButtomDescriptionFrame"]},
            children:[ homeObj.moduleButtomDescription ]});
         


     homeObj.moduleButtomFrame = new HTMLContainer ( 
     {
        container:{tag:"div", innerHTML:"", id:"moduleButtomFrame_id", classList:["moduleButtomFrame"]},
        children:[ homeObj.moduleButtomtitle,  homeObj.moduleButtomImageFrame, homeObj.moduleButtomDescriptionFrame   ]});


 }


const homeIniModulesButtonsGen = (homeObj, content = {modulename:`Random`, moduleid:`random`,
         iconsclasslist:["fas", "fa-ellipsis-h"],
         description: `Here's the module random that decribe the following function`,
         descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
     })=>{

    // <li><a href="#"> <i class="fas fa-ellipsis-h"></i> &#32; Segment </a></li>
    // <li><a href="#"><i class="fas fa-bullseye"></i> &#32; Target</span> </a></li>
    // <li><a href="#">  <i class="fas fa-wave-square"></i> &#32; Function </li>
    // <li><a href="#"> <i class="fas fa-cube"></i> &#32;Single</a></li>
    // <li><a href="#"><i class="fas fa-cubes"></i>  &#32;List</a></li>
    // <li><a href="#"><i class="fas fa-table"></i>&#32;Output</a></li>

    let moduleButtIcon = strConcat([content.moduleid, `ButtomIcon`]);
        
    
    homeObj[moduleButtIcon]   = new HTMLComponent ( 
     {tag:"h1", innerHTML:``, id:strConcat([moduleButtIcon,`_id`]), classList:content.iconsclasslist})                 
     
     let moduleTitleText = strConcat([content.moduleid, `Titletext`]);
     homeObj[moduleTitleText] = new HTMLComponent ( 
     {tag:"div", innerHTML:content.modulename, id:strConcat([moduleTitleText,`_id`]), classList:[moduleTitleText]})                 


     let moduleButtomtitle = strConcat([content.moduleid, `Title`]);
     homeObj[moduleButtomtitle] = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:strConcat([moduleButtomtitle,`_id`]), classList:[moduleButtomtitle]},
       children:[ homeObj[moduleButtIcon] , homeObj[moduleTitleText] ]});


    let moduleButtomimage = strConcat([content.moduleid, `Image`]); 
    homeObj[moduleButtomimage] = new HTMLComponent ( 
      {tag:"div", innerHTML:``, id:strConcat([moduleButtomimage,`_id`]), classList:[moduleButtomimage]});                
   

    let moduleButtomImageFrame = strConcat([content.moduleid, `ImageFrame`]); 
   
     homeObj[moduleButtomImageFrame] = new HTMLContainer ( 
        {
         container:{tag:"div", innerHTML:"", id:strConcat([moduleButtomImageFrame,`_id`]), classList:[moduleButtomImageFrame]},
         children:[  homeObj[moduleButtomimage]]});


    let moduleButtomDescription = strConcat([content.moduleid, `Description`]); 

    homeObj[moduleButtomDescription] = new HTMLComponent ( 
        {tag:"p", innerHTML:content.description, 
        id:strConcat([ moduleButtomDescription,`_id`]), classList:[ moduleButtomDescription]});                
    
        
    let moduleButtomDescriptionFrame = strConcat([content.moduleid, `DescriptionFrame`]); 
      
     homeObj[moduleButtomDescriptionFrame] = new HTMLContainer ( 
        {
            container:{tag:"div", innerHTML:"", id:strConcat([ moduleButtomDescriptionFrame,`_id`]), classList:[moduleButtomDescriptionFrame]},
            children:[ homeObj[moduleButtomDescription] ]});
         

     let moduleButtomFrame  = strConcat([content.moduleid, `Frame`]);         

     homeObj[moduleButtomFrame] = new HTMLContainer ( 
     {
        container:{tag:"div", innerHTML:"", id:strConcat([ moduleButtomFrame ,`_id`]), classList:[moduleButtomFrame ]},
        children:[ homeObj[moduleButtomtitle],  homeObj[moduleButtomImageFrame], homeObj[moduleButtomDescriptionFrame]   ]});


 }


 const homeIniAllButtons = (homeObj)=>{
   

     homeIniModulesButtonsGen(homeObj, {modulename:`Random`, moduleid:`random`,
          iconsclasslist:["fas", "fa-ellipsis-h"],
          description: `Module Random`,
          descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
      });

    
     homeIniModulesButtonsGen(homeObj, {modulename:`Matrix`, moduleid:`matrix`,
     iconsclasslist:["fas", "fa-bullseye"],
     description: `Module Matrix`,
     descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
     });

    homeIniModulesButtonsGen(homeObj, {modulename:`Segmentation`, moduleid:`segmentation`,
    iconsclasslist:["fas", "fa-bullseye"],
    description: `Module Segmentation`,
    descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
    });

    homeIniModulesButtonsGen(homeObj, {modulename:`Vecmentation`, moduleid:`vecmentation`,
    iconsclasslist:["fas", "fa-bullseye"],
    description: `Module vecmentation`,
    descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
    });
        
          

    document.querySelector('#main').innerHTML =``;
    document.querySelector('#main').appendChild( homeObj[  strConcat([`random`, `Frame`])].$);
    document.querySelector('#main').appendChild( homeObj[  strConcat([`matrix`, `Frame`])].$);
    document.querySelector('#main').appendChild( homeObj[  strConcat([`segmentation`, `Frame`])].$);
    document.querySelector('#main').appendChild( homeObj[  strConcat([`vecmentation`, `Frame`])].$);
     
 }
 
 


 const homeEventsIni = (homeObj)=>{
   // homeObj.moduleButtomFrame.$.addEventListener('click',()=>{
  //      document.querySelector('#main').innerHTML ="";
  //  })

 };


const homeIni = (homeObj)=>{
   
     homeIniAllButtons(homeObj);
     homeEventsIni(homeObj)
    
}

