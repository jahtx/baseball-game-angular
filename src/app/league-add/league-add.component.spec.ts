import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueAddComponent } from './league-add.component';

describe('LeagueAddComponent', () => {
  let component: LeagueAddComponent;
  let fixture: ComponentFixture<LeagueAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueAddComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
