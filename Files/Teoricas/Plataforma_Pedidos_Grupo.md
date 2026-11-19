# Plataforma: o que falta receber do grupo (18/11/2026)

Nota de trabalho. O site está feito (`Plataforma_Montar.js` → pasta `Plataforma/`). **Fechado a 19/11: do grupo já não falta nada.** Os vídeos da L4 (3) e da L5 (4) chegaram a 18/11 e estão no site; decisão do grupo (19/11): a L4 não tem visita interativa (a visita está no vídeo 2) e a L4 e a L5 ficam sem legendas, com a transcrição tirada do texto dos guiões («pode diferir um pouco do que se ouve»). O `L4_Aula17_Conteudo.mp4` fica com 505 MB (o Netlify aceitou; o Tiago não o comprime). A tabela abaixo fica como histórico.

## Quando os ficheiros chegarem

O Bruno guarda-os com estes nomes e corre `node Plataforma_Montar.js` na pasta `Files/Teoricas` (no fim, o script lista o que ainda falta):

| Lição | Guardar como (em `Files/P1/…`) |
|---|---|
| L4 | `L4/Videos/L4_Aula16_Gancho.mp4` · `L4_Aula17_Conteudo.mp4` · `L4_Aula18_Sintese.mp4` (legendas, se vierem: `Legenda_Aula16_L4.vtt`, `Legenda_Aula17_L4.vtt`, `Legenda_Aula18_L4.vtt`) |
| L5 | `L5/Videos/L5_Aula19_Pilares.mp4` · `L5_Aula20_Visita3D.mp4` · `L5_Aula21_Regresso.mp4` · `L5_Aula22_Sintese.mp4` (legendas: `Legenda_Aula19_L5.vtt`, …) |
| L4 | Link do Matterport: em `Plataforma_Montar.js`, na L4, `visita: { m: "…" }` = o código depois de `?m=`. Tem de estar «Não listado» (um espaço «Privado» não abre no site) |

Os MP4 têm de ter menos de 100 MB cada (limite do GitHub, como os outros vídeos das lições; o site não os põe no git, mas convém).

## Decidido pelo Bruno (18/11)

- **L3:** a Respiração guiada fica sem legenda (o Rodrigo: só faz sentido a ouvir); o vídeo mostra a transcrição do guião, para quem não pode ouvir.
- **L4:** as explicações de cada opção do quiz («Certo, porque…» / «Ainda não: …») são as do site; o guião só tinha as certas.
- **L5:**
  - pergunta 3 do quiz: «Que sequência guia quem cuida nas semanas depois da crise?». No guião, a pergunta era a da L1 («Durante um confinamento…»), mas as respostas são «Observar → Escutar → Encaminhar»;
  - explicações das respostas erradas: as do site;
  - atividade «As próximas semanas» (observar, escutar, encaminhar, rotina), com o texto da Aula 21: o guião não tinha atividade.
- O espaço «Sala do Rodrigo» (L3) e a «Casa D. Rosa» (L1, L2) ficam ativos e «Não listados» até ao fim do semestre: o site mostra-os dentro da página.

## Mensagem ao grupo (site publicado a 19/11)

> O site da plataforma está no ar: https://soft-licorice-ef7571.netlify.app/ . Cada um abra a sua lição no computador e no telemóvel e veja: os vídeos tocam, as legendas aparecem, a visita 3D abre, o quiz dá a explicação certa. Mandem-me o que estiver mal até sexta 20/11. Não apaguem nem desativem os vossos espaços Matterport até ao fim do semestre. A entrega final passou para 02/12: na aula de 25/11 continuamos o desenvolvimento e na de 02/12 o Grupo 2 faz o Beta da nossa plataforma e nós o da deles.
