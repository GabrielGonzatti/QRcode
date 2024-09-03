const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#btn');
const qrCodeInput = document.querySelector('#input-text');
const qrCodeImg = document.querySelector('#qrCodeImg');

//GERAR QR CODE
function gerarQRCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerHTML = "Gerando Código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    //FAZ O LOAD PRIMEIRO E DEPOIS EXECUTA O QUE ESTIVER DENTRO
    qrCodeImg.addEventListener("load",() => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = "Código Gerado!"
    })


}

qrCodeBtn.addEventListener('click', () => {
    gerarQRCode();
});

qrCodeInput.addEventListener('keydown', (e) => {
    if(e.code === 'ENTER') {
        gerarQRCode();
    }
})

// LIMPAR ÁREA DO QR CODE

qrCodeInput.addEventListener('keyup', () => {
    //VAI VALIDAR SE O CAMPO INPUT EXISTE (SE TEM VALOR) SE NÃO TIVER, DESATIVA O QR CODE E VOLTA O GERAR QR CODE AO NORMAL
    if(!qrCodeInput.value){
        container.classList.remove('active');
        qrCodeBtn.innerHTML = "Gerar QR Code";
    }
})
