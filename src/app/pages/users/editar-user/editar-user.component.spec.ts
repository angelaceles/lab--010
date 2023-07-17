import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUserComponent } from './editar-user.component';

describe('EditarUserComponent', () => {
  let component: EditarUserComponent;
  let fixture: ComponentFixture<EditarUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarUserComponent]
    });
    fixture = TestBed.createComponent(EditarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
