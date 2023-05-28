

const homeBlockModuleButton = (homeObj, content = {modulename:`Random`, moduleid:`random`,
         iconsclasslist:["fas", "fa-ellipsis-h"],
         description: `Here's the module random that decribe the following function`,
         descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
     })=>{


    let moduleButtIcon = strConcat([content.moduleid, `ButtomIcon`]);
        
    const id = `-id`; 
    
    homeObj[moduleButtIcon]   = new HTMLComponent ( 
     {tag:"h2", innerHTML:``, id:strConcat([moduleButtIcon, id]), classList:content.iconsclasslist})                 
     
     let moduleTitleText = strConcat([content.moduleid, `Titletext`]);
     homeObj[moduleTitleText] = new HTMLComponent ( 
     {tag:"div", innerHTML:content.modulename, id:strConcat([moduleTitleText,id]), classList:[moduleTitleText]})                 


     let moduleButtomtitle = strConcat([content.moduleid, `Title`]);
     homeObj[moduleButtomtitle] = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:strConcat([moduleButtomtitle,id]), classList:[moduleButtomtitle]},
       children:[ homeObj[moduleButtIcon] , homeObj[moduleTitleText] ]});


    let moduleButtomimage = strConcat([content.moduleid, `Image`]); 
    homeObj[moduleButtomimage] = new HTMLComponent ( 
      {tag:"div", innerHTML:``, id:strConcat([moduleButtomimage,id]), classList:[moduleButtomimage]});                
   

    let moduleButtomImageFrame = strConcat([content.moduleid, `ImageFrame`]); 
   
     homeObj[moduleButtomImageFrame] = new HTMLContainer ( 
        {
         container:{tag:"div", innerHTML:"", id:strConcat([moduleButtomImageFrame,id]), classList:[moduleButtomImageFrame]},
         children:[  homeObj[moduleButtomimage]]});


    let moduleButtomDescription = strConcat([content.moduleid, `Description`]); 

    homeObj[moduleButtomDescription] = new HTMLComponent ( 
        {tag:"p", innerHTML:content.description, 
        id:strConcat([ moduleButtomDescription,id]), classList:[ moduleButtomDescription]});                
    
        
    let moduleButtomDescriptionFrame = strConcat([content.moduleid, `DescriptionFrame`]); 
      
     homeObj[moduleButtomDescriptionFrame] = new HTMLContainer ( 
        {
            container:{tag:"div", innerHTML:"", id:strConcat([ moduleButtomDescriptionFrame,id]), classList:[moduleButtomDescriptionFrame]},
            children:[ homeObj[moduleButtomDescription] ]});
         

     let moduleButtomFrame  = strConcat([content.moduleid, `Frame`]);         

     homeObj[moduleButtomFrame] = new HTMLContainer ( 
     {
        container:{tag:"div", innerHTML:"", id:strConcat([ moduleButtomFrame ,id]), classList:[moduleButtomFrame ]},
        children:[ homeObj[moduleButtomtitle],  homeObj[moduleButtomImageFrame], homeObj[moduleButtomDescriptionFrame]   ]});

     return homeObj[moduleButtomFrame];

 }


 const iniAllBlockModulesButtons = (homeObj)=>{
   

    document.querySelector('#main-id').innerHTML =``; 

    let navbuttonItems = [];
    Object.keys(modules_description).forEach(key => {
        let navButton = homeBlockModuleButton(homeObj, modules_description[key]);
        document.querySelector('#main-id').appendChild(navButton.$);
     }); 


    
 }
 
 

 const homeEventsIni = (homeObj)=>{

 };


const homeIni = (homeObj)=>{
   
   iniAllBlockModulesButtons(homeObj);
  // homeEventsIni(homeObj)
    
}

