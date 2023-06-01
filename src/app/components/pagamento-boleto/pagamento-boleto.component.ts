import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pagamento-boleto',
  templateUrl: './pagamento-boleto.component.html',
  styleUrls: ['./pagamento-boleto.component.css']
})
export class PagamentoBoletoComponent {
  constructor(public dialogRef: MatDialogRef<PagamentoBoletoComponent>,){
  }

  user = {
    firstName: '',
    email: '',
    cpf: '',
    address: '',
    cep: '',
    city: '',
    plano: '',
    state: '',
  };
  planos = [
    'BASIC - U$: 100,00',
    'START - U$: 250,00',
    'PREMIUM - U$: 500,00',
    'PLATINUM - U$: 1.000,00',
  ];

  registerUser() {
    // Aqui você pode fazer a lógica para enviar os dados do usuário para o banco de dados
    console.log('Dados do usuário:', this.user);
    // Implemente a lógica de envio para o banco de dados aqui
  }

  

  onNoClick(): void {
    this.dialogRef.close();
  }

  close(): void{
    this.dialogRef.close();
  }

}
