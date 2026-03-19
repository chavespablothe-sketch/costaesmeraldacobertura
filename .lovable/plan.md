
Objetivo: corrigir de vez a seção “As Três Suítes” para as novas fotos aparecerem no preview e no full screen, sem depender do fluxo que já falhou várias vezes.

Diagnóstico
- A seção em si não está quebrada: `src/components/landing/SuitesSection.tsx` já renderiza 3 cards e o lightbox full screen corretamente.
- O ponto frágil está no caminho das imagens. Hoje a seção depende de imports em `src/assets/property/suite1-new.jpg`, `suite-principal-new.jpg` e `suite3-new.jpg`.
- Neste projeto já existe um padrão que funciona para imagem “subida” fora do bundle: `public/lovable-uploads/...` referenciada por URL absoluta (`/lovable-uploads/...`) em `FirstFloorSection.tsx`.
- Então a correção mais segura não é insistir em “copiar upload para src/assets”, e sim usar o mesmo padrão estável que já funciona no projeto: arquivos em `public/lovable-uploads` + referência direta por URL pública.
- Para evitar cache/stale asset, vou usar nomes novos para os arquivos, não reaproveitar `suite1-new.jpg` etc.

Plano de implementação
1. Subir as 3 imagens mais recentes para `public/lovable-uploads/` com nomes únicos, por exemplo:
   - `/lovable-uploads/suite-01-v2.jpg`
   - `/lovable-uploads/suite-principal-v2.jpg`
   - `/lovable-uploads/suite-03-v2.jpg`

2. Alterar `src/components/landing/SuitesSection.tsx`:
   - remover os imports de `@/assets/property/...`
   - trocar `img` no array `suites` para strings públicas:
     - `"/lovable-uploads/suite-01-v2.jpg"`
     - `"/lovable-uploads/suite-principal-v2.jpg"`
     - `"/lovable-uploads/suite-03-v2.jpg"`

3. Manter toda a lógica atual de refinamento visual e lightbox:
   - clique abre full screen
   - setas esquerda/direita
   - `Esc` fecha
   - scroll lock no body

4. Fazer um ajuste pequeno de robustez visual na seção:
   - garantir moldura/fundo elegante mesmo antes da imagem carregar
   - preservar o destaque premium da seção sem mexer no comportamento do lightbox

5. Validar no preview:
   - os 3 cards exibem as novas fotos
   - o full screen abre com as mesmas novas fotos
   - mobile continua correto no viewport atual (390px)

Por que essa abordagem resolve
- Remove a dependência do pipeline que falhou repetidamente com `src/assets`.
- Reaproveita um padrão já comprovado neste projeto (`public/lovable-uploads`).
- Evita cache antigo ao trocar para nomes novos.
- Corrige a origem do problema sem reescrever a seção.

Observação sobre créditos
- Eu não consigo devolver créditos por aqui via código.
- O que eu consigo fazer no app é corrigir a causa técnica com a abordagem acima, que é a mais segura e mais “de dev experiente” para este caso.
