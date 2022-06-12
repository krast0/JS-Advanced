function argumentInfo(...args) {
    
    let obj = {}
    for (const value of args) {
       let type = typeof value
       console.log(`${type}: ${value}`);

       if(obj[type] == undefined){
        obj[type] = 0
       }
       obj[type]++
       
    }
    let sorted = Object.entries(obj).sort((a,b) => b[1] - a[1])
    for (const entry of sorted) {
        console.log(entry[0] + ' = ' + entry[1]);
    }

}
argumentInfo({ name: 'bob'}, 3.333, 9.999)