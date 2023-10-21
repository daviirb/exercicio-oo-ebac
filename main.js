class Celular {
  constructor(marca, modelo, valor, status) {
    this.marca = marca
    this.modelo = modelo
    this.valor = valor
    this.status = status
  }

  consultaDisponibilidade = () => {
    if(this.status == 'disponivel') {
      console.log('Disponivel')
    } else {
      console.log('Nao disponivel')
    }
  }

}

class SmartPhone extends Celular{

  consultaPreco = () => {
    console.log('O ' + this.marca, '' + this.modelo, 'custa R$: ' +this.valor);
  }
}

class TelefoneFixo extends Celular{

  consultaPreco = () => {
    console.log('O ' + this.marca, '' + this.modelo, 'custa R$: ' +this.valor);
  }
}

const iphone = new SmartPhone('Apple','Iphone 14 Pro Max', 7500.00, 'disponivel')
const samsung = new SmartPhone('Samsung','Galaxy Note', 4599.00, 'disponivel')

const motorola = new TelefoneFixo('Motorola','Moto G', 759.99, 'indisponivel')
const nokia = new TelefoneFixo('Nokia', '2533', 299, 'disponivel')


iphone.consultaPreco()
iphone.consultaDisponibilidade()

samsung.consultaPreco()
samsung.consultaDisponibilidade()

motorola.consultaPreco()
motorola.consultaDisponibilidade()

nokia.consultaPreco()
nokia.consultaDisponibilidade()

