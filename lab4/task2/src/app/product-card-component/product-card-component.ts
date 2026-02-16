import { Component, input } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-card-component',
  imports: [],
  templateUrl: './product-card-component.html',
  styleUrl: './product-card-component.css',
})
export class ProductCardComponent {
  product = input<Product>();
  currentImg = 0;
  showDropdown = false;
  onClick() {
    console.log("123");
  }
  nextImg() {
    if (this.currentImg + 1 == this.product()!.images.length)
      this.currentImg = 0;
    else
      this.currentImg++;
  }
  prevImg() {
    if (this.currentImg == 0)
      this.currentImg = this.product()!.images.length - 1;
    else
      this.currentImg--;
  }
  openLink() {
    window.open(this.product()!.link);
  }
  shareWhatsApp() {
    window.open(`https://wa.me/?text=Check out this product: ${this.product()!.link}`);

  }
  shareTelegram() {
    window.open(`https://t.me/share/url?url=${this.product()!.link}&text=${this.product()!.name}`)
  }

}
