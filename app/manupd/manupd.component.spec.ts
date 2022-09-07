import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManupdComponent } from './manupd.component';

describe('ManupdComponent', () => {
  let component: ManupdComponent;
  let fixture: ComponentFixture<ManupdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManupdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManupdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
