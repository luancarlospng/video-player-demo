document.querySelector('.controle').addEventListener('mouseover', () => {
    let botao = document.getElementsByClassName('btn');

    for (i = 0; i < botao.length; i++) {
        botao[i].style.display = 'inline';
    }

});

document.querySelector('.controle').addEventListener('mouseout', () => {
    let botao = document.getElementsByClassName('btn');

    for (i = 0; i < botao.length; i++) {
        botao[i].style.display = 'none';
    }

});


document.querySelector('.play').addEventListener('click', (e) => {

    const video = document.querySelector('.video');

    if (e.target.id == 'pause') {
        document.querySelector('.play').setAttribute('id', 'play');
        document.querySelector('.play').setAttribute('src', './img/play.png');
        video.pause();
    } else {
        document.querySelector('.play').setAttribute('id', 'pause');
        document.querySelector('.play').setAttribute('src', './img/pause.png');
        video.play();
    }

    function duracao() {
        const tempo = parseInt(video.currentTime);
        console.log(tempo)
        let horas = Math.floor(tempo / 3600);
        let minutos = Math.floor((tempo - (horas * 3600)) / 60);
        let segundos = Math.floor(tempo % 60);
    
        if (horas < 10) {
            horas = '0' + horas;
        }
        if (minutos < 10) {
            minutos = '0' + minutos;
        }
        if (segundos < 10) {
            segundos = '0' + segundos;
        }
        const duracao = horas + ':' + minutos + ':' + segundos;

        document.querySelector('span').innerHTML = duracao;

        const rangeDuracao = document.querySelector('#duracao');

       let value = video.currentTime;
        console.log('value'+value)
        rangeDuracao.setAttribute('value',`${value}`)

    }

    const maximo =  video.duration;
    console.log('value'+maximo)

    document.querySelector('#duracao').setAttribute('max',`${maximo}`)

    setInterval(duracao,1000);

});


let video = document.querySelector('#video');

document.querySelector('#range').addEventListener('input', (e) => {

    let volume = parseInt(e.target.value);

    video.volume = `0.${volume}`;

});

document.querySelector('.controle').addEventListener('mouseover', () => {
    document.querySelector('#range').style.display = 'block';
});

document.querySelector('.controle').addEventListener('mouseout', () => {
    document.querySelector('#range').style.display = 'none';
});


document.querySelector('.volume').addEventListener('click', (e) => {

    const video = document.querySelector('.video');

    let volume = document.querySelector('#range').value;

    if (e.target.id == 'mute') {
        document.querySelector('.volume').setAttribute('src', './img/mute.png');
        document.querySelector('.volume').setAttribute('id', 'volume');
        video.volume = 0;
    } else {
        document.querySelector('.volume').setAttribute('src', './img/volume.png');
        document.querySelector('.volume').setAttribute('id', 'mute');
        video.volume = `0.${volume}`;
    }

});