import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../models/productModel';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {

  productos: ProductModel[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    const productsToBuy = this.router.lastSuccessfulNavigation?.extras.state;
    if (productsToBuy != undefined) {
      this.productos = productsToBuy['data'];

      this.cantidadElemento = this.cantidadProductos();

      this.totalPrice = this.totalValue();
    }
  }

  cantidadElemento = this.cantidadProductos();

  totalPrice = this.totalValue();

  cantidadProductos(): number {
    return this.productos.length;
  }

  totalValue(): number {
    let total = 0;
    this.productos.forEach(element => {
      total += element.precio;
    });
    return total;
  }

  goToPay() {
    alert('A pagar!');
  }

}
