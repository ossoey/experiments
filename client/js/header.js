
const headerIniLogo = (headerObj)=>{
   
    headerObj.logotext = new HTMLComponent ( 
     {tag:"h1", innerHTML:`EXPERIMENTS`, id:"logotext_id", classList:["logotext"]})                 
     
    headerObj.logotextainer = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:"logotextainer_id", classList:["logotextainer"]},
       children:[headerObj.logotext]});
 
     headerObj.logomoduletext = new HTMLComponent ( 
       {tag:"h2", innerHTML:`Accueil`, id:"logomoduletext_id", classList:["logomoduletext"]})                 
  
     headerObj.logomoduletextainer = new HTMLContainer ( 
         {
           container:{tag:"div", innerHTML:"", id:"logomoduletextainer_id", classList:["logomoduletextainer"]},
           children:[headerObj.logomoduletext]});
         
     headerObj.logo = new HTMLContainer ( 
       {
       container:{tag:"div", innerHTML:"", id:"logo_id", classList:["logo"]},
       children:[headerObj.logotextainer, headerObj.logomoduletextainer ]}); 
}
 
const headerIniMenuButton = (headerObj)=>{
   
    headerObj.menubuttonin1 = new HTMLComponent ( 
     {tag:"div", innerHTML:`--`, id:"menubuttonin1_id", classList:["menubuttoninner"]})                 
     
    headerObj.menubuttonin2 = new HTMLComponent ( 
     {tag:"div", innerHTML:`--`, id:"menubuttonin2_id", classList:["menubuttoninner"]})                 
   
    headerObj.menubuttonin3 = new HTMLComponent ( 
    {tag:"div", innerHTML:`--`, id:"menubuttonin3_id", classList:["menubuttoninner"]})                 
              
    headerObj.menubutton = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:"menubutton_id", classList:["menubutton"]},
      children:[headerObj.menubuttonin1,headerObj.menubuttonin2,headerObj.menubuttonin3]});
    
}

const headerIniNav = (headerObj,buttontag=`button`)=>{
    
    headerObj.navbuttonhome = new HTMLComponent ( 
         {tag:buttontag, innerHTML:`Home`, id:"navbuttonhome_id", classList:["navbutton"]})                 
     
     headerObj.navbuttonrandom = new HTMLComponent ( 
        {tag:buttontag, innerHTML:`Random`, id:"navbuttonrandom_id", classList:["navbutton"]})                 
       
    headerObj.navbuttonmatrix = new HTMLComponent ( 
        {tag:buttontag, innerHTML:`Matrix`, id:"navbuttonmatrix_id", classList:["navbutton"]})                 
          

    headerObj.navbuttonsegmentation = new HTMLComponent ( 
        {tag:buttontag, innerHTML:`Segmentation`, id:"navbuttonsegmentation_id", classList:["navbutton"]})                 

    headerObj.navbuttonvecmentation = new HTMLComponent ( 
        {tag:buttontag, innerHTML:`Vecmentation`, id:"navbuttonvecmentation_id", classList:["navbutton"]})                 
              
                
    headerObj.navlistbuttonhome = new HTMLContainer ( 
        {
       container:{tag:"li", innerHTML:"", id:"navlistbuttonhome_id", classList:["navlistbutton"]},
       children:[ headerObj.navbuttonhome]});
    
    headerObj.navlistbuttonrandom = new HTMLContainer ( 
        {
         container:{tag:"li", innerHTML:"", id:"navlistbuttonrandom_id", classList:["navlistbutton"]},
         children:[ headerObj.navbuttonrandom]});

     headerObj.navlistbuttonmatrix = new HTMLContainer ( 
        {
            container:{tag:"li", innerHTML:"", id:"navlistbuttonmatrix_id", classList:["navlistbutton"]},
            children:[ headerObj.navbuttonmatrix]});
    

        headerObj.navlistbuttonrandom = new HTMLContainer ( 
        {
            container:{tag:"li", innerHTML:"", id:"navlistbuttonrandom_id", classList:["navlistbutton"]},
            children:[ headerObj.navbuttonrandom]});



    headerObj.navlistbuttonsegmentation = new HTMLContainer ( 
        {
        container:{tag:"li", innerHTML:"", id:"navlistbuttonsegmentation_id", classList:["navlistbutton"]},
        children:[ headerObj.navbuttonsegmentation]});
        
    headerObj.navlistbuttonvecmentation = new HTMLContainer ( 
        {
            container:{tag:"li", innerHTML:"", id:"navlistbuttonvecmentation_id", classList:["navlistbutton"]},
            children:[ headerObj.navbuttonvecmentation]});



   
    headerObj.navul = new HTMLContainer ( 
        {
           container:{tag:"ul", innerHTML:"", id:"navul_id", classList:["navul"]},
             children:[  headerObj.navlistbuttonhome , headerObj.navlistbuttonrandom,
                        headerObj.navlistbuttonmatrix, headerObj.navlistbuttonsegmentation,
                        headerObj.navlistbuttonvecmentation 
            
            ]});
    

    headerObj.nav = new HTMLContainer ( 
        {
            container:{tag:"nav", innerHTML:"", id:"nav_id", classList:["nav"]},
                children:[ headerObj.navul ]});
    
                
}



const headerIniMenu = (headerObj)=>{
               
    headerObj.menu = new HTMLContainer ( 
     {
       container:{tag:"div", innerHTML:"", id:"menu_id", classList:["menu"]},
      children:[headerObj.logo, headerObj.menubutton]});
    
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
    document.querySelector('#header').appendChild( headerObj.menu.$);
    document.querySelector('#header').appendChild( headerObj.nav.$);
    headerEventsIni(headerObj);

}

