import { Component, OnInit } from "@angular/core";
import { HeroesService } from "../../servicios/heroes.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-heroe-busqueda",
  templateUrl: "./heroe-busqueda.component.html",
  styles: []
})
export class HeroeBusquedaComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(
    private _heroeService: HeroesService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      console.log(params);
      this.termino = params["termino"];

      this.heroes = this._heroeService.buscarHeroes(params["termino"]);
    });
  }
}
