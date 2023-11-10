function tocaSomPom(seletorAudio){
   const elemento = document.querySelector(seletorAudio).;
}

const listaDeteclas = document.querySelectorAll('.tecla');

for ( let contador = 0; contador < listaDeteclas.length;contador++)}

    const tecla = listaDeteclas[contador];

    const instrumento = tecla.classList [1];

    const idAdio = `#som_${instrumento}`;

    tecla.onclick = function{
        tocaSomPom(idAudio);
    };

        tecla.onkeydow = function (evento){
            if (evento.code === 'Space') || evento.code === ' Enter'}
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (evento){
        tecla.classList.remove('ativa');
    }