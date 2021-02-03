import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  userQuotes = [
    new Quote(1, 'The greatest glory in living lies not in never falling, but in rising every time we fall.', '-	Nelson Mandela', 0, 0, new Date(2020,11,21), '8am'),
    new Quote(2, 'The way to get started is to quit talking and begin doing.', '-	Walt Disney', 0, 0, new Date(2020,12,15), 'John'),
    new Quote(3, '.True happiness lies within yourself not on what others say about you.', 'Bramuel', 0, 0, new Date(2021,1,23), 'Legend'),
    new Quote(4, 'Life is what happens when you are busy making other plans.',  'John Lemon', 0, 0, new Date(2021,1,16), 'Chris'),
    new Quote(5, 'Having hope for a better tomorrow is better than not hoping at all.', '-	Bramuel', 0, 0, new Date(2021,1,28), 'Amariati')
  ]

  toogleDetails(index:any){
    this.userQuotes[index].showMeta = !this.userQuotes[index].showMeta
  }

  quoteDelete(isDeleted:any,index:any){
    if (isDeleted){
        this.userQuotes.splice(index,1);
        }
  }

  addNewQuote(quote:any){
    let quotesLength = this.userQuotes.length;
    quote.quoteID=quotesLength+1;
    quote.dateAdded = new Date(quote.completeDate)
    this.userQuotes.push(quote)

  }


  constructor() { }

  ngOnInit() {
  }

}
