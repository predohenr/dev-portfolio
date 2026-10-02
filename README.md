# pedro-portfolio

Portfólio pessoal de **Pedro Lopes**, feito com React e Vite.

- Bilíngue (PT/EN), com seletor e memória da escolha.
- Tema claro e escuro na paleta **Cariri × Recife**: barro, sol e maré.
- Navegação desenhada como um grafo de commits. As seções de pesquisa ficam numa branch `feat/mestrado`, que faz merge de volta na `main`.
- Formulário de contato via Formspree, o mesmo endpoint do site antigo.
- O mesmo build funciona no GitHub Pages e na página do CIn (`base: './'`).

## Rodando localmente

Requer **Node.js 20.19+ ou 22.12+**.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # gera a pasta dist/
npm run preview   # serve o dist/ localmente
```

## Onde editar o conteúdo

Todo o texto fica em **`src/data/content.js`**:

| O quê | Onde |
|---|---|
| Links (GitHub, LinkedIn, Lattes), Formspree, CV | `profile` |
| Texto do topo | `hero` |
| Sobre mim | `about` |
| Pesquisa, orientadores e linhas | `research` |
| Artigos e eventos | `publications` (o campo `url` do artigo aceita o link do DOI) |
| Formação, monitoria e IC | `journey` |
| Projetos | `projects` |
| Skills e idiomas | `skills` |
| Música e playlist | `offCode` |

Os textos bilíngues usam `{ pt: '...', en: '...' }`. Um trecho entre `==assim==` vira destaque em pílula.

**Imagens** ficam em `public/images/`: `pedro.jpg` é a foto do topo, `pedro-2.jpg` a do "sobre mim", e as capturas dos projetos estão em `projects/`.

**CV em PDF:** coloque o arquivo em `public/cv/` e preencha `profile.cvUrl`, por exemplo `'cv/pedro-lopes-cv.pdf'`. Isso faz aparecer o botão "Baixar CV".

**Cores:** ficam em `src/styles/tokens.css`, com uma versão para o tema claro e outra para o escuro.

## Deploy

### GitHub Pages

1. Crie um repositório, por exemplo `predohenr/portfolio`, e faça push deste projeto na branch `main`.
2. No repositório, vá em **Settings → Pages → Build and deployment → Source** e escolha **GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` faz o build e publica a cada push. O site fica em `https://predohenr.github.io/portfolio/`.

Se o repositório se chamar `predohenr.github.io`, o site fica na raiz: `https://predohenr.github.io/`.

### Página do CIn (~phls2)

1. Rode `npm run build`.
2. Copie **o conteúdo** da pasta `dist/` para a pasta pública da sua conta do CIn, a mesma onde está o site atual, substituindo os arquivos antigos. Por exemplo:

```bash
scp -r dist/* SEU_LOGIN@SERVIDOR_DO_CIN:~/public_html/
```

Como os caminhos do build são relativos, não é preciso nenhuma configuração extra.

## Estrutura

```
src/
  data/content.js      ← conteúdo (PT/EN)
  components/          ← seções e componentes
  styles/              ← tokens (cores), base, layout, seções
  i18n.jsx             ← troca de idioma
  hooks.js             ← tema, seção ativa, animações de entrada
public/images/         ← fotos e capturas de tela
```
