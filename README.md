# Espaço Beth Souza — versão para Vercel

Esta cópia é uma adaptação do site demonstrativo para React + Vite estático. Mantém as fotos, o visual e os botões do projeto original. Não depende de Cloudflare, Sites, servidor próprio, banco de dados ou variáveis de ambiente.

## Publicar pelo GitHub

1. Extraia o ZIP desta versão.
2. Crie um repositório no GitHub. Pode ser privado.
3. Envie os arquivos extraídos para a raiz do repositório. O arquivo package.json deve aparecer na página principal. Não envie o ZIP como arquivo único.
4. Na Vercel, abra Add New → Project, conecte sua conta do GitHub e importe esse repositório.
5. Confira as configurações abaixo e clique Deploy. O arquivo vercel.json já contém as opções de compilação.
6. Ao terminar, abra Visit para acessar a URL gerada.

| Campo | Valor |
|---|---|
| Framework Preset | Vite |
| Root Directory | ./ (raiz do repositório) |
| Build Command | pnpm build |
| Output Directory | dist |
| Install Command | pnpm install --frozen-lockfile |
| Node.js | 22.x |
| Environment Variables | Nenhuma |

Não selecione Next.js: esta cópia usa Vite. Se você colocou os arquivos dentro de uma subpasta no repositório, escolha essa subpasta em Root Directory.

## Executar localmente

Instale Node.js 22 e pnpm. Dentro da pasta:

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Para conferir a versão de produção:

```sh
pnpm build
pnpm preview
```

## Conteúdo e privacidade

Edite textos, contatos, fotos e categorias em app/content.ts. A paleta e o layout estão em app/globals.css.

A cópia mantém a identificação de prévia da Krany Media e o bloqueio de indexação, incluindo cabeçalho X-Robots-Tag na Vercel. O bloqueio de indexação não restringe acesso. A proteção privada da versão hospedada no Sites não é transferida para a Vercel. Para manter a demonstração privada, confira Settings → Deployment Protection e quais URLs estão protegidas antes de compartilhar.

## Pendências com a proprietária

Confirmar endereço, cidade, horários, serviços (especialmente penteados), identidade visual, fotos originais e autorização de uso das imagens. Os detalhes continuam documentados em app/content.ts.

As imagens são recortes dos prints fornecidos, sem fotos geradas ou de banco. O site apenas abre o WhatsApp com uma mensagem; não envia mensagens nem confirma agendamentos.

## Referências oficiais

- https://vercel.com/docs/frameworks/frontend/vite
- https://vercel.com/docs/git
- https://vercel.com/docs/deployment-protection
