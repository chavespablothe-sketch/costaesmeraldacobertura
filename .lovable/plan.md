
Diagnóstico:
- O problema não está no componente das suítes. `src/components/landing/SuitesSection.tsx` já importa corretamente:
  - `@/assets/property/suite1-new.jpg`
  - `@/assets/property/suite-principal-new.jpg`
  - `@/assets/property/suite3-new.jpg`
- O erro real foi no fluxo de asset: as imagens do chat ficaram em `user-uploads://...`, mas não foram efetivamente copiadas para esses arquivos do projeto.
- Há um indício claro disso: na tentativa anterior foi dito que a sincronização tinha sido feita, mas não houve nenhuma mudança real de arquivo.

Plano de correção:
1. Copiar de fato os uploads atuais para os assets usados pela seção:
   - `user-uploads://suite_1-2.jpg` → `src/assets/property/suite1-new.jpg`
   - `user-uploads://suite_principal-2.jpg` → `src/assets/property/suite-principal-new.jpg`
   - `user-uploads://suite_3-2.jpg` → `src/assets/property/suite3-new.jpg`
2. Manter `SuitesSection.tsx` como está, porque a lógica do full screen já está pronta e apontando para esses caminhos.
3. Validar se não existe referência antiga paralela para as suítes em outro componente ou outro nome de arquivo.
4. Depois da cópia, conferir no preview se:
   - os 3 cards mostram as novas fotos
   - o clique abre em tela cheia usando as mesmas novas imagens
   - mobile continua bom visualmente

Observação importante:
- Se você aprovar, a correção é objetiva e deve ser feita nos arquivos de imagem, não no layout.
- Se ainda assim falhar depois da cópia real, o próximo passo seria verificar cache/build de asset, mas hoje o indício principal é que a cópia nunca aconteceu.
