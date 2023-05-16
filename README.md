# "The Lazy Chef"

## Duta Catalin-Ionut, gr. 1119

LINK VIDEO: 

LINK PUBLICARE: https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/

Proiectul este intitulat "The Lazy Chef" si reprezinta o aplicatie bazata pe codul prezentat in cadrul seminarului, ce poate fi vizualizata cu ajutorul platformei Vercel.

Aceasta aplicatie pune la dispozitia utilizatorilor niste retete simple si rapide, menite pentru cei ce prefera sa petreaca mai mult timp mancand decat gatind. Pentru a stoca aceste retete, aplicatia foloseste o baza de date MongoDB, prezenta in cloud pe o instanta din AWS:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/fd3a4131-2d70-40c1-a647-3bbc96f3040e)

Baza de date contine obiecte de forma { "name":"X","recipe":"Y" }:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/5fb837ee-0793-429b-8dec-9057f5dc5acf)

Pentru a vizualiza aceste date, aplicatia le prezinta sub forma de lista pe pagina principala. Pagina prezinta si functionalitatea de a sterge retete:

https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/b57866ec-da23-46f7-bc0d-e19b15813dcd)

Retetele pot fi introduse de utilizatori prin intermediul paginii de inserare, la calea "/insert", unde este prezent urmatorul formular:

https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/insert

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/d53625ea-b476-4d82-ba6f-ea00852c9704)

De asemenea, aplicatia prezinta si functionalitatea de a genera retete folosind API-ul oferit de OpenAI, si anume gpt3.5, la calea "/chat":

https://proiect-cloud-hjwjzsq0r-dutaci28.vercel.app/chat

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/50914108-dfb3-4bd7-ac5a-6fe4ed4ac9e9)

API-ul prezinta urmatoarele statistici de utilizare:

![image](https://github.com/dutaci28/ProiectCloud/assets/69631672/aee09c7c-0ce5-4404-9611-91bb201b3d53)
