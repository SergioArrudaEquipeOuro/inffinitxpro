import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PagamentoBoletosComponent } from 'src/app/components/pagamento-boletos/pagamento-boletos.component';
import { PagamentoPixComponent } from 'src/app/components/pagamento-pix/pagamento-pix.component';
import { PagamentoTedComponent } from 'src/app/components/pagamento-ted/pagamento-ted.component';
import { PagamentoWalletComponent } from 'src/app/components/pagamento-wallet/pagamento-wallet.component';

@Component({
  selector: 'app-plano-platinum',
  templateUrl: './plano-platinum.component.html',
  styleUrls: ['./plano-platinum.component.css']
})
export class PlanoPlatinumComponent {



  constructor(public dialog: MatDialog) {}

  openDialogPix(): void {
    const dialogRef = this.dialog.open(PagamentoPixComponent, {
      width:'50%', 
      panelClass: 'dialog-overlay',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogTed(): void {
    const dialogRef = this.dialog.open(PagamentoTedComponent, {
      width:'50%',
      panelClass: 'dialog-overlay'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogWallet(): void {
    const dialogRef = this.dialog.open(PagamentoWalletComponent, {
      width:'50%',
      panelClass: 'dialog-overlay'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialogBoleto(): void {
    const dialogRef = this.dialog.open(PagamentoBoletosComponent, {
      
      panelClass: 'dialog-overlay'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
