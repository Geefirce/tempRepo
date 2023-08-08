
const OS = require('os')


 /// info about current user 

//   const godspower = OS.userInfo();

//    console.log(godspower);





   // this method returns the system up time in seconds




    console.log(`the system upTime is ${OS.uptime()} seconds `)

 const currentOS = {
    name : OS.type(),
    release : OS.release(),
    totalMem :OS.totalmem(),
    freeMem :OS.freemem() ,

 }

  console.log(currentOS);
 

  
     