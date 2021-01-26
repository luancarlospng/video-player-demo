const video = document.querySelector('video');

// inicia o video.duration
window.addEventListener('load', iniciar);

function iniciar() {

    duracaoTotal = video.duration;
};
//final

//Escondendo os controles

document.querySelector('.container').addEventListener('mouseover', () => {
    document.querySelector('.controles').style.display = 'block';
});

document.querySelector('.container').addEventListener('mouseout', () => {
    document.querySelector('.controles').style.display = 'none';
});

//final


//Função de play e pause
document.querySelector('#botaoPlay').addEventListener('click', () => {

    let botao = document.querySelector('#botaoPlay');
    if (video.paused) {
        botao.value = '||';
        video.play()
    } else {
        botao.value = '|>';
        video.pause()
    }

});
//final

//Função de volume

document.querySelector('#volume').addEventListener('input', (e) => {
    let volume = e.target.value;

    video.volume = `0.${volume}`;

    if (volume < 1) {
        document.querySelector('#spanVolume').innerHTML = 'mute';
    }
    if (volume >= 1 && volume < 5) {
        document.querySelector('#spanVolume').innerHTML = 'baixo';
    }
    if (volume == 5) {
        document.querySelector('#spanVolume').innerHTML = 'médio';
    }
    if (volume > 5) {
        document.querySelector('#spanVolume').innerHTML = 'alto';
    }
    if (volume > 9) {
        video.volume = 1.0;
        document.querySelector('#spanVolume').innerHTML = 'maximo';
    }

});

//final

//Barra de progresso

function tempo() {

    let tempo = video.currentTime;

    if (!video.paused) {
        var horas = Math.floor(tempo / 3600);
        var minutos = Math.floor((tempo - (horas * 3600)) / 60);
        var segundos = Math.floor(tempo % 60);

        if (horas < 10) {
            horas = '0' + horas
        }
        if (minutos < 10) {
            minutos = '0' + minutos
        }
        if (segundos < 10) {
            segundos = '0' + segundos
        }

        document.querySelector('#tempo').innerHTML = horas + ':' + minutos + ':' + segundos;

        document.querySelector('#rangeProgresso').setAttribute('value', video.currentTime);
    }

    document.querySelector('#rangeProgresso').setAttribute('max', video.duration);
    
}

let tempoTotal = setInterval(tempo, 1000);
//final

// função pause e play e retomada da barra de progresso.
document.querySelector('#rangeProgresso').addEventListener('mousedown', () => {

    video.pause();
    document.querySelector('#botaoPlay').value = '||';

    document.querySelector('#rangeProgresso').addEventListener('input', (e) => {
        video.currentTime = e.target.value;
    });

});

document.querySelector('#rangeProgresso').addEventListener('mouseup', () => {
    video.play();
    document.querySelector('#botaoPlay').value = '|>';

    function retomando() {
        let value = document.querySelector('#rangeProgresso').getAttribute('value');

        document.querySelector('#rangeProgresso').value = value;
    }
    setInterval(retomando,1000);
});
//final

// função de duplo click de pause e play
video.addEventListener('dblclick',()=>{
    if(!video.paused){
        video.pause();
        document.querySelector('#botaoPlay').value = '|>';
    }else{
        video.play();
        document.querySelector('#botaoPlay').value = '||';
    }
});
//final

//Testando função tela full screen ou normal screen

/* document.querySelector('#tela').addEventListener('click',()=>{
    if(video.requestFullscreen){
        video.requestFullscreen()
    }else{
        video.exitFullscreen()
    }
}); */

//final