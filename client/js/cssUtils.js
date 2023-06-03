
 class CSSUtils {
  #params;
  constructor() {
              
  }


  static addRoot(property = "--primary-color",value="blue") {
    let rootElement = document.documentElement;
    rootElement.style.setProperty(property , value );
  }
  
  
  static addRoots(arr =[

      ['--main-head-color', '#505050de'],
      ['--main-body--color', '#ffffff'],
      ['--main-font-family', 'Arial, Helvetica, sans-serif'],
      ['--main-font-color', 'black'],
      ['--main-line-color', 'rgba(0, 217, 255, 0.787)'],
      ['--table-head-color', 'rgba(54, 37, 4, 0.787)'],
      ['--table-body-color1', 'rgba(0, 217, 255, 0.787)'],
      ['--table-alternate-color2', 'rgb(255, 209, 73)'],
      ['--table-font-family', 'Arial, Helvetica, sans-serif'],
      ['--table-font-color', 'rgba(54, 37, 4, 0.787)'],
      ['--h1-font-size', '24px'],
      ['--h2-font-size', '20px'],
      ['', ''],
      ['', ''],
      ['', ''],
 
  ]) {
    arr.forEach((elt) => {
      this.addRoot(elt[0],elt[1]);
    });
  }
  
  static addRule(styleid = "dynamic-style", rule = "#header-id { background-color: red; }") {
  
    let styleElement = document.getElementById(styleid);
 
    let styleSheet = styleElement.sheet;
    
    styleSheet.insertRule(rule , styleSheet.cssRules.length);

    console.log( styleSheet)

  }

}

