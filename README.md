# MF Despachante - Landing Page

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

> Uma Landing Page de alta conversão desenvolvida para o **MF Despachante**, focada em regularização veicular, documentação marítima e serviços da Polícia Federal.

---

## 📸 Preview

<div align="center">
  <img src="./public/logo.png" alt="Logo MF Despachante" width="200" style="margin-bottom: 20px;">
  <br>
  <em>Identidade visual moderna com estética Neon e alta performance.</em>
</div>

## 🚀 Sobre o Projeto

Este projeto foi desenvolvido pela **UlerichLabs** com o objetivo de digitalizar a presença do MF Despachante. A aplicação foca em **UX (Experiência do Usuário)** e **Performance**, garantindo que o cliente encontre o serviço desejado e entre em contato via WhatsApp com apenas um clique.

### Principais Funcionalidades

* **⚡ Performance Otimizada:** Build ultra-rápido com Vite e carregamento instantâneo.
* **📱 Design Responsivo (Mobile First):** Layout adaptável para celulares, tablets e desktops.
* **🎨 UI Moderna:** Estilo "Dark Mode" com identidade visual em Neon (Azul/Rosa) e efeitos de glassmorphism.
* **💬 Integração com WhatsApp:** Botões de CTA (Call to Action) estratégicos que levam direto para o atendimento.
* **📍 Localização Integrada:** Mapa e endereço linkados diretamente ao Google Maps.
* **🛠️ Catálogo de Serviços:** Listagem clara de serviços (Detran, Marinha, Armas, ANTT).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando as melhores práticas do mercado de Front-end atual:

* **[React.js](https://reactjs.org/)**: Biblioteca JavaScript para construção da interface.
* **[Vite](https://vitejs.dev/)**: Tooling de frontend para builds extremamente rápidos.
* **[Tailwind CSS](https://tailwindcss.com/)**: Framework de CSS utilitário para estilização ágil e responsiva.
* **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leves e consistentes.
* **[Vercel](https://vercel.com/)**: Plataforma de deploy e hospedagem (CI/CD).

---

## 📂 Estrutura de Pastas

```bash
mf-despachante/
├── public/              # Arquivos estáticos (favicon, logos, robots.txt)
├── src/
│   ├── assets/          # Imagens e vetores importados via código
│   ├── components/      # Componentes React reutilizáveis (Hero, Navbar, Footer...)
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Ponto de entrada da aplicação
│   └── index.css        # Configurações globais do Tailwind
├── index.html           # HTML raiz
├── tailwind.config.js   # Configuração do tema e cores personalizadas (mf-blue, mf-red)
└── vite.config.js       # Configuração do Vite