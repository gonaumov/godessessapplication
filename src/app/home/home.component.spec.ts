import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GoddessService } from '../goddess.service';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        {
          provide: GoddessService,
          useValue: {
            getGodesses: () => {
              return of( [{id: 1, name: 'Agrat'}]);
            }
          }
        }
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the godesses', () => {
    // Arrange
    const fetchUserSpy = spyOn(
      component,
      'getGodesses'
    ).and.callThrough();

    // Act
    component.ngOnInit();

    // Assert
    expect(fetchUserSpy).toHaveBeenCalled();
    expect(component.goddesses.length).toBe(1);
    expect(component.goddesses).toEqual([{id: 1, name: 'Agrat'}]);
  });

  it('should display the proper name of a goddess', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card-container > .card.card-small').textContent.trim()).toBe('Agrat');
  });

});
