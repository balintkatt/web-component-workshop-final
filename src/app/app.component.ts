import { Component } from '@angular/core';
import "../assets/countdown.js";
import "../assets/modal.js";
import "../assets/tooltip.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wc-workshop';
  mockData= [
      {
        "product_image_sm": "../assets/johnsons.jpg",
        "_id": "5fe131737aa7711eb3c1012c",
        "product_name": "Olive Oil",
        "product_type": "oil",
        "product_department": "Natural Oils",
        "product_departmentId": "naturaloils",
        "product_stock": 109,
        "product_price": 10,
        "product_subtitle": "Steel",
        "product_ratings": 4,
        "product_no_of_comments": "15",
        "product_sales": 5,
        "days_until_promotion_ends": 1,
        "offer_days_left": 2,
        "product_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      "product_image_sm": "../assets/bioderma.png",
      "_id": "5fe131737aa7711eb3c1012a",
      "product_name": "Almond Oil",
      "product_type": "oil",
      "product_department": "Natural Oils",
      "product_departmentId": "naturaloils",
      "product_stock": 55,
      "product_price": 282,
      "product_subtitle": "Steel",
      "product_ratings": 3,
      "product_no_of_comments": "24",
      "product_sales": 2.2,
      "days_until_promotion_ends": 3,
      "offer_days_left": 4,
      "product_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      "product_image_sm": "../assets/coconut.jpg",
      "_id": "5fe131737aa7711eb3c1012s",
      "product_name": "Coconut Oil",
      "product_type": "oil",
      "product_department": "Natural Oils",
      "product_departmentId": "naturaloils",
      "product_stock": 5,
      "product_price": 7,
      "product_subtitle": "Steel",
      "product_ratings": 5,
      "product_no_of_comments": "134",
      "product_sales": 2,
      "days_until_promotion_ends": 1,
      "offer_days_left": 1,
      "product_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      "product_image_sm": "../assets/bioderma.png",
      "_id": "5fe131737aa7711eb3c1012f",
      "product_name": "Bioderma",
      "product_type": "body",
      "product_department": "Bath products",
      "product_departmentId": "bathproducts",
      "product_stock": 2,
      "product_price": 6.7,
      "product_subtitle": "Steel",
      "product_ratings": 4,
      "product_no_of_comments": "44",
      "product_sales": 5,
      "days_until_promotion_ends": 2,
      "offer_days_left": 4,
      "product_description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }
  ];

  openModal() {
    document.createElement("wc-modal");

  }

}
