# DialogsAB_JS
DialogsAB JS kursam elektroniska klade
## Javascript
### JS masivi un to lietosana
Tiks izmantoti piemēri no [w3school Arrays](https://www.w3schools.com/js/js_arrays.asp)
-ieteicams izmantots const paņemiemu, lai viena bridi ar = operatoru visa masīva saturu nepazaudētu parveidotjot datu tipu
Masīviem tik izmantotas [ ] - kvadrāt iekavas.
- var tik izveidots [] (tuksh masivs)
- masivu var papildinat, ..
- Pie masivu elementu vertibām tiek, izmantoti masīva vārdu un indeksu
-Massivs ir objekts
- Ar lenght ipasibas palidzibu var noskadrot masiva garumu(elementu skaits)
- masiva pirma elekenta vertibu iegust ar [0] indeks
-Masiva pedeja elementa vertibu iegust ar [garums-1]
Simbolu rinda ir ari masivs

####
TIks izmantoti piemeri no W3school
-Masiva papildinasa no beigam - push() metode (tiek izguta un var tikt atsecviksi sagalbatas pasa izgriezta elementa vertiba - masivs ar vienu elementu)
pedeja elementa dzesana - pop() metode (tiek izguta un var tik atvsivksi saglabat pasa izgriezta elemeta vertiba masivs ar vienu elemetu 
vertiba(u) ievietosana un dzesana - splice (kur sak cik izgriez, [ko ievietot]) metode tiek izgutas (s) un var tikt atseviski salgabat (s)
- masiva palidinasa - concat() (neitiek mainits sakuma masivs)
- Masiva vertibu kopesanas - slice (no kura indekas, lidz kuram to neieskaitot)(netiek mainits sakuma masivs)
- Masiva vertibu kartosana - sort()(tiek izmainits pats masivs)
- Masiva "pagriesana otradi" - reverse()
- Masivu ar skaitliem kartosanai ir japievieno papildu konkstrukcija "konstrukcija" sort(
    a)
```code fragmeni 
const object_name = {};

```
- using construciton fucntion (izmantojot konstruktora funkciju)
function creatNewOjbect(....){.....}
const objec_name = creatNewObject(...);
```
- isi (bez ieksha tuksha objekta, bet imantojot atslegas vardu
```new```)

- standarta objekta konstruktors 
``` const object_name = new object();```
- using the creat() method (kaa prototipu izmantojot kadu jau esosu objektu)
```
let new_object_name = object.Creat(name);
```