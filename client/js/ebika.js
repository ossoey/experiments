 /* 
   Copyright (c) 2013-2023 Ossoey. 
   All rights reserved.
*/

/* module for the Ossoey Segmentation */ 
/* module authored by ebanga@ossoey.com/ebanga@homail.com */

const SEGMETATION_TYPE_LIN = 0;
const SEGMETATION_TYPE_TRI = 1;
const SEGMETATION_TYPES  = [SEGMETATION_TYPE_LIN, SEGMETATION_TYPE_TRI];
const SEGMETATION_TYPE_LIN_STR = 'Linear';
const SEGMETATION_TYPE_TRI_STR = 'Trigo';
const SEGMETATION_TYPES_STR    = [SEGMETATION_TYPE_LIN_STR, SEGMETATION_TYPE_TRI_STR];
const MAX_FLOATING = 4;


let Matrix = {};

Matrix.vector = (biPoints =[[1,0,0],[0,1,0]]) => {
    let vector  = [];
    for(let comp = 0;comp<biPoints[0].length;comp++){
        vector.push(biPoints[1][comp]-biPoints[0][comp]);
    };
    return vector;
};

Matrix.magnitude = (vector =[1,2,3]) => {
    let mag = 0;
    for(let comp = 0;comp<vector.length;comp++){
        mag += Math.pow( vector[comp],2);
    };
    return Math.sqrt(mag);
};

Matrix.distance = (biPoints =[[1,0,0],[0,1,0]]) => {
    return Matrix.magnitude( Matrix.vector(biPoints));
};

Matrix.distance = (biPoints =[[1,0,0],[0,1,0]]) => {
    return Matrix.magnitude( Matrix.vector(biPoints));
};

Matrix.dotProduct = (biVectors =[[1,0,0],[0,1,0]]) => {
    let dot = 0;
    for(let comp = 0;comp<biVectors[0].length;comp++){
        dot +=  biVectors[1][comp]*biVectors[0][comp];
    };
    return dot;
};

Matrix.vectorSum = (biVectors =[[1,0,0],[0,1,0]]) => {
    let sum = [];
    for(let comp = 0;comp<biVectors[0].length;comp++){
        sum.push(0);
    };

    for(let comp = 0;comp<biVectors[0].length;comp++){
        biVectors.forEach(vector=>{
            sum[comp]+=vector[comp]
        }) 
    };
    return sum
};

Matrix.vectorVScale = (biVectors =[[1,0,0],[0,1,0]]) => {
    let scaled = [];
    for(let comp = 0;comp<biVectors[0].length;comp++){
        scaled.push(1);
    };

    for(let comp = 0;comp<biVectors[0].length;comp++){
        biVectors.forEach(vector=>{
            scaled[comp]*=vector[comp].toFixed(MAX_FLOATING);
        }) 
    };
    return scaled;
};

Matrix.vectorScale = (vector =[1,2,3], scalar = 0.5) => {
    let vScalar= [];
    for(let comp = 0;comp<vector.length;comp++){
        vScalar.push(scalar);
    };
    return Matrix.vectorVScale([vector,vScalar]);
};

Matrix.pathDistances = (path =[[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]]) => {
    let distances = [], cumulative = 0, section=0;
    distances.push({key:0,section:0,cumulative:0});     
    for(let position = 1;position<path.length;position++){
        section = Matrix.distance([path[position-1],path[position]]);  
        cumulative+=section;
        distances.push({key:position,section:section,cumulative:cumulative});
    };
    return distances;
};

Matrix.pathDistanceRatios = (path =[[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]]) => {
    let ratios = [], cumulative = 0, section=0;
    let data = {} 
     data.header = ["Index","Location"] 
    let distances = Matrix.pathDistances(path);
    let pathSize = distances[distances.length-1].cumulative;
    for(let position = 0;position<distances.length;position++){
          let item = distances[position];
          ratios.push({key:position,section:item.section/pathSize,cumulative:item.cumulative/pathSize, 
          position:path[position] });         
    };
    data 
    return ratios;
};

Matrix.Goto = class MatrixGoto {
    #params;
    constructor(params = {path:[[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]]}) {
                  
      this.#params = {path:[[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]]};
    
      Object.assign(this.#params,params);
      this.#params.distancesRatios =  Matrix.pathDistanceRatios(this.#params.path);
    }

    _update(params = {path:[[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]] }) {
         Object.assign(this.#params,params);
         this.#params.distancesRatios =  Matrix.pathDistanceRatios(this.#params.path);
    }

    outParams() {
      return Object.assign({},this.#params);
    }

    #findTargetSection() {
        let sectionIndex, positionIndex = 1;
       
       while(this.#params.ratio> this.#params.distancesRatios[positionIndex].cumulative) {
           positionIndex++;
       };
       sectionIndex =  positionIndex-1;  
       return sectionIndex;

   }; 

   #findRatioInCurrentSection(sectionIndex){
      let result,distancesRatios =  this.#params.distancesRatios;
      if (sectionIndex <1) result = this.#params.ratio
      else result  = (this.#params.ratio - distancesRatios[sectionIndex].cumulative)/(distancesRatios[sectionIndex+1].cumulative - distancesRatios[sectionIndex].cumulative);
      return result;
   };

   #locatePosition(sectionIndex,currentRatio){
      let origin = this.#params.path[sectionIndex], 
      sectionVector = Matrix.vector([this.#params.path[sectionIndex],this.#params.path[sectionIndex+1]]);
      return  Matrix.vectorSum( [origin,Matrix.vectorScale(sectionVector,currentRatio)]);  
   };

   location(ratio){
        let result;
        this.#params.ratio = ratio;
        if (this.#params.ratio<=0.) {
            result = this.#params.path[0];
        } else if  (this.#params.ratio >1.) {
            result = this.#params.path[this.#params.path.length-1];
        } else {
            let sectionIndex = this.#findTargetSection();
            let ratioInCurrentSection = this.#findRatioInCurrentSection(sectionIndex);
            result =  this.#locatePosition(sectionIndex,ratioInCurrentSection );
        }

        return result;
    }

    locations(ratios){
        let  result=[];
        ratios.forEach( (ratio,index) =>{
            result.push({index:index,location: this.location(ratio)});
        });
        return result;
    }
    
}

Matrix.params = {} ;
Matrix.params.biPoints= [[1,0,0],[0,1,0]];
Matrix.params.biVectors= [[1,2,3],[4,5,6]];
Matrix.params.path = [[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]];
Matrix.params.ratio = 0.2;
Matrix.params.ratios = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];
Matrix.params.vector = [1,2,3];

Matrix.outParams =  ( )=> {
    return Object.assign({},Matrix.params);
}  


let Rand = {};

Rand.functionToArr = ( func ='fBetween', interval=[0. ,10.], length=10, disruptfact =[0.,1.]) => {
    let arr = [];
    for(let i = 0; i<length;i++){
        arr.push(  { index: i,value:Rand[func](interval,disruptfact) });
    };
    return arr;
};

Rand.fBetween = (interval=[0. ,10.]) => {
    return Math.random() * (interval[1] - interval[0]) + interval[0];
};


Rand.iBetween =    (interval=[0 ,10]) => {   
    return Math.floor(Rand.fBetween([interval[0],interval[1]+1]));
};

Rand.fDisruption = (interval=[0. ,10.], disruptfact =[0.,1.]) => {
    let actualMin  = interval[0] + disruptfact[0]*(interval[1] -interval[0]);
    let actualMax  = interval[0] + disruptfact[1]*(interval[1] -interval[0]);
    return Rand.fBetween([actualMin,actualMax] ) ;
};

Rand.iDisruption =  (interval=[0. ,10.], disruptfact =[0.,1.])  => {
    let actualMin  = interval[0] + disruptfact[0]*(interval[1] -interval[0]);
    let actualMax  = interval[0] + disruptfact[1]*(interval[1] -interval[0]);
    return Rand.iBetween([actualMin,actualMax] ) ;
};

Rand.fBetweenArr = (interval=[0. ,10.], length=10,) => {
    return  Rand.functionToArr('fBetween',interval,length);
};

Rand.iBetweenArr =  (interval=[0 ,10], length=10,) => {   
    return  Rand.functionToArr('iBetween',interval,length);
};

Rand.fDisruptionArr = (interval=[0. ,10.], disruptfact =[0.,1.], length=10) => {
    return Rand.functionToArr('fDisruption',interval,length,disruptfact);
};

Rand.iDisruptionArr =  (interval=[0. ,10.], disruptfact =[0.,1.], length=10)  => {
    return  Rand.functionToArr('iDisruption',interval,length,disruptfact);
};


Rand.mix =  (arr = [0,1,2,3,4,5,6,7,8,9,10])=> {
   let arrOut = [];
    while (arr.length >1) {
     let randvalue = arr[Rand.iBetween([0,arr.length-1])];
       arrOut.push( randvalue);
       let indexToDelete = arr.indexOf( randvalue  );
        arr.splice(indexToDelete, 1);
   };
    arrOut.push(arr[0]);

   return arrOut;
};

Rand.extractSub =   (arr = [1,2,3,4,5,6,7,8,9,10], length=5) => {
    let result;
    if((length >0) &&(length <= arr.length)){
        result = Rand.mix(arr).slice(0,length);
    } else  result = Rand.mix(arr).slice();
    return  result;
};

Rand.extractElt =  (arr = [1,2,3,4,5,6,7,8,9,10]) => {
    return  arr[ Rand.iBetween([0,arr.length-1])];
};

Rand.indicesDichotomie =  (dichLength = 10, dichFact = 0.5 )=> {

    let arrInitial  = [], arrleft = [],
     chosenLength = Math.floor( dichLength*dichFact);

    for (let i= 0;i<dichLength;i++ ){
        arrInitial.push(i);
    }

    for (let i= 0;i<chosenLength;i++ ){
       let elt = Rand.extractElt(arrInitial);
        arrleft.push(elt);
        arrInitial.splice(arrInitial.indexOf(elt),1);
    }

    return {left:arrleft, right:arrInitial};
};


Rand.dichotomieArr =  (arr = [1,2,3,4,5,6,7,8,9,10], dichFact = 0.5 )=> {
   let dichIndex = Rand.indicesDichotomie(arr.length,dichFact);
   let unified = [].concat(dichIndex.left,dichIndex.right);
   let result = [];
   unified.forEach( elt => result.push(arr[elt]) );
   return result;
};


Rand.outParams =  ( )=> {
    return Object.assign({},Rand.params);
}    

Rand.params = {} ;
Rand.params.interval=[0. ,10.];
Rand.params.disruptfact =[0.,1.];
Rand.params.lengthparam = 10;
Rand.params.lengtharray = 12;
Rand.params.arr = [0,1,2,3,4,5,6,7,8,9,10];
Rand.params.dichFact = 0.5;

Rand.testsdata = {};
Rand.testsdata.minmaxarr = [[5,9], [-15,20], [102.52, 309.19],[-100,-2004.7]];
Rand.testsdata.disruptFact = [[0.0,1.0], [0.0,0.10], [0.11,0.199],[0.20,0.299],
                              [.3,0.399], [0.4,0.499], [0.5,0.59],[0.6,0.69],
                              [.7,0.799], [0.8,0.899], [0.9,0.99],[0.9,1.0],                            
                           ];

Rand.testsdata.arrformix = [0,1,2,3,4,5,6,7,8,9,10];
Rand.testsdata.length = 5;
Rand.testsdata.dichLength = 10;
Rand.testsdata.dichFact = 0.2;

Rand.tests = function () {
    let testPipe = ()=>{
        console.log('TESTS');
        console.log("mix:(",Rand.testsdata.arrformix.slice(),"):", Rand.mix(Rand.testsdata.arrformix.slice()));
        console.log("subMix:(", Rand.testsdata.arrformix.slice(),Rand.testsdata.length,"):",  Rand.subMix(Rand.testsdata.arrformix.slice() , Rand.testsdata.length));
        console.log("pickFromSet:(",Rand.testsdata.arrformix.slice(),"):", Rand.pickFromSet(Rand.testsdata.arrformix.slice()));
        console.log("indicesDichotomie:(",Rand.testsdata.dichLength,Rand.testsdata.dichFact,"):", Rand.indicesDichotomie(Rand.testsdata.dichLength ,Rand.testsdata.dichFact));
        Rand.testsdata.minmaxarr.forEach(elt=>{
            console.log('---------------------------------------Between params:',elt[0],',',elt[1]);
            console.log("fBetween(",elt[0],',',elt[1] ,"):",Rand.fBetween(elt)) ;
            console.log("intBetween(",elt[0],',',elt[1] ,"):",Rand.iBetween(elt));
            console.log("fBetweenArr(",elt[0],',',elt[1] ,',' ,Rand.testsdata.length,"):",Rand.fBetweenArr(elt,Rand.testsdata.length)) ;
            console.log("iBetweenArr(",elt[0],',',elt[1] ,',' ,Rand.testsdata.length,"):",Rand.iBetweenArr(elt,Rand.testsdata.length)) ;

            console.log('------------------------------Disruption params:',elt[0],',',elt[1]);
            Rand.testsdata.disruptFact.forEach(elt1=>{
                console.log("fDisruption(" ,elt[0],',',elt[1] ,elt1[0],',',elt1[1],"):",Rand.fDisruption(elt,elt1));
                console.log("iDisruption(",elt[0],',',elt[1] ,elt1[0],',',elt1[1],"):",Rand.iDisruption(elt,elt1)); 
                console.log("fDisruptionArr(",elt[0],',',elt[1] ,elt1[0],',',elt1[1],',' ,Rand.testsdata.length,"):",Rand.fDisruptionArr(elt,elt1,Rand.testsdata.length));     
                console.log("iDisruptionArr(",elt[0],',',elt[1] ,elt1[0],',',elt1[1],',' ,Rand.testsdata.length,"):",Rand.iDisruptionArr(elt,elt1,Rand.testsdata.length));             
            });            
        });
       
    }
    testPipe();
};

class SegmentationLinear {
    #params;
    constructor(params = {segCount:17, target : [8, 18], funcDomain :[1,2], disrupt: [1., 1.],
        func:  (x)=>{
            return 1/x;
        } }) {
                  
      this.#params = {segCount:17, target : [8, 18], funcDomain :[1,2], disrupt: [1., 1.],
        func:  (x)=>{
            return 1/x;
        } };
      
      this.type = SEGMETATION_TYPE_LIN ;
      this.optionsIni();
      Object.assign(this.#params,params);
    }

    _update(params = {segCount:17, target : [8, 18], funcDomain :[1,2], disrupt: [1., 1.],
        func:  (x)=>{
            return 1/x;
        }
    
    }) {
         Object.assign(this.#params,params);
    }

    optionsIni (){
       this.#params.options = [
        "return 2*x",
        "return Math.pow(2,x)",
        "return Math.pow(3,x)",
        "return Math.pow(9,x)",
        "return 1/(2*x+1)",
        "return 1/Math.pow(2,x)",
        "return 1/Math.pow(3,x)",
       ];
    }

    outParams() {
      return Object.assign({},this.#params);
    }

    locatePure(index ){

        let func = this.#params.func,
            funcDomain = this.#params.funcDomain,
            segCount = this.#params.segCount,
            target   = this.#params.target;

        let funcRatio =()=>{
       
             return  1-(func( funcDomain[1]) - func( funcDomain[0]+(1/segCount)*index))/ (func( funcDomain[1]) - func( funcDomain[0]))              
         }
         
         let funcTarget = (ratio)=>{
       
             return  target[0] + ratio*(target[1]-target[0]);       
         }
         
         return  funcTarget(funcRatio());
     }

     locate(index ){

         let result;

         if ((index<=0)||((index>=this.#params.segCount))){
            result =  this.locatePure(index );    
         }
         else {
            let temp1 = this.locatePure(index-1); 
            let temp2 = this.locatePure(index);  
            result    = Rand.fDisruption([temp1,temp2],this.#params.disrupt);    
         }

         return   result;
      }

     array(){

        let arr = [],
            segCount = this.#params.segCount;
        for(let step = 0; step <= segCount; step++  ){
            arr.push( this.locate(step)); 
        }

        return arr;
     }

     arrayIndicesAndValues(){

        let arr = [],
            segCount = this.#params.segCount;
        for(let step = 0; step <= segCount; step++  ){
            arr.push( [step,this.locate(step)]); 
        }

        return arr;
     }

     arrayDictionary(){

        let arr = [],
            segCount = this.#params.segCount;
        for(let step = 0; step <= segCount; step++  ){
            let value = this.locate(step)   
            arr.push( { index: step,value:value }); 
        }

        return arr;
     }
    
}
  
class SegmentationTrigo{
    #params;
    constructor(params = {segCount:17, target : [8, 18], disrupt: [1., 1.],
        func:  (x)=>{
            return Math.sin(x);
        } }) {
    
        this.#params ={segCount:17, target : [8, 18], disrupt: [1., 1.],
            func:  (x)=>{
                return Math.sin(x);
         } };
 
      this.type = SEGMETATION_TYPE_TRI;
      this.optionsIni();   
      Object.assign(this.#params,params);
    }

    _update(params = {segCount:17, target : [8, 18], disrupt: [1., 1.],
        func:  (x)=>{
            return Math.sin(x);
        } }) {
         Object.assign(this.#params,params);
    }

    optionsIni (){
        this.#params.options = [
         "return Math.sin(x)",
         "return Math.cos(x)",
         "return Math.tan(x)",
         "return Math.sin(2*x)",
         "return Math.sin(3*x)",
         "return Math.sin(5*x)",
         "return Math.sin(1.5*x)",
         "return Math.cos(2*x)",
         "return Math.cos(3*x)",
         "return Math.cos(5*x)",
         "return Math.cos(1.5*x)",
        ];
     }
 
    outParams() {
      return Object.assign({},this.#params);
    }

    locatePure(index ){

        let func = this.#params.func,
            segCount = this.#params.segCount,
            target   = this.#params.target;

        let funcRatio =()=>{
            return  Math.abs(func(((2*Math.PI)/segCount)*index) );        
         }
         
         let funcTarget = (ratio)=>{
       
             return  target[0] + ratio*(target[1]-target[0]);       
         }
         
         return  funcTarget(funcRatio());
     }

     locate(index ){

        let result;

        if ((index<=0)||((index>=this.#params.segCount))){
           result =  this.locatePure(index );    
        }
        else {
           let temp1 = this.locatePure(index-1); 
           let temp2 = this.locatePure(index);  
           result    = Rand.fDisruption([temp1,temp2],this.#params.disrupt);    
        }

        return   result;
     }

     array(){
        let arr = [],
            segCount = this.#params.segCount;
        for(let step = 0; step <= segCount; step++  ){
            arr.push(this.locate(step)); 
        }
        return arr;
     }

     arrayIndicesAndValues(){

        let arr = [],
            segCount = this.#params.segCount;
        for(let step = 0; step <= segCount; step++  ){
            arr.push( [step,this.locate(step)]); 
        }

        return arr;
     }     

     arrayDictionary(){

        let arr = [],
            segCount = this.#params.segCount;
        for(let step = 0; step <= segCount; step++  ){
            let value = this.locate(step)   
            arr.push( { index: step,value:value }); 
        }

        return arr;
     }

}

let Segmentation = {
    create: function(type, params) {
      let seg ;
      if (type === SEGMETATION_TYPE_LIN ) {
        seg = new  SegmentationLinear(params);
      } else if (type === SEGMETATION_TYPE_TRI ) {
        seg = new  SegmentationTrigo(params);
      }
      return seg;
    }
};


class VecmentationLinear {
    #params;
    constructor(params = {segCount:17,  path : [[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]],  disrupt: [1., 1.],
        func:  (x)=>{
            return 1/x;
        } }) {
                  
      this.#params = {segCount:17, path : [[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]], disrupt: [1., 1.],
        func:  (x)=>{
            return 1/x;
        } };
      
      this.type = SEGMETATION_TYPE_LIN ;
      this.optionsIni();

      Object.assign(this.#params,params);

      this.#params.seg = new SegmentationLinear({ segCount: this.#params.segCount, disrupt:this.#params.disrupt, func:this.#params.func,   target : [0., 1.] });

      this.#params.goto = new Matrix.Goto({path: this.#params.path});

    }

    _update(params = {segCount:17, path : [[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]],   disrupt: [1., 1.],
        func:  (x)=>{
            return 1/x;
        }
    
    }) {
         Object.assign(this.#params,params);
         this.#params.seg._update({ segCount: this.#params.segCount, disrupt:this.#params.disrupt, func:this.#params.func,   target : [0., 1.] });
         this.#params.goto._update({ path: this.#params.path});
    }

    optionsIni (){
       this.#params.options = [
        "return 2*x",
        "return Math.pow(2,x)",
        "return Math.pow(3,x)",
        "return Math.pow(9,x)",
        "return 1/(2*x+1)",
        "return 1/Math.pow(2,x)",
        "return 1/Math.pow(3,x)",
       ];
    }

    outParams() {
      return Object.assign({},this.#params);
    }

    locate(index ){

         return   this.#params.goto.location(this.#params.seg.locate(index));
    }

    locateArr(){

        let arr = [],
        segCount = this.#params.segCount;
        for(let step = 0; step <= segCount; step++  ){
           arr.push({index:step, position: this.locate(step)}); 
        }
        return  arr;
    }

}
  
class VecmentationTrigo{
    #params;
    constructor(params = {segCount:17, path : [[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]],    disrupt: [1., 1.],
        func:  (x)=>{
            return Math.sin(x);
        } }) {
    
        this.#params ={segCount:17, path : [[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]],  disrupt: [1., 1.],
            func:  (x)=>{
                return Math.sin(x);
         } };
 
      this.type = SEGMETATION_TYPE_TRI;
      this.optionsIni();   
      Object.assign(this.#params,params);
      this.#params.seg = new SegmentationTrigo({ segCount: this.#params.segCount, disrupt:this.#params.disrupt, func:this.#params.func,   target : [0., 1.] });

      this.#params.goto = new Matrix.Goto({path: this.#params.path});
    }

    _update(params = {segCount:17, path : [[0,0,0],[1,1,1],[2,2,2],[3,3,3],[4,4,4]],   disrupt: [1., 1.],
        func:  (x)=>{
            return Math.sin(x);
        } }) {
         Object.assign(this.#params,params);
         this.#params.seg._update({ segCount: this.#params.segCount, disrupt:this.#params.disrupt, func:this.#params.func,   target : [0., 1.] });
         this.#params.goto._update({ path: this.#params.path});
    }

    optionsIni (){
        this.#params.options = [
         "return Math.sin(x)",
         "return Math.cos(x)",
         "return Math.tan(x)",
         "return Math.sin(2*x)",
         "return Math.sin(3*x)",
         "return Math.sin(5*x)",
         "return Math.sin(1.5*x)",
         "return Math.cos(2*x)",
         "return Math.cos(3*x)",
         "return Math.cos(5*x)",
         "return Math.cos(1.5*x)",
        ];
     }
 
    outParams() {
      return Object.assign({},this.#params);
    }


    locate(index ){
        return   this.#params.goto.location(this.#params.seg.locate(index));
    }

    locateArr( ){
        let arr = [],
        segCount = this.#params.segCount;
        for(let step = 0; step <= segCount; step++  ){
           arr.push({index:step, position: this.locate(step)}); 
        }
        return  arr;
    }
}


let Vecmentation = {
    create: function(type, params) {
      let seg ;
      if (type === SEGMETATION_TYPE_LIN ) {
        seg = new  VecmentationLinear(params);
      } else if (type === SEGMETATION_TYPE_TRI ) {
        seg = new  VecmentationTrigo(params);
      }
      return seg;
    }
};


let EBK = {};
EBK.Rand = Rand;
EBK.Matrix = Matrix;
EBK.Segmentation = Segmentation;
EBK.Vecmentation = Vecmentation;