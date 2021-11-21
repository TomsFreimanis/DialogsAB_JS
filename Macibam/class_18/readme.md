# TicTacToe game rules
1. - **3 x 3** laucini 
- sākumā lauciņi ir tukši(nav aizpildīti ar simboliem)
2. - **x** un **o** simboli
3. - sākt var jebkurš
4. - pimrs gājiena notiek labākā gājiena izvēle
5. -pec katra gājiens notiek analīze:
6. - vai nav vinesta kombinacija (augšēja rinda, visa videja rinda,....kolona,...,digagonāle)
- vai ir vēl kur iet

## Ieteikumi
- Pārdomāt algoritmi
- pardomāt 

## Ralizācija ar HTML, CSS un JS (R)
0. Spēli spēlē cilveks un dators, cilvēks sāk pirmais
1. Atbilstoši N.1. - tabula bez arējām robežām
katram lauciņam savs identifikators, bet vienots identifikatoru nosaukuma sākums

Atbilstoši noteikumiem 1.1.1. Katra šuna ir aizpildīta ar tukšu rindu ``` "" ```
1.1.2. Katrais šūnai "nospiešanas detektors " - ``` Listener ``` + ```click```

2. Cilvēks izmantos **x** simbolu
3. Cilvēks sāk pirmais, datora gājiens vienmēr notiek automatiski pēc , protams, ja cilvēks vel nav uzvarējis un vel ir kur iet
4. Cilvēks domā pats, datoram palīdz algoritms
5.1. Atbilstoši si,boli (pēc cilvēka gajiena - ** x ** , pēc datora gajiena - **o**) atrašanas vietas un šo atrašan;as vietas salīdzināšana ar vinesta kombinācijām

5.2. Ja ir kur iet, ja tikko ir bijis cilvēka gajiens, ta tiek izpildits R.4. datoram un attiecigi, ja bijis darora gajiens, tad tiek gaidīts notikums - cilveka izvelne 

## Paņēmieni turmākai izmantošanai
### HTML un CSS
- tabulas un robežas zimēšana / nezināšana
### JS
- Kontrole katram lauciņam ( unificēti, imantojot vienu un to pašu klasi un dažādus id)
- Interesējoša lieluma meklēšana masīvā un to ideksu atlase atsevišķā masīvā
array_to_look_through.reduce((a,e,i) => (e === value_to_find) ?array_search_result_index_to_store.concat(i) : array_search_result_index_to_store: [] ) ```
- Masīvā 
``` 
for (let [index, value_list_to_check] of array_value_to_find.entries()) {
		if (value_list.every(elem => plays.indexOf(elem) > -1)) {
			state = propety: index, player: player};
			break;
		}
	}