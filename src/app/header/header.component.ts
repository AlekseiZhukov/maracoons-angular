import { Component, OnInit } from '@angular/core';
import {LinkType} from "../types/link.type";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public phone: string = '+375 (29) 368-98-68';
  public links: LinkType[] = [
    {
      title: 'Пироженки',
      href: 'products'
    },
    {
      title: 'О нас',
      href: 'advantages'
    },
    {
      title: 'Оформить заказ',
      href: 'order'
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  public openMenu (target: HTMLElement): void {
    target.classList.add('open');
  }

  public closeMenu (target: HTMLElement): void {
    target.classList.remove('open')
  }

  public scrollTo (id: string, menu: HTMLElement): void {
    this.closeMenu(menu);
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth"});

  }

}
