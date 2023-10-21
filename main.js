function Celular(marca, modelo, status) {
  this.marca = marca
  this.modelo = modelo
  this.status = status

  this.consultaDisponibilidade = function () {
    if(status == 'disponivel') {
      console.log('Disponivel')
    } else {
      console.log('Nao disponivel')
    }
  }

}

function SmartPhone(marca, modelo, valor, status) {
  this.valor = valor
  
  this.consultaPreco = function() {
    console.log('O ' + this.marca, '' + this.modelo, 'custa R$: ' +this.valor);
  }

  Celular.call(this, marca, modelo, status)
}

function TelefoneFixo(marca, modelo, valor, status) {

  this.valor = valor
  
  this.consultaPreco = function() {
    console.log('O ' + this.marca, '' + this.modelo, 'custa R$: ' +this.valor);
  }

  Celular.call(this, marca, modelo, status)
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

