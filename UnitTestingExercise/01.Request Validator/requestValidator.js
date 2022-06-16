function requestValidator(objHTTP) {
    let validVersions = [ 'HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    let method = objHTTP.method

    let expession = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expession)
    let url = objHTTP.uri

    if(!objHTTP.hasOwnProperty('uri')){
        throw new Error("Invalid request header: Invalid URI")
    }
    if(!objHTTP.hasOwnProperty('method')){
        throw new Error("Invalid request header: Invalid Method")
    }

    if(!objHTTP.hasOwnProperty('version')){
        throw new Error("Invalid request header: Invalid Version")
    }
    if(!objHTTP.hasOwnProperty('message')){
        throw new Error("Invalid request header: Invalid Message")
    }



    if(!url.match(regex) || !url.match == '*'){
        throw new Error("Invalid request header: Invalid URL")
    }
    if(validMethods.indexOf(method) == -1){
        throw new Error("Invalid request header: Invalid Method")
    }
    if(validVersions.indexOf(objHTTP.version) == -1){
        throw new Error("Invalid request header: Invalid Version")
    }
    let regex2 = /^[^<>\&\'\"]+$/g
    if(!(objHTTP.hasOwnProperty('message')) && (obj.message == '' || regex2.test(objHTTP.message))){
        throw new Error("Invalid request header: Invalid Message")
 
    }
    return objHTTP
}





console.log(requestValidator({ 

    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
  
  } ))