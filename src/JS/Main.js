


/* button in process of fixing  */

import { OpenMdl, ModalPrd, CloseMdl } from "./Nodes.js";  
import { View } from "./PrintView.js";
import { ViewTwo } from "./PrintView.js";


OpenMdl.addEventListener('click', ()=> {
    ModalPrd.style.clipPath= "circle(141.4% at 0 0)";
});

CloseMdl.addEventListener('click', ()=> {
    ModalPrd.style.clipPath= "circle(0% at 0 0)";
}); 

/* button in process of fixing  */





/* (PrintView) */

window.addEventListener('load',View)

window.addEventListener('load',ViewTwo)



