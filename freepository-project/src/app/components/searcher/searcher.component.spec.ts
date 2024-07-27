import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SearcherComponent } from './searcher.component';

describe('SearcherComponent', () => {
  let component: SearcherComponent;
  let fixture: ComponentFixture<SearcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearcherComponent]  // Importar el componente standalone aquí
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should hide the placeholder when the input is focused and show it again when blurred without value', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const placeholder = fixture.debugElement.query(By.css('.placeholder')).nativeElement;

    // Inicialmente, el placeholder debería ser visible
    expect(placeholder.style.opacity).toBe('1');

    // Enfocar el input
    input.dispatchEvent(new Event('focus'));
    fixture.detectChanges();

    // Después de enfocar, el placeholder debería ocultarse
    expect(placeholder.style.opacity).toBe('0');

    // Desenfocar el input sin valor
    input.value = '';
    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    // Después de desenfocar sin valor, el placeholder debería mostrarse de nuevo
    expect(placeholder.style.opacity).toBe('1');
  });

  it('should keep the placeholder hidden when the input has value on blur', () => {
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    const placeholder = fixture.debugElement.query(By.css('.placeholder')).nativeElement;

    // Enfocar el input
    input.dispatchEvent(new Event('focus'));
    fixture.detectChanges();

    // Después de enfocar, el placeholder debería ocultarse
    expect(placeholder.style.opacity).toBe('0');

    // Escribir texto en el input
    input.value = 'some text';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Desenfocar el input con valor
    input.dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    // Después de desenfocar con valor, el placeholder debería permanecer oculto
    expect(placeholder.style.opacity).toBe('0');
  });
});
