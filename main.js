function Celular(marca) {
  this.marca = marca;
  this.dizMarca = function() {
    console.log('Marca: ' +this.marca);
  }
  
}

function SmartPhone(marca, modelo, valor) {
  this.modelo = modelo
  this.valor = valor
  
  this.consultaPreco = function() {
    console.log('O ' + this.marca, '' + this.modelo, 'custa R$: ' +this.valor);

  }

  Celular.call(this, marca)

}

const iphone = new SmartPhone('Apple','Iphone 14 Pro Max', 7500)

iphone.dizMarca()
iphone.consultaPreco()
