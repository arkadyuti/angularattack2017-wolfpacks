/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EachShopComponent } from './each-shop.component';

describe('EachShopComponent', () => {
  let component: EachShopComponent;
  let fixture: ComponentFixture<EachShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
