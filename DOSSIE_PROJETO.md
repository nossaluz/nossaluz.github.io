# DOSSIÊ TÉCNICO E ESTRATÉGICO DE PROJETO — NOSSA LUZ

---

## 📌 1. DADOS GERAIS DA EMPRESA
- **Nome da Empresa**: Nossa Luz
- **Segmento**: Loja especializada em produtos de iluminação, decoração e projetos luminotécnicos/cênicos.
- **Localização**: Goiânia - Goiás
- **WhatsApp**: (62) 99885-2844 | URL: `https://wa.me/5562998852844`
- **Slogan**: *"Ilumina, enfeita e encanta"*
- **Repositório GitHub**: `https://github.com/nossaluz/nossaluz.github.io`
- **URL do Site Oficial (GitHub Pages)**: `https://nossaluz.github.io/`

---

## 🎯 2. POSICIONAMENTO DA MARCA
A **Nossa Luz** é uma loja de iluminação e decoração de alto padrão em Goiânia, oferecendo produtos (luminárias, lâmpadas LED, perfis, artigos de decoração) e soluções personalizadas sob medida.

O projeto possui **dois pilares principais com o mesmo nível de importância**:
1. **ILUMINAÇÃO**: Produtos e projetos para ambientes residenciais, comerciais, prediais e públicos.
2. **DECORAÇÃO NATALINA**: Venda de artigos natalinos premium e montagem de projetos decorativos cênicos para fachadas comerciais, condomínios e residências de luxo.

---

## 🎨 3. IDENTIDADE VISUAL & DESIGN SYSTEM
- **Estilo**: *Dark & Warm Gold Mode* (transmitindo sofisticação, tecnologia e luxo).
- **Paleta de Cores**:
  - **Cor Principal**: Cobre Metálico / Laranja queimado (`#D45D2A`)
  - **Cor Secundária**: Dourado Elegante / Champagne (`#C5A880`)
  - **Fundo Escuro**: Marrom Escuro (`#120E0C`) e Chocolate (`#1F1714`)
  - **Textos / Apoio**: Bege Suave (`#F9F6F0`) e Grafite (`#2B2522`)
- **Tipografia**:
  - Títulos: *Playfair Display* (serifa elegante)
  - Corpo: *Inter* (sem serifa, de alta legibilidade)
- **Logotipo Oficial**:
  - Tag HTML: `<img src="https://i.ibb.co/TDQfnRV5/logonlnwsf.webp" alt="logonlnwsf" border="0">`
  - Aplicada no cabeçalho (`height: 74px` normal, `62px` scrolled) e rodapé (`height: 74px`) com filtro de brilho e drop-shadow dourado.

---

## 🛠️ 4. ESTRUTURA TÉCNICA DO CÓDIGO
O projeto é construído em **Vanilla Web Tecnologies** (zero dependências pesadas, nota máxima no PageSpeed Insights):
- **`index.html`**: Estrutura semântica HTML5 com marcações Schema.org e metadados SEO.
- **`styles.css`**: CSS puro com variáveis customizadas, layout responsivo Mobile-First, animações suaves e trava de rolagem horizontal (`overflow-x: hidden`).
- **`script.js`**: JavaScript Vanilla para controle do menu mobile, scroll ativo do header e animações via `IntersectionObserver`.
- **`assets/`**: Imagens em alta definição (`hero.png`, `residential.png`, `commercial.png`, `urban.png`, `christmas.png`).

---

## 🧱 5. HIERARQUIA E SEÇÕES DA LANDING PAGE

1. **CABEÇALHO (HEADER)**
   - Logotipo oficial (à esquerda no mobile, botão de orçamento ocultado no mobile para maior limpeza visual).
   - Menu Desktop & Mobile: `Início`, `Sobre`, `Serviços`, `Diferenciais`, `Projetos`, `Natal`, `Avaliações`, `Contato`.
   - Botão de Ação: Redireciona via scroll suave para a seção `#contato`.

2. **SEÇÃO 1 — HERO PRINCIPAL**
   - **H1**: *"Iluminação e decoração que transformam ambientes em Goiânia"*
   - **Subtítulo**: *"Loja especializada em iluminação e decoração, oferecendo produtos premium, artigos natalinos e soluções personalizadas para valorizar residências, empresas e espaços públicos."*
   - Botão CTA: *"Solicitar orçamento"* (desliza para `#contato`).
   - Estatísticas: 100% Personalizado | +10 Anos de Experiência | Atendimento em Goiânia.

3. **SEÇÃO 2 — SOBRE A EMPRESA**
   - **H2**: *"Loja de iluminação e decoração com soluções sob medida"*
   - Texto institucional reforçando os dois pilares (iluminação técnica/decorativa e decoração natalina).

4. **SEÇÃO 3 — SERVIÇOS E PRODUTOS**
   - **H2**: *"Soluções em iluminação e decoração para todos os ambientes"*
   - **Cards (Grid 4 colunas)**:
     1. **Iluminação Residencial**: Venda de luminárias, produtos e soluções para casas e apartamentos.
     2. **Iluminação Comercial, Predial e Pública**: Soluções para empresas, condomínios e espaços urbanos.
     3. **Projetos Personalizados de Iluminação**: Planejamento luminotécnico conforme o estilo do cliente.
     4. **Decoração Natalina Personalizada**: Venda de artigos natalinos e projetos para fachadas e condomínios.

5. **SEÇÃO 4 — DIFERENCIAIS**
   - **H2**: *"Por que escolher a Nossa Luz?"*
   - Lista iconográfica de 6 pilares de qualidade, garantia e atendimento técnico.

6. **SEÇÃO 5 — GALERIA DE PORTFÓLIO**
   - **H2**: *"Projetos que iluminam histórias"*
   - Grid de 6 fotos limpas (sem overlays de texto sobre as imagens) com botões de filtro funcionais por categoria.

7. **SEÇÃO 6 — DECORAÇÃO NATALINA**
   - **H2**: *"Decoração natalina que transforma espaços"*
   - Seção cênica destacando artigos natalinos premium e projetos para mansões, empresas e condomínios.

8. **SEÇÃO 7 — PROVA SOCIAL / DEPOIMENTOS**
   - **H2**: *"Clientes que confiam na Nossa Luz"*
   - Cards de avaliações 5 estrelas de clientes de Goiânia (Setor Marista, Bueno, Alphaville).

9. **SEÇÃO 8 — CONTATO & LOCALIZAÇÃO (#contato)**
   - **H2**: *"Quer transformar o seu ambiente com luz e decoração?"*
   - Informações completas: Telefone/WhatsApp `(62) 99885-2844`, Localização Goiânia - GO, Horários.
   - Mapa vetorial ilustrativo com marcação pulsante em Goiânia.
   - Botão final de CTA direto para o WhatsApp.

10. **RODAPÉ (FOOTER)**
    - Logotipo oficial (`74px`), links de navegação rápida e direitos autorais.

---

## 🔍 6. SEO TÉCNICO & ESTRUTURA DE METADADOS
- **Title**: `Nossa Luz | Loja de Iluminação e Decoração Natalina em Goiânia`
- **Description**: `Loja de iluminação e decoração em Goiânia. Encontre luminárias premium, artigos natalinos e aluguel de decoração de Natal. Transforme seus ambientes com a Nossa Luz!`
- **Schema.org JSON-LD**:
  ```json
  {
    "@context": "https://schema.org",
    "@type": ["LightingStore", "HomeGoodsStore", "ProfessionalService"],
    "name": "Nossa Luz",
    "image": "https://nossaluz.com.br/assets/hero.png",
    "telephone": "+5562998852844",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "addressCountry": "BR"
    }
  }
  ```

---

## 📱 7. RESPONSIVIDADE E STATUS
- **Status do Projeto**: 100% concluído, totalmente responsivo (sem rolagem lateral/overflow-x no mobile), commitado e publicado no GitHub Pages.
- **Link Online**: `https://nossaluz.github.io/`
