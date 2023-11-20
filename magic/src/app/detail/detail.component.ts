import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Card } from '../models/card.model'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id!: string;
  detail!: Card;
  obsCard!: Observable<Card>;

  constructor(public http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId['id'];
      console.log(this.id)
    });
    this.obsCard = this.http.get<Card>(`https://api.magicthegathering.io/v1/cards/${this.id}`)
    this.obsCard.subscribe(this.risultato)
  }
  risultato = (detail: Card) => {
    this.detail = detail;
    console.log(detail);
  }
}
