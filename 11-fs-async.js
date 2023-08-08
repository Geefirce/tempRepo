const {readFile, writeFile} = require('fs');
console.log('start');
readFile('./content/first.txt', 'utf-8', (err, data)=>{
  
    if(err) {
    console.log({error : 'this is an error'})
    return;
    }
    const first = data; 
    
    readFile('./content/second.txt', 'utf-8', (err, data) => {

    if(err) {
        console.log({error : 'this is an error'});
        return;
        }  const second = data;

        writeFile('./content/secondnew-File.txt',
            `here is tthe result: ${first} , ${second}`,
                 (err, data) => {
                if(err) {
                           console.log(err)
                 return;
                }
                 console.log('done with this task ');

      })
    
    });
    
    
    
});
console.log('starting next task');