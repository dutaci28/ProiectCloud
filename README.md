# "The Lazy Chef"

## Duta Catalin-Ionut, gr. 1119

LINK VIDEO: 

LINK PUBLICARE: https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/

### 1. Introducere

-----

Proiectul este intitulat "The Lazy Chef" si reprezinta o aplicatie bazata pe codul prezentat in cadrul seminarului, ce poate fi vizualizata cu ajutorul platformei Vercel (prezenta la sectiunea "LINK PUBLICARE"). Aplicatia foloseste o baza de date MongoDB, stocata in cloud pe o instanta Amazon Web Services. Aplicatia foloseste, de asemenea, API-ul gpt3.5 oferit de catre OpenAI.

### 2. Descriere Problema

-----

Aceasta aplicatie pune la dispozitia utilizatorilor niste retete simple si rapide, menite pentru cei ce prefera sa petreaca mai mult timp mancand decat gatind. Aplicatia este menita pentru utilizatori care duc lipsa de timp liber sau care nu sunt obisnuiti sa gateasca pe perioade indelungate, prezentand retete simple, ce pot fi pregatite intr-un timp scurt. Utilizatorul tinta al aplicatiei este studentul.

### 3. Descriere API

-----

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

Aplicatia prezinta si posibilitatea de introducere a datelor prin path-ul "/insert":

https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/insert

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/a71457c3-b12f-414b-a179-bd67f102d02b)

Apasand submit, cu campurile completate, aplicatia face un call de POST, ce publica datele introduse catre Mongo.

De asemenea, aplicatia prezinta si functionalitatea de a genera retete folosind API-ul oferit de OpenAI, si anume gpt3.5, la calea "/chat":

https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/chat

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/50914108-dfb3-4bd7-ac5a-6fe4ed4ac9e9)

API-ul prezinta urmatoarele statistici de utilizare:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/aee09c7c-0ce5-4404-9611-91bb201b3d53)

### 4. Flux de date

-----

Pentru a vizualiza retetele, vom folosi un GET catre "/api/recipes":

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/4b4276ba-81a9-44c0-979e-860e7e6ce803)

Ce va returna un payload de forma:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/64bd6874-2bb2-4ad1-b248-ae06451e05a6)

-----

Pentru a publica o reteta, vom folosi un POST catre "/api/recipes":

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/66345ef9-2643-415e-85db-dcce3381f247)

Cu un payload de forma: 

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/3423b282-29f8-4d07-a5d5-a5b828a5e8e7)

-----

Pentru a sterge o reteta, vom folosi un DELETE catre "/api/recipes?id=...":

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/c1dbb635-04ea-4966-9c64-9a8dde8ba9d0)

Ce va returna un payload de forma:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/bae14bfe-6a42-4276-a47c-25b5ac3be91e)

-----

Pentru a primi un mesaj generat de catre gpt3.5, vom folosi un POST catre "/api/answer":

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/4a27fad0-7fe0-4239-8bc2-7b3e22206938)

La care vom atasa un request de forma:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/9642c33d-28aa-4679-930a-d89590769655)

Si la care ni se va raspunde cu un payload:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/8abf496a-7415-4fa1-a734-854698e3b3df)

-----

### 5. Capturi ecran aplicatie

-----

Capturile de ecran din aplicatie au fost introduse in celelalte capitole, in locurile aferente.

### 6. Referinte

-----

https://gurita-alexandru.gitbook.io/cloud-computing-2023-simpre/

https://github.com/guritaalexandru/cc-next-2

https://www.mongodb.com/docs/

https://platform.openai.com/docs/introduction
