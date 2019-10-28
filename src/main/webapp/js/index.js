// Mapeando os elementos da DOM
const ElementBody = document.querySelector('body');
ElementBody.setAttribute('onload', 'init()');

var req;
var isIE;

function init() {
    completeField = document.getElementById("complete-field");
    // alert('OK'); Verifica se a função está sendo chamada ao recarregar a página.
}

// cria um URL que contenha dados que possam ser utilizados pelo lado do servidor,
// inicializa um objeto XMLHttpRequest, e
// solicitar que o objeto XMLHttpRequest envie uma solicitação assíncrona para o servidor.
function doCompletion() {
    var url = "autocomplete?action=complete&id=" + escape(completeField.value);
    req = initRequest();
    req.open("GET", url, true);
    req.onreadystatechange = callback;
    req.send(null);
}

function initRequest() {
    if (window.XMLHttpRequest) {
        if (navigator.userAgent.indexOf('MSIE') != -1) {
            isIE = true;
        }
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        isIE = true;
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

// o código acima executa uma verificação de compatibilidade do Browser Firefox e para o Internet Explorer.