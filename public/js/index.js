$(document).ready(()=> {

    let encrypt = true;
    let selectedEnc = 0;

    // Select radio to encrypt or decrypt
    $('#radio input').change((e)=> {
        if(e.currentTarget.value == 'decrypt') {
            $('button').html(`<i class="fa fa-key"></i>`);
            encrypt = false;
        } else {
            $('button').html(`<i class="fa fa-lock"></i>`);
            encrypt = true;
        }
    });

    // Init encrypt demo
    const enigma = new Enigma();
    let msg = $('#txt').val().replaceAll(' ', '&');
    $('#app p').text(enigma.cesar(msg, true));

    // Display encrypted or decrypted message on form submit
    $('form').submit((e)=> {
        e.preventDefault();
        const val = $('#txt').val();
        const txt = val.replaceAll(' ', '&'); 
        let enc = txt;

        let numCesar = parseInt($('#cesar').val()) + 1;
        let numReverese = parseInt($('#reverse').val()) + 1;


        switch (parseInt(selectedEnc)) {
            case 0:
                for (let i = 0; i < numCesar; i++) {
                    enc = enigma.cesar(enc, encrypt);
                }
        
                for (let i = 0; i < numReverese; i++) {
                    enc = enigma.reverse(enc, encrypt);
                }
            break;

            case 1:
                enc = enigma.cesar(enc, encrypt);
            break;

            case 2: 
                enc = enigma.reverse(enc, encrypt);
            break;

            default:
                console.log('Something wrong!');
            break;
        }
        
        if(encrypt) {
            $('#app p').text(enc);
        } else {
            $('#app p').text(enc.replaceAll('&', ' '));
        }
    });


    // Select enctype
    $('#select-enctype').change((e)=> {
        selectedEnc = e.currentTarget.value;
        const enabled = selectedEnc != 0;

        $('#code input').attr({disabled: enabled});

        if(enabled) {
            $('#code input').val(0);
        }
    })


    $('#a-about').click(()=> {
        $('body, html').animate({scrollTop: innerHeight});
    })

    $('#a-api').click(()=> {
        $('body, html').animate({scrollTop: 2*innerHeight});
    })

    $('#btn-gotop').click(()=> {
        $("body, html").animate({scrollTop: 0});
    });

    $(window).scroll(()=> {
        if(scrollY > 20) {
            $('#btn-gotop').css({"transform": "scale(1)"});
        } else {
            $('#btn-gotop').css({"transform": "scale(0)"});
        }
    });
});