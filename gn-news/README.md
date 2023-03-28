# GN-NEWS

To aplikacja oparta na bibliotece React + TypeScript, utworzona z wykorzystaniem ViteJS. UI powstało z pomocą Chakra UI.
W aplikacji GN-NEWS można sprawdzić najnowsze newsy z różnych serwisów informacyjnych, a następnie wybrać najbardziej nas interesujący i przejść do źródłowej strony, aby przeczytać go w całości.
Istnieje możliwość wybrania newsów z danego kraju, z listy znajdującej w menu po lewej stronie. 
Newsy mogą być wyświetlane w formie kafelek bądź listy za pomocą ikonek znajdujących się w headerze. 
Strona posiada dodatkowo tłumaczenie z języka angielskiego na język polski. Język można zmienić klikając na ikonkę flagi znajdującej się w headerze.

## Uruchomienie aplikacji

- pobrać repozytorium przy pomocy `git clone https://github.com/jagagoda/gnNews`
- po otworzeniu repozytorium w edytorze należy zainstalować zależności za pomocą komendy `npm install`
- dodać w folderze gn-news plik .env.local (na podstawie .env.example) z kluczem do API NEWS (VITE_API_KEY), który można pobrać z tej strony https://newsapi.org/s/poland-news-api
- uruchomić aplikację za pomocą komendy `npm run dev`
