# One-page PRD — Vyjmenovaná slova

## Produkt
Vyjmenovaná slova – webová aplikace pro procvičování i/y.

## Shrnutí
Jednoduchá webová aplikace pro děti, ve které uživatel doplňuje pouze chybějící **i/y** v předem připravených slovech, slovních spojeních a větách. Aplikace nekontroluje celý zápis výrazu, ale jen cílovou pozici, aby dítě nebylo penalizováno za jiné chyby mimo právě procvičovaný pravopisný jev.

## Problém
Běžné procvičování pravopisu často míchá více typů chyb dohromady, takže dítě neví, zda selhalo kvůli vyjmenovaným slovům, nepozornosti, překlepu nebo jiné pravopisné nejistotě. To snižuje motivaci a zhoršuje přínos procvičování.

## Cíl
Pomoci dětem získat jistotu ve vyjmenovaných slovech pomocí krátkých, opakovatelných a motivačních cvičení s okamžitou zpětnou vazbou. Úspěch MVP se nemá měřit počtem funkcí, ale tím, zda dítě cvičení chápe, dokončuje a vrací se k němu opakovaně.

## Cílový uživatel
- **Primární:** dítě na 1. nebo začátku 2. stupně ZŠ (zejména 6. třída), které si potřebuje upevnit vyjmenovaná slova a slova příbuzná.
- **Sekundární:** rodič, který chce krátké domácí procvičování bez reklamy, složité registrace a zbytečného stresu.

## Hodnota produktu
Produkt trénuje jen jeden konkrétní mikro-úkol: rozhodnutí mezi i/y v určené pozici. Je to přívětivější, rychlejší a didakticky čistší než přepisování celých slov nebo vět.

## In scope – MVP
- Procvičování vyjmenovaných slov a slov příbuzných.
- Doplňování jedné chybějící pozice i/y.
- Tři režimy: trénink, na čas, série bez chyby.
- Zadání ve třech formátech: slovo, spojení, věta.
- Okamžitá zpětná vazba po odpovědi.
- Krátké vysvětlení správného řešení.
- Základní přehled pokroku a osobní rekord.
- Webová responzivní verze pro mobil i desktop.

## Out of scope – MVP
- Oprava celých vět nebo diktát.
- Volné psaní.
- Veřejný žebříček mezi dětmi.
- Učitelský dashboard.
- Přihlašování účtem.
- Další gramatické jevy mimo vyjmenovaná slova.
- Pokročilé AI vysvětlování nebo adaptivní generování úloh.

## Klíčové flow
1. Uživatel otevře aplikaci.
2. Vybere režim: trénink / na čas / bez chyby.
3. Vybere skupinu: po B, L, M, P, S, V, Z nebo mix.
4. Zobrazí se úloha s jednou mezerou místo i/y.
5. Uživatel klikne na i nebo y.
6. Aplikace ihned ukáže správně / špatně.
7. Zobrazí krátké vysvětlení.
8. Pokračuje na další úlohu.
9. Na konci vidí skóre, úspěšnost a případný rekord.

## Funkční požadavky
- Systém musí zobrazit vždy právě jednu cílovou mezeru pro volbu i/y.
- Uživatel musí odpovídat jedním kliknutím nebo tapnutím.
- Po odpovědi musí systém ihned zobrazit výsledek.
- Systém musí evidovat počet správných a chybných odpovědí v relaci.
- Systém musí umět filtrovat úlohy podle skupiny vyjmenovaných slov.
- Systém musí po skončení kola ukázat souhrn výsledku.
- Systém musí fungovat bez registrace.

## Ne-funkční požadavky
- Aplikace musí být rychlá, jednoduchá a srozumitelná i pro dítě bez vysvětlování.
- Rozhraní musí být dobře použitelné na mobilu.
- Tlačítka i/y musí být velká a jasně odlišená.
- Jedno procvičovací kolo má trvat přibližně 1–3 minuty.
- Aplikace nesmí obsahovat reklamy ani rušivé prvky.
- Texty zpětné vazby mají být krátké, laskavé a motivující.

## Obsahový model
Každá úloha má:
- ID
- text zadání (rozdělený na část před mezerou, správnou odpověď `i`/`y` a část po mezeře)
- kategorii (skupinu vyjmenovaných slov)
- typ (slovo / spojení / věta)
- vysvětlení
- vazbu na vyjmenované slovo nebo slovo příbuzné

Tento model umožní pozdější rozšíření i na jiné gramatické jevy bez přestavby jádra aplikace.

## Metriky úspěchu
**Primární:** počet dokončených kol, opakované použití během týdne, průměrná úspěšnost podle kategorií.

**Sekundární:** délka relace, počet dobrovolně spuštěných dalších kol, počet dokončených denních výzev.

**Counter-metric:** vysoký počet předčasně ukončených kol nebo pokles dokončení po prvních několika úlohách.

## Akceptační kritéria
- Dítě zvládne spustit cvičení bez pomoci dospělého.
- Dítě rozumí, co má udělat, během prvních několika sekund.
- Po odpovědi je výsledek zřejmý okamžitě.
- Na konci kola je viditelný přehled výsledků.
- Režimy trénink, na čas a bez chyby fungují bez chyb.
- Na mobilu je ovládání pohodlné a bez misclicků.
- Obsah lze snadno rozšiřovat o nové sady úloh.

## Rizika a otevřené otázky
- Kolik vysvětlení má být zobrazováno, aby dítě nezdržovala?
- Má být časovka dostupná hned, nebo až po zvládnutí tréninku?
- Má být pokrok jen lokální, nebo později vázaný na profil?
- Jak velký má být startovní obsahový balík, aby už první verze působila hodnotně?

## Doporučení pro build
První build je čisté MVP bez přihlášení a bez backendové složitosti: responzivní webová aplikace s předem připraveným datasetem úloh a jednoduchou lokální evidencí průběhu relace (localStorage).
