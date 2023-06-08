
 
let matriccontainer;



const matrixIni = (moduleObj)=>{
     document.querySelector('#main-id').innerHTML ="";
     
     let input = new HTMLInputText({input:{  size: "30"}});
     let input1 = new HTMLInputText({input:{  size: "60"}, label :{innerHTML:`JJ colombe `}});
     let input2 = new HTMLInputText({input:{  size: "23"}});


     appendChildElements(document.querySelector('#main-id'), [input.frame.$,input1.frame.$,input2.frame.$]);
}

