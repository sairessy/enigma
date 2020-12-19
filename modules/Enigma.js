class Enigma {
    cesar(text, encrypt) {
        const txt = text.replace(' ', '^'); 
        let forward = 0;
        let backward = 1;
        let r = [];
        let encrypted = '';
        let decryted = '';

        for (let i = 0; i < txt.length; i++) {    
            if(i % 2 == 0) {
                r.push(txt.length - backward)
                backward++;
            } else {
                r.push(forward);
                forward++;
            }            
        }

        if(encrypt) {            
            r.forEach(num=> {
                encrypted += txt.charAt(num);
            });
    
            return encrypted;

        } else {
            for (let i = 0; i < txt.length; i++) {
                for (let j = 0; j < r.length; j++) {
                    if(i == r[j]) {
                        decryted += txt.charAt(j);
                        break;
                    }
                }
            }
            
            return decryted;
        }
    }

    reverse(txt) {
        let encrypted = '';

        for(let i = txt.length; i >= 0; i--) {
            encrypted += txt.charAt(i);
        }

        return encrypted;
    }
}

module.exports = Enigma;