function encodeAndDecodeMessages() {
    
    let EncodeTextAreaElement = document.querySelector('#main textarea')
    let EncodeButtonElement = document.querySelector('#main button')
    let DecodeTextAreaElement = document.querySelectorAll('#main textarea')[1]
    let DecodeButtonElement = document.querySelectorAll('#main button')[1]
    let decoded = ''

    EncodeButtonElement.addEventListener('click',Encode)

    DecodeButtonElement.addEventListener('click',Decode)

    function Decode(e){
        DecodeTextAreaElement.value = decoded
    }

    function Encode(e){
        let textToDecode = EncodeTextAreaElement.value
        if(!textToDecode.length == 0){
        decoded = textToDecode
        let array = []
        let string = ''
        for (let el of textToDecode) {
            let convertedEl = el.charCodeAt() + 1
            array.push(convertedEl)
        }

        for (let el of array) {
            let convertedASCII = String.fromCharCode(el)
            string += convertedASCII
        }
        EncodeTextAreaElement.value = ''
        DecodeTextAreaElement.value = string
    }else{
        return null
    }
    }
    
}