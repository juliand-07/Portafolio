import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBoot } from './spring-boot';

describe('SpringBoot', () => {
  let component: SpringBoot;
  let fixture: ComponentFixture<SpringBoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringBoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringBoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
