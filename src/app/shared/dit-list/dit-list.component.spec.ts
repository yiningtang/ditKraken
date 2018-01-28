import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DitListComponent } from './dit-list.component';

describe('DitListComponent', () => {
  let component: DitListComponent;
  let fixture: ComponentFixture<DitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
