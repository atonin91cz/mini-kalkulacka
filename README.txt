# Mini kalkulačka – první web/PWA/Capacitor pokus

## Co projekt používá
- HTML
- CSS
- Bootstrap
- JavaScript
- localStorage místo databáze
- manifest.json + service-worker.js pro PWA

## 1. Vyzkoušení na PC
Nejjednodušší je dát složku `mini-kalkulacka` do:

    C:\xampp\htdocs\

Spusť Apache v XAMPP a otevři:

    http://localhost/mini-kalkulacka/

Kalkulačka funguje bez PHP a MySQL.

## 2. Co je localStorage
Historie výpočtů se ukládá přímo v prohlížeči:

    localStorage

Není to serverová databáze. Pro první pokus je to záměrně jednodušší.

## 3. PWA
Projekt už obsahuje:
- manifest.json
- service-worker.js
- ikonu

Pro plnohodnotnou instalaci PWA na Androidu je prakticky potřeba stránku otevřít přes HTTPS.
Localhost je pro vývoj výjimka, ale localhost na PC není localhost telefonu.

Takže pro PWA na telefonu je nejjednodušší později použít jednoduchý HTTPS hosting.

## 4. Capacitor
Stejný frontend lze později zabalit do Android APK přes Capacitor.
PHP ani MySQL pro tuto ukázku nejsou potřeba.

## 5. Později
Až pochopíš tento princip, můžeme udělat druhou verzi:

    mobil/web -> PHP API -> MySQL

a historie kalkulačky bude společná po přihlášení na PC i telefonu.
