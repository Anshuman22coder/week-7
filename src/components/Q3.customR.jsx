


import { useEffect, useState } from "react";


function createReactElement(){

    const divToAppend = document.getElementById('customDivElement');
    const anchorTag = document.createElement('a');

    anchorTag.setAttribute('href', 'https://www.google.com')
    anchorTag.textContent = 'checkout my github';

    divToAppend.appendChild(anchorTag);
}



function CustomComponent() {
    const [showAnchor, setShowAnchor] = useState(true);

  useEffect(()=>{
    if(showAnchor){
        createReactElement();
    }

    setShowAnchor(false);
  },[showAnchor])


  return <div id="customDivElement"></div>;
}

export default CustomComponent;
