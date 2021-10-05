var fs = require ('fs');

function add(){
    try {
        if(!fs.existsSync('./logs')) {
            fs.mkdirSync('./logs')
            
        }
        for(let i=0; i<10; i++)
        fs.writeFileSync('./logs/log_'+i+'.txt', 'LOG FILE NUMBER ' + i);       
        
    }
    catch(err) {
        console.log(err)
    
    }
}


function list() {
    try {
        const files = fs.readdirSync('./logs');
        for (const file of files)
          console.log(file);
      } catch (err) {
        console.error(err);
      }
}

 // REMOVE

function remove () {
    try {
        if(fs.existsSync('./logs')){
            
            fs.readdirSync('./logs').map(file => {
                console.log('delete files...' + file)
                fs.rm('./logs/' + file)
            })
        } 
    } catch(err){
        console.error(err);
    } 
}

add()
list()
remove()



