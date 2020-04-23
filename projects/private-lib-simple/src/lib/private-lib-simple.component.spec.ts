import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateLibSimpleComponent } from './private-lib-simple.component';

describe('PrivateLibSimpleComponent', () => {
  let component: PrivateLibSimpleComponent;
  let fixture: ComponentFixture<PrivateLibSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateLibSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateLibSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
