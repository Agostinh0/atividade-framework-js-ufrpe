import { Component } from '@angular/core';
import { Funcionario } from './models/Funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'framework-js';

  funcionario: Funcionario;
  funcionarios = [];
  funcionariosCopia = [];
  filtro = 0;

  adicionarFuncionario(cpf, nome, cargo, salario){
    for(let i = 0; i < this.funcionarios.length; i++){
      if(this.funcionarios[i].cpf === cpf){
        alert('Já existe um funcionário com este CPF!');
        return 0;
      }
    }
    this.funcionario = new Funcionario(cpf, nome, cargo, salario);
    this.funcionarios.push(this.funcionario);
    this.funcionariosCopia = this.funcionarios;
  }

  removerFuncionario(funcionario: Funcionario){
    this.funcionarios = this.funcionarios.filter(function(funcionarios){
      return funcionarios !== funcionario;
    });

    alert("Funcionário removido com sucesso!");

    this.funcionariosCopia = this.funcionarios;
  }

  ordenarPorCpf(funcionarios: Funcionario[]){
    this.funcionariosCopia = this.funcionarios = funcionarios.sort((a,b)=> (a.cpf > b.cpf ? 1 : -1))
  }

  ordenarPorNome(funcionarios: Funcionario[]){
    this.funcionariosCopia = this.funcionarios = funcionarios.sort((a,b)=> (a.nome > b.nome ? 1 : -1))
  }

  ordenarPorSalario(funcionarios: Funcionario[]){
    this.funcionariosCopia = this.funcionarios = funcionarios.sort((a,b)=> (a.salario < b.salario ? 1 : -1))
  }

  filtrarPorSalario(valor){
    this.funcionariosCopia = this.funcionarios.filter(funcionario => (funcionario.salario) > valor);
  }
}
