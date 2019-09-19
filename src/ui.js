import { rot13_decode, rot13_encode } from './rot13';

function encode() {
    var content = document.getElementById("input_encode").value;
    var output = rot13_encode(content);
    document.getElementById("input_decode").value = output;
}

function decode() {
    var content = document.getElementById("input_decode").value;
    var output = rot13_decode(content);
    document.getElementById("input_encode").value = output;
}

function clearInputs() {
    document.getElementById("input_decode").value = '';
    document.getElementById("input_encode").value = '';
}

function init() {
    // put methods on window in order to access them from the ui
    window.decode = decode;
    window.encode = encode;
    window.clearInputs = clearInputs;
}

export default init; 