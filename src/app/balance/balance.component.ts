import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor() { }

  amount:number = 0;
  public color_apply ="positive";
  ngOnInit(): void {
  }

  getBalanceAmount(amt: number){
    this.amount = 0;
    this.amount = amt;
    if (this.amount < 0){
      this.color_apply = "negative";
    }
    else{
      this.color_apply = "positive";
    }
    
    
    // this.amount = amt.substring(1);
  }

}
