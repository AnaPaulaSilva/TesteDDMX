import { Component } from '@angular/core';
import { local } from './local';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pontos de Reciclagem';

  selectLocal = new local('nome', 'endereco', 1000, 2000);  
  selectPontos : local;
  orderItems = [];
  
  addItem() {
    if (this.selectLocal.latitude > 0) {
      this.orderItems.push(new local(this.selectLocal.nome, this.selectLocal.endereco, this.selectLocal.latitude, this.selectLocal.longitude));
    }
    
    this.selectLocal.latitude = 0;
    console.log(this.orderItems);
  }

  editItem(){
    if(this.selectLocal.nome = 'nome'){
      
    }
  }

}
