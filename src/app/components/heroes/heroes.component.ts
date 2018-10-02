import { Component, OnInit } from "@angular/core";
import { HeroesService, HeroeInterface } from "../../servicios/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any[] = [];

  constructor(private _heroesService: HeroesService, private _route: Router) {}

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(id: number) {
    // console.log(id);
    this._route.navigate(["/heroe", id]);
  }
}
