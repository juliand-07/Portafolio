import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deskary } from './deskary';

describe('Deskary', () => {
  let component: Deskary;
  let fixture: ComponentFixture<Deskary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deskary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deskary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
