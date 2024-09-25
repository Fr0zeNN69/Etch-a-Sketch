# Etch-a-Sketch

## Descriere
Acesta este un proiect simplu **Etch-a-Sketch** realizat cu ajutorul **HTML**, **CSS** și **JavaScript**, care permite utilizatorilor să deseneze pe o grilă de dimensiuni variabile (16x16, 32x32, 64x64) prin simpla trecere cu mouse-ul peste grilă. Utilizatorii pot alege culoarea de desenare folosind un selector de culoare și pot reseta grila în orice moment.

## Funcționalități
- Selectarea dimensiunii grilei: 16x16, 32x32, sau 64x64.
- Desenare pe grilă cu mouse-ul.
- Schimbarea culorii de desen folosind un selector de culoare.
- Resetarea grilei la culoarea albă (default).
  
## Tehnologii utilizate
- **HTML5**: Structura paginii web.
- **CSS3**: Stilizarea elementelor, inclusiv folosirea Flexbox și Grid.
- **JavaScript**: Funcționalitățile dinamice pentru generarea grilei și interacțiunea cu utilizatorul.

## Instalare și utilizare

1. Clonează repository-ul pe mașina ta locală:
   git clone https://github.com/username/etch-a-sketch.git
2.Navighează în folderul proiectului:
   cd etch-a-sketch
3.Deschide fișierul index.html într-un browser:
   open index.html
4. Poți începe să desenezi pe grilă! Selectează o dimensiune pentru grilă (16x16, 32x32 sau 64x64), alege o culoare, și începe să desenezi. Apasă pe Reset pentru a șterge grila.

##**Cum funcționează**
1. **Generarea grilei**: La apăsarea unui buton (16x16, 32x32 sau 64x64), se generează o grilă de dimensiunea specificată. Aceasta este făcută dintr-un set de div-uri care reprezintă celulele.
2. **Desenare**: Când utilizatorul trece cu mouse-ul peste celulele grilei, acestea se colorează folosind culoarea selectată din paleta de culori.
3. **Resetarea grilei**: Apăsarea butonului Reset resetează toate celulele din grilă la culoarea albă.
4. **Selector de culoare**: Utilizatorul poate selecta o culoare personalizată folosind un selector de culori pentru a desena pe grilă.
