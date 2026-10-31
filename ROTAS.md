```
SSR -> Server Side Rendering
CSR -> Client Side Rendering

Static / SSG (static site generation) <- Tenho o HTML pronto
Dynamic <- Não tenho nada pronto
ISR <- Incremental Static Regeneration

/ <- ISR -> Depois de 60s quero atualizar o conteúdo dela (por tempo)
/ <- ISR -> Depois que eu atualizar algum conteúdo ela atualiza (por atualização)

/ (Pública)              <--- agressivo no cache
/post/[slug] (Pública)   <--- agressivo no cache

/admin/post (Privado - Dynamic) - Ler (R) Lista de posts / (D) Delete
/admin/post/[id] (Privado - Dynamic) - Atualizar um post (U)
/admin/post/new (Privado - Dynamic) - Criar um post (C)

/admin/login (Dynamic) - Fazer o login do usuário
```
