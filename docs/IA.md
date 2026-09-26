# Informační architektura — Vyjmenovaná slova

Mělká struktura, jeden primární úkol na obrazovku, krátký tok od spuštění ke cvičení.

## Hlavní části
- Domů
- Cvičení
- Výsledek kola
- Pokrok
- Nastavení rodiče

## Strom aplikace
```text
Aplikace
├── Domů
│   ├── Pokračovat v posledním režimu
│   ├── Vybrat režim
│   ├── Vybrat skupinu učiva
│   └── Denní výzva
├── Cvičení
│   ├── Zadání úlohy
│   ├── Volba i / y
│   ├── Okamžitá zpětná vazba
│   └── Další úloha
├── Výsledek kola
│   ├── Skóre
│   ├── Úspěšnost
│   ├── Rekord / série
│   ├── Slabší okruhy
│   └── Hrát znovu / Domů
├── Pokrok
│   ├── Přehled kategorií
│   ├── Historie krátkých relací
│   ├── Nejčastější chyby
│   └── Osobní rekordy
└── Nastavení rodiče
    ├── Délka kola
    ├── Zapnutí / vypnutí časovky
    ├── Nápovědy
    ├── Zvuk / animace
    └── Budoucí export / správa obsahu
```

## Navigační logika
- **Domů** je centrální rozcestník.
- **Cvičení** je full-focus režim bez rušivých odkazů.
- **Výsledek** je krátký mezikrok po skončení kola.
- **Pokrok** je spíš pro rodiče nebo klidné prohlížení.
- **Nastavení rodiče** je schované, ne prominentní.

## Seznam obrazovek

### 1. Domů
- Tlačítko „Pokračovat“.
- 3 hlavní režimy: Trénink, Na čas, Bez chyby.
- Volba skupiny: B, L, M, P, S, V, Z, Mix.
- Blok „Denní výzva“.
- Nenápadný vstup do pokroku a nastavení rodiče.

### 2. Výběr kola
- Vybraný režim, skupina, obtížnost.
- Odhad délky kola.
- Tlačítko „Začít“.

### 3. Cvičení – aktivní úloha
- Progress bar (např. 4/10).
- Velké zadání uprostřed.
- Dvě velká tlačítka: **i** a **y**.
- U časovky zbývající čas.
- Žádné odkazy pryč z cvičení.

### 4. Okamžitá zpětná vazba
- „Správně“ / „Tentokrát ne“.
- Správná varianta ve slově.
- Krátké vysvětlení.
- Automatický přechod dál nebo tlačítko „Další“.

### 5. Výsledek kola
- Počet správně, úspěšnost v %.
- Série bez chyby / rekord.
- Doporučení na další procvičení (slabší skupina).
- Tlačítka „Hrát znovu“, „Jiná skupina“, „Domů“.

### 6. Pokrok
- Úspěšnost podle skupin.
- Počet odehraných kol.
- Nejčastější problémové okruhy.
- Rekordy, historie relací.

### 7. Nastavení rodiče
- Počet úloh v kole.
- Zapnout/vypnout časovku.
- Zapnout/vypnout vysvětlení.
- Reset pokroku.

## Primární uživatelské toky

**Tok 1 — rychlé domácí procvičení:**
Domů → vybrat režim → vybrat skupinu → začít → série úloh → výsledek → hrát znovu / domů.

**Tok 2 — denní výzva:**
Domů → denní výzva → úlohy → výsledek → potvrzení splnění.

**Tok 3 — rodič kontroluje pokrok:**
Domů → Pokrok → detail skupin → návrat.

## Obsahová architektura
- **Téma:** Vyjmenovaná slova.
- **Skupina:** po B / L / M / P / S / V / Z / Mix.
- **Podtyp:** základní slovo / slovo příbuzné / spojení / věta.
- **Obtížnost:** lehká / střední / těžší.
- **Režim použití:** trénink / čas / bez chyby.

## UX pravidla pro build
- Jedna hlavní akce na obrazovku.
- Maximálně 3–5 hlavních voleb v jednom kroku.
- Velká tlačítka, velké rozestupy, minimum textu.
- Žádná skrytá komplikovaná menu.
- Konzistentní umístění prvků mezi obrazovkami.
- Chyba nesmí působit jako trest.
- Dítě se musí dostat ke cvičení do několika sekund.
