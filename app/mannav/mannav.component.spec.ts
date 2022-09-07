import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MannavComponent } from './mannav.component';

describe('MannavComponent', () => {
  let component: MannavComponent;
  let fixture: ComponentFixture<MannavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MannavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MannavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
