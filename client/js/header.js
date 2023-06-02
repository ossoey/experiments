
const headerIniLogo = (headerObj)=>{
   
    headerObj.logotext = new HTMLComponent ( 
     {tag:"h1", innerHTML:`EXPERIMENTS`, id:"logotext-id", classList:["logotext"]})                 
     
    headerObj.logotextainer = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:"logotextainer-id", classList:["logotextainer"]},
       children:[headerObj.logotext]});
 
     headerObj.logomoduletext = new HTMLComponent ( 
       {tag:"h2", innerHTML:`Accueil`, id:"logomoduletext-id", classList:["logomoduletext"]})                 
  
     headerObj.logomoduletextainer = new HTMLContainer ( 
         {
           container:{tag:"div", innerHTML:"", id:"logomoduletextainer-id", classList:["logomoduletextainer"]},
           children:[headerObj.logomoduletext]});
         
     headerObj.logo = new HTMLContainer ( 
       {
       container:{tag:"div", innerHTML:"", id:"logo-id", classList:["logo"]},
       children:[headerObj.logotextainer, headerObj.logomoduletextainer ]}); 
}


 
const headerIniMenuButton = (headerObj)=>{
   
    headerObj.menubuttonin1 = new HTMLComponent ( 
     {tag:"div", innerHTML:``, id:"menubuttonin1-id", classList:["menubuttoninner"]})                 
     
    headerObj.menubuttonin2 = new HTMLComponent ( 
     {tag:"div", innerHTML:``, id:"menubuttonin2-id", classList:["menubuttoninner"]})                 
   
    headerObj.menubuttonin3 = new HTMLComponent ( 
    {tag:"div", innerHTML:``, id:"menubuttonin3-id", classList:["menubuttoninner"]})                 
              
    headerObj.menubutton = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:"menubutton-id", classList:["menubutton"]},
      children:[headerObj.menubuttonin1,headerObj.menubuttonin2,headerObj.menubuttonin3]});
    
}


    
const headerNavButton = (moduleObj, content = {modulename:`Random`, moduleid:`random`,
    iconsclasslist:["fas", "fa-ellipsis-h"],
    description: `Here's the module random that decribe the following function`,
    descriptionItems: [ `Elt1`,`Elt1`,`Elt2`]
}) => {

    const id = `-id`; 
    
    let moduleButtIcon = strConcat([content.moduleid, `NavButtomIcon`]);
    
     
    moduleObj[content.moduleid] = {};
    

    moduleObj[content.moduleid][moduleButtIcon]   = new HTMLComponent ( 
     {tag:"div", innerHTML:``, id:strConcat([moduleButtIcon, id]), classList:content.iconsclasslist})                 
     

     let moduleTitleText = strConcat([content.moduleid, `NavTitletext`]);
     moduleObj[content.moduleid][moduleTitleText] = new HTMLComponent ( 
     {tag:"div", innerHTML:content.modulename, id:strConcat([moduleTitleText,id]), classList:[moduleTitleText]})                 


     let navButton = strConcat([content.moduleid, `NavButton`]);

     moduleObj[content.moduleid][navButton] = new HTMLContainer ( 
        {
       container:{tag:"div", innerHTML:"", id: strConcat([navButton,id]), classList:["navbutton"]},
       children:[ moduleObj[content.moduleid][moduleButtIcon], moduleObj[content.moduleid][moduleTitleText] ]});


    let navListButton = strConcat([content.moduleid, `NavListButton`]);   


    moduleObj[content.moduleid][navListButton] = new HTMLContainer ( 
    {
    container:{tag:"li", innerHTML:"", id:strConcat([navListButton,id]), classList:["navlistbutton"]},
    children:[  moduleObj[content.moduleid][navButton]]});
    
    return moduleObj[content.moduleid][navListButton]; 

}

const headerIniNav = (moduleObj)=>{
    
    let navbuttonItems = [];
    Object.keys(modules_description).forEach(key => {
        let navButton =  headerNavButton(moduleObj, modules_description[key]);
        navbuttonItems.push(navButton);
     });

     moduleObj.navul = new HTMLContainer ({
     container:{tag:"ul", innerHTML:"", id:"navul-id", classList:["navul"]},
     children:navbuttonItems });     
     
     moduleObj.nav = new HTMLContainer ({
     container:{tag:"nav", innerHTML:"", id:"nav-id", classList:["nav"]},
     children:[ moduleObj.navul ]});

}


const headerIniMenu = (headerObj)=>{
               
    headerObj.menu = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:"menu-id", classList:["menu"]},
      children:[headerObj.logo,headerObj.menubutton]});
    
}



const headerEventsIni = (headerObj)=>{
    headerObj.navbuttonhome.$.addEventListener('click',()=>{
        
        homeIni(home);
    })

 };


const headerIni = (headerObj)=>{
   
    headerIniLogo(headerObj);
    
    headerIniMenuButton(headerObj);
    headerIniNav(headerObj); 
    headerIniMenu(headerObj);
    document.querySelector('#header-id').appendChild( headerObj.menu.$);
    document.querySelector('#header-id').appendChild( headerObj.nav.$);
   // headerEventsIni(headerObj);

}

