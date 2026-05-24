"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {

    fetch("https://api.github.com/users/BeatrizPagliani/repos?per_page=30&sort=updated")
      .then((response) => response.json())
      .then((data) => setRepos(data));

  }, []);

  return (

    <main className="grid-bg bg-[#111111] text-[#f5f5f5] overflow-hidden relative">

      {/* CYBER BACKGROUND */}
      <div className="cyber-bg">

        <div className="cyber-line">
          010101 SYSTEM ACTIVE 010101 ACCESS GRANTED
        </div>

        <div className="cyber-line">
          INITIALIZING PORTFOLIO.EXE LOADING MODULES
        </div>

        <div className="cyber-line">
          REACT NODE JAVA PYTHON SQL NEXTJS API
        </div>

        <div className="cyber-line">
          WARNING :: AI SYSTEM DETECTED
        </div>

        <div className="cyber-line">
          USER_CONNECTED :: BEATRIZ PAGLIANI
        </div>

      </div>

      {/* glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#b7efc5] opacity-10 blur-3xl rounded-full top-0 left-0"></div>

      <div className="absolute w-[500px] h-[500px] bg-[#ffc8dd] opacity-10 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* NAVBAR */}
      <nav className="navbar px-6 py-5">

        <div className="section-container flex justify-between items-center">

          <h1 className="pixel-font text-sm md:text-lg text-[#b7efc5]">
            BEATRIZ.EXE
          </h1>

          <div className="flex gap-6 mono-font text-lg">

            <a href="#home" className="hover:text-[#ffc8dd] transition">
              HOME
            </a>

            <a href="#about" className="hover:text-[#ffc8dd] transition">
              ABOUT
            </a>

            <a href="#projects" className="hover:text-[#ffc8dd] transition">
              PROJECTS
            </a>

            <a href="#experience" className="hover:text-[#ffc8dd] transition">
              EXPERIENCE
            </a>

            <a href="#github" className="hover:text-[#ffc8dd] transition">
              API
            </a>

          </div>

        </div>

      </nav>

      {/* ================= HOME ================= */}

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-32"
      >

        <div className="section-container reveal">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* left */}
            <div>

              <p className="mono-font text-[#b7efc5] text-2xl mb-6 cursor">
                PLAYER_01 CONNECTED
              </p>

              <h1 className="pixel-font text-6xl md:text-8xl leading-[1.1] mb-10">

                <span
                  className="glitch block"
                  data-text="BEATRIZ"
                >
                  BEATRIZ
                </span>

                <span
                  className="glitch block"
                  data-text="PAGLIANI"
                >
                  PAGLIANI
                </span>

              </h1>

              <p className="mono-font text-[#d6d6d6] text-2xl leading-10 max-w-2xl mb-10">

                Desenvolvedora em formação explorando
                backend, QA, interfaces futuristas
                e experiências digitais criativas.

              </p>

              <div className="flex gap-4 flex-wrap">

                <a
                  href="#about"
                  className="pixel-font border border-[#ffc8dd] px-6 py-4 text-[#ffc8dd] hover:bg-[#ffc8dd] hover:text-black transition text-xs"
                >
                  ABOUT
                </a>

                <a
                  href="#projects"
                  className="pixel-font border border-[#b7efc5] px-6 py-4 text-[#b7efc5] hover:bg-[#b7efc5] hover:text-black transition text-xs"
                >
                  PROJECTS
                </a>

              </div>

            </div>

            {/* avatar */}
            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 bg-[#b7efc5] opacity-20 blur-3xl rounded-full"></div>

                <img
                  src="foto.png"
                  alt="avatar"
                  className="relative z-10 w-[320px] md:w-[420px] rounded-full border border-[#3a3a3a] avatar-glow"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      <div className="cyber-divider"></div>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="min-h-screen px-6 flex items-center"
      >

        <div className="section-container reveal">

          <p className="mono-font text-[#ffc8dd] text-xl mb-4">
            PLAYER PROFILE
          </p>

          <h2 className="pixel-font text-4xl md:text-6xl mb-16">
            ABOUT_ME.EXE
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">

            <div className="scanline neon-hover border border-[#3a3a3a] bg-[#1a1a1a]/70 p-10 rounded-2xl">

              <div className="space-y-8 mono-font text-2xl">

                <div>
                  <p className="text-[#777] mb-2">
                    CLASS
                  </p>

                  <h3 className="text-[#ffc8dd]">
                    Developer / QA
                  </h3>
                </div>

                <div>
                  <p className="text-[#777] mb-2">
                    STACK
                  </p>

                  <h3 className="text-[#b7efc5]">
                    React • Node • Java • Python
                  </h3>
                </div>

                <div>
                  <p className="text-[#777] mb-2">
                    DATABASE
                  </p>

                  <h3 className="text-[#cddafd]">
                    SQL • PostgreSQL • Oracle
                  </h3>
                </div>

              </div>

            </div>

            <div className="scanline neon-hover border border-[#3a3a3a] bg-[#1a1a1a]/70 p-10 rounded-2xl">

              <p className="mono-font leading-10 text-[#d6d6d6] text-2xl">

                Estudante de Sistemas para Internet
                apaixonada por desenvolvimento web,
                QA, design cyberpunk e experiências
                digitais criativas.

                <br />
                <br />

                Atualmente criando projetos com
                React, Node.js e explorando
                interfaces futuristas.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="cyber-divider"></div>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="min-h-screen px-6 py-20"
      >

        <div className="section-container reveal">

          <p className="mono-font text-[#cddafd] text-xl mb-4">
            MISSIONS DATABASE
          </p>

          <h2 className="pixel-font text-4xl md:text-6xl mb-16">
            PROJECTS.EXE
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                nome: "KLAQUET",
                descricao:
                  "Aplicação inspirada no Letterboxd para avaliações de filmes e séries.",
                cor: "#b7efc5",
              },

              {
                nome: "DAILY_DIET_API",
                descricao:
                  "API REST utilizando Node.js para gerenciamento alimentar.",
                cor: "#ffc8dd",
              },

              {
                nome: "DICE_GAME",
                descricao:
                  "Jogo interativo criado com React.",
                cor: "#cddafd",
              },

              {
                nome: "USE_ECO",
                descricao:
                  "Projeto sustentável desenvolvido em equipe.",
                cor: "#d8ffd8",
              },
            ].map((projeto) => (

              <div
                key={projeto.nome}
                className="project-card neon-hover border border-[#3a3a3a] bg-[#1a1a1a]/70 rounded-2xl p-10"
              >

                <p
                  className="mono-font text-lg mb-4"
                  style={{ color: projeto.cor }}
                >
                  MISSION
                </p>

                <h3
                  className="pixel-font text-2xl mb-6"
                  style={{ color: projeto.cor }}
                >
                  {projeto.nome}
                </h3>

                <p className="mono-font text-[#d6d6d6] leading-8 text-2xl">

                  {projeto.descricao}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <div className="cyber-divider"></div>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="min-h-screen px-6 py-20"
      >

        <div className="section-container reveal">

          <p className="mono-font text-[#ffc8dd] text-xl mb-4">
            CAREER LOG
          </p>

          <h2 className="pixel-font text-4xl md:text-6xl mb-16">
            EXPERIENCE.EXE
          </h2>

          <div className="space-y-8">

            <div className="neon-hover border border-[#3a3a3a] bg-[#1a1a1a]/70 rounded-2xl p-10">

              <p className="mono-font text-[#b7efc5] mb-3">
                2026 • QA INTERN
              </p>

              <h3 className="pixel-font text-2xl mb-4 text-[#ffc8dd]">
                MV SISTEMAS
              </h3>

              <p className="mono-font text-[#d6d6d6] text-xl leading-8">

                Estágio em Quality Assurance com foco em testes,
                automação, qualidade de software e processos ágeis.

              </p>

            </div>

            <div className="neon-hover border border-[#3a3a3a] bg-[#1a1a1a]/70 rounded-2xl p-10">

              <p className="mono-font text-[#b7efc5] mb-3">
                2026 • VOLUNTEER
              </p>

              <h3 className="pixel-font text-2xl mb-4 text-[#cddafd]">
                JORNADA TECNOLÓGICA UNICAP
              </h3>

              <p className="mono-font text-[#d6d6d6] text-xl leading-8">

                Participação voluntária em eventos,
                hackathons, minicursos e palestras
                voltadas para tecnologia e inovação.

              </p>

            </div>

            <div className="neon-hover border border-[#3a3a3a] bg-[#1a1a1a]/70 rounded-2xl p-10">

              <p className="mono-font text-[#b7efc5] mb-3">
                2025 - NOW • STUDENT
              </p>

              <h3 className="pixel-font text-2xl mb-4 text-[#b7efc5]">
                SISTEMAS PARA INTERNET
              </h3>

              <p className="mono-font text-[#d6d6d6] text-xl leading-8">

                Universidade Católica de Pernambuco.
                Desenvolvimento web, APIs, banco de dados,
                UI/UX e engenharia de software.

              </p>

            </div>

          </div>

        </div>

      </section>

      <div className="cyber-divider"></div>

      {/* ================= GITHUB REPOS ================= */}
      
      <section
      id="github"
      className="min-h-screen px-6 py-20"
      >
      <div className="section-container reveal">
      
      <p className="mono-font text-[#b7efc5] text-xl mb-4">
      LIVE DATABASE
      </p>
      
      <h2 className="pixel-font text-4xl md:text-6xl mb-16">
      GITHUB_PROJECTS.EXE
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        
        {repos.map((repo) => (
          
          <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          className="neon-hover border border-[#3a3a3a] bg-[#1a1a1a]/70 rounded-2xl p-10 block"
          >
            
            <p className="mono-font text-[#777] mb-4">
            REPOSITORY
            
            </p>
            
            <h3 className="pixel-font text-2xl text-[#b7efc5] mb-6 break-words">
              
              {repo.name}
              
            </h3>
            
            <p className="mono-font text-[#d6d6d6] leading-8 text-xl">
              
              {repo.description
              ? repo.description
              : "No description available."}
            </p>
            
            </a>
          
          ))}
          
          </div>
          
          </div>
          </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-[#2d2d2d] py-10 px-6 bg-[#0d0d0d]">

        <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">

          <div>

            <h3 className="pixel-font text-[#b7efc5] text-xl mb-2">
              BEATRIZ.EXE
            </h3>

            <p className="mono-font text-[#777]">
              SYSTEM ONLINE © 2026
            </p>

          </div>

          <div className="flex gap-6 mono-font text-lg">

            <a
              href="https://github.com/BeatrizPagliani"
              target="_blank"
              className="hover:text-[#ffc8dd] transition"
            >
              GITHUB
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-[#ffc8dd] transition"
            >
              LINKEDIN
            </a>

            <a
              href="mailto:beatrizsales.pcc@gmail.com"
              className="hover:text-[#ffc8dd] transition"
            >
              EMAIL
            </a>

          </div>

        </div>

      </footer>

    </main>

  );
}