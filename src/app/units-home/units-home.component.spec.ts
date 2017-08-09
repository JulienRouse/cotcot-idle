import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitsHomeComponent } from './units-home.component';

describe('UnitsHomeComponent', () => {
  let component: UnitsHomeComponent;
  let fixture: ComponentFixture<UnitsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
