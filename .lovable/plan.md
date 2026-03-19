

## Problema

As fotos que você enviou (`suite_principal.jpg`, `suite_1.jpg`, `suite_3.jpg`) não foram corretamente salvas nos arquivos de destino (`src/assets/property/suite1-new.jpg`, `suite-principal-new.jpg`, `suite3-new.jpg`). O componente referencia esses arquivos, mas o conteúdo real das imagens não foi transferido.

## Plano

1. **Copiar as fotos enviadas para os assets do projeto**
   - `user-uploads://suite_1.jpg` → `src/assets/property/suite1-new.jpg`
   - `user-uploads://suite_principal.jpg` → `src/assets/property/suite-principal-new.jpg`
   - `user-uploads://suite_3.jpg` → `src/assets/property/suite3-new.jpg`

2. **Verificar que o componente SuitesSection.tsx já importa corretamente** (já está ok, sem mudanças necessárias no código)

Nenhuma alteração de código é necessária — apenas a cópia correta dos arquivos de imagem.

