import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'blog.page.html',
  styleUrls: ['blog.page.scss'],
})
export class BlogPage {

  features: any[] = [
    {id: 1, name: 'Service Road', src: '../../assets/icons/top-up.png', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 2, name: 'Resignation', src: '../../assets/icons/cash-withdrawal.png', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 3, name: 'Retirement', src: '../../assets/icons/send.png', background: 'rgba(255, 196, 9, 0.1)', page: ''},
    {id: 4, name: 'Funeral Benefit', src: '../../assets/icons/debit-card.png', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 1, name: 'Death Benefit', src: '../../assets/icons/top-up.png', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 2, name: 'Housing Loan', src: '../../assets/icons/cash-withdrawal.png', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 3, name: 'Reports', src: '../../assets/icons/send.png', background: 'rgba(255, 196, 9, 0.1)', page: ''},
    {id: 4, name: 'Transactions', src: '../../assets/icons/debit-card.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  ];

  transactions: any[] = [
    {id: 1, vendor: 'Tax', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'Revenue', image: '', amount: -1200, time: '4:00PM'}
  ];

  constructor() {}

}
