# Bella Ciao

Web de Bella Ciao, trattoria italiana a Santa Coloma (Andorra la Vella).

- Carta digital (català / castellà / francès / anglès)
- Restaurant i per emportar
- Horari i adreça segons la fitxa de Google
- Reserves per telèfon: +376 826 024

## Web

https://xab13rmc.github.io/bella-ciao/

## Ressenyes de Google

La web pot llegir la valoració i el nombre de ressenyes des de `google-rating.json`. El script `scripts/update_google_rating.py` genera aquest fitxer amb Google Places. Per automatitzar-lo cal habilitar **Places API (New)**, configurar `GOOGLE_PLACES_API_KEY` com a secret i programar el script amb GitHub Actions. Si les dades no estan disponibles o tenen més de 48 hores, la web mostra `★ 4,8 · Ressenyes a Google` sense un recompte antic.
