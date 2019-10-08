function rot13en(str) {
    var input     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ';
    var output    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm1234567890 ';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
  }

  function rot13de(str) {
    var output     = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 ';
    var input    = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm1234567890 ';
    var index     = x => input.indexOf(x);
    var translate = x => index(x) > -1 ? output[index(x)] : x;
    return str.split('').map(translate).join('');
  }



// encodes the input using caesar rot13 encoding
function rot13_encode(input) {
    return rot13en(input);
}

// decodes the input using caesar rot13 encoding
function rot13_decode(input) {
    return rot13de(input);
}

export {rot13_encode, rot13_decode};