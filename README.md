# "The Lazy Chef"

## Duta Catalin-Ionut, gr. 1119

LINK VIDEO: 

LINK PUBLICARE: https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/

### 1. Introducere

Proiectul este intitulat "The Lazy Chef" si reprezinta o aplicatie bazata pe codul prezentat in cadrul seminarului, ce poate fi vizualizata cu ajutorul platformei Vercel (prezenta la sectiunea "LINK PUBLICARE").

### 2. Descriere Problema

Aceasta aplicatie pune la dispozitia utilizatorilor niste retete simple si rapide, menite pentru cei ce prefera sa petreaca mai mult timp mancand decat gatind.

### 3. Descriere API

Pentru a stoca retete, aplicatia foloseste o baza de date MongoDB, prezenta in cloud pe o instanta din AWS:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/fd3a4131-2d70-40c1-a647-3bbc96f3040e)

Baza de date contine obiecte de forma { "name":"X","recipe":"Y" }:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/5fb837ee-0793-429b-8dec-9057f5dc5acf)

Acestea sunt preluate si afisate in pagina principala sub forma de lista.

Cod:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/e1d7f474-2be9-47d6-87c9-2c7ae221be82)

Afisare:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/18d4d8ed-de5e-4edd-b50f-c4eb2ce6d807)

Aceasta pagina prezinta, in dreptul fiecarei retete, un buton de stergere al acesteia. Acesta face un call de DELETE, ce sterge reteta aferenta.

De asemenea, aplicatia prezinta si functionalitatea de a genera retete folosind API-ul oferit de OpenAI, si anume gpt3.5, la calea "/chat":

https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/chat

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/50914108-dfb3-4bd7-ac5a-6fe4ed4ac9e9)

API-ul prezinta urmatoarele statistici de utilizare:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/aee09c7c-0ce5-4404-9611-91bb201b3d53)

### 4. Flux de date

Pentru a vizualiza retetele, vom accesa lista de pe pagina principala. Pagina prezinta si functionalitatea de a sterge retete:

https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/

Retetele pot fi introduse de utilizatori prin intermediul paginii de inserare, la calea "/insert", unde este prezent urmatorul formular:

https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/insert

### 5. Capturi ecran aplicatie

Capturile de ecran din aplicatie au fost introduse in celelalte capitole, in locurile aferente.

### 6. Referinte


