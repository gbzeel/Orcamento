const campo = (x) => document.getElementById(x);
const valor = (x) => campo(x).value;
const criarElemento = (x) => {
    const elemento = document.createElement('li');
    elemento.innerText = `${this.key}: R$ ${(x.toFixed(2))}`;
    elemento.id = this.key;
    campo('lista').appendChild(elemento);
}

const setor = {
    Alimentação: 0,
    Transporte: 0,
    Lazer: 0,
    Outros: 0,
    Total: function () {
        return this.Alimentação + this.Transporte + this.Lazer + this.Outros;
    }
}

const incrementa = (x) => {
    const elemento = campo(this.key);
    elemento.innerText = `${this.key}: R$ ${x.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    for (key in setor) {
        if (typeof (this.key) == 'number') {
            criarElemento(setor[key]);
        }else {
            criarElemento(setor.Total())
        }
    }
})

campo('btn').addEventListener('click', () => {
    if (!(valor('valorDigitado').replace(',','.') > 0)){
        alert('Digite um valor válido')
    }else{
        setor[valor('tipoDeGasto').replace(',','.')] += Number(valor('valorDigitado'));
    }
    for (key in setor) {
        if (typeof (setor[key]) == 'number') {
            incrementa(setor[key]);
        }else {
            incrementa(setor.Total());
        }
    }
})