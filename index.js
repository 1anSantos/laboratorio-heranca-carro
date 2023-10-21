class Veiculo {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
    descricao() {
        return `Ano: ${this.ano}\nMarca: ${this.marca}\n`;
    }
}

class Carro extends Veiculo {
    constructor(marca, ano, modelo, portas) {
        super(marca, ano);
        this.modelo = modelo;
        this.portas = portas;
    }
    descricao() {
        return super.descricao() + `Modelo: ${this.modelo}\nPortas: ${this.portas}\n`
    }
}

const carro1 = new Carro("Toyota", 2020, "Corolla", 5);
const carro2 = new Carro("Ford", 2019, "Fusion", 5);
const carro3 = new Carro("Honda", 2021, "Civic", 5);
const carro4 = new Carro("Volkswagen", 2018, "Golf", 5);

console.log(carro1.descricao());
console.log(carro2.descricao());
console.log(carro3.descricao());
console.log(carro4.descricao());
