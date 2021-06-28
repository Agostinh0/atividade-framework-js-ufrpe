export class Funcionario{
    cpf : number;
    nome: String;
    cargo: string;
    salario: number;

    constructor(cpf:number, nome:string, cargo:string, salario:number){
        this.cpf = cpf;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    toString(){
        return `CPF: ${this.cpf}\nNome: ${this.nome}\nCargo: ${this.cargo}\nSalário: ${this.salario}`;
    }
}