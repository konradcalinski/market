import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktualnosciComponent } from './aktualnosci.component';

describe('AktualnosciComponent', () => {
  let component: AktualnosciComponent;
  let fixture: ComponentFixture<AktualnosciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AktualnosciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktualnosciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
