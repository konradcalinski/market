import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbotusComponent } from './abotus.component';

describe('AbotusComponent', () => {
  let component: AbotusComponent;
  let fixture: ComponentFixture<AbotusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbotusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbotusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
