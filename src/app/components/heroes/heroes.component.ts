import { Component, OnInit } from "@angular/core";
import { HeroesService, HeroeInterface } from "../../servicios/heroes.service";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];

  constructor(private _heroesService: HeroesService) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }
}
