import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {
  @Input() tit: string;

  constructor() { }

  ngOnInit() {
  }

}
