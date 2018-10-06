import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { HeroeBusquedaComponent } from "./heroe-busqueda.component";

describe("HeroeBusquedaComponent", () => {
  let component: HeroeBusquedaComponent;
  let fixture: ComponentFixture<HeroeBusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeBusquedaComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroeBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
