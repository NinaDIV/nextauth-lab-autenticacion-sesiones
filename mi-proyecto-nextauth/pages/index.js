import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  // Evitar hidration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>NextAuth Lab - Autenticación y Sesiones</title>
        <meta 
          name="description" 
          content="Laboratorio de autenticación segura con NextAuth.js, Google y GitHub OAuth" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Milward Fernando Nina Mayta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.nav}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🔐</span>
              <span className={styles.logoText}>NextAuth Lab</span>
            </div>
            <div className={styles.navLinks}>
              {session ? (
                <Link href="/dashboard" className={styles.navLink}>
                  Dashboard
                </Link>
              ) : (
                <Link href="/login" className={styles.navLink}>
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className={styles.main}>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Laboratorio de{" "}
                <span className={styles.gradient}>Autenticación</span>
                <br />
                y Manejo de Sesiones
              </h1>
              
              <p className={styles.heroDescription}>
                Implementación de autenticación segura en Next.js usando NextAuth.js 
                con proveedores OAuth de Google y GitHub, manejo avanzado de sesiones 
                y control de roles de usuario.
              </p>

              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>2</span>
                  <span className={styles.statLabel}>Proveedores OAuth</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Seguro</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>∞</span>
                  <span className={styles.statLabel}>Escalable</span>
                </div>
              </div>

              <div className={styles.heroActions}>
                {session ? (
                  <div className={styles.welcomeBack}>
                    <p className={styles.welcomeText}>
                      ¡Bienvenido de vuelta, {session.user?.name}! 👋
                    </p>
                    <Link href="/dashboard" className={styles.primaryButton}>
                      Ir al Dashboard
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link href="/login" className={styles.primaryButton}>
                      Probar Autenticación
                    </Link>
                    <a 
                      href="#features" 
                      className={styles.secondaryButton}
                    >
                      Ver Características
                    </a>
                  </>
                )}
              </div>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.authCard}>
                <div className={styles.authHeader}>
                  <div className={styles.authDots}>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                  </div>
                </div>
                <div className={styles.authBody}>
                  <div className={styles.authIcon}>🔒</div>
                  <h3>Autenticación Segura</h3>
                  <div className={styles.providerButtons}>
                    <div className={styles.providerBtn}>
                      <span className={styles.googleIcon}>G</span> Google
                    </div>
                    <div className={styles.providerBtn}>
                      <span className={styles.githubIcon}>⚡</span> GitHub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <section id="features" className={styles.features}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Características Implementadas</h2>
              <p className={styles.sectionDescription}>
                Tecnologías y funcionalidades integradas en este laboratorio
              </p>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🚀</div>
                <h3 className={styles.featureTitle}>Next.js Framework</h3>
                <p className={styles.featureDescription}>
                  Aplicación full-stack con SSR, API routes y optimizaciones automáticas
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔐</div>
                <h3 className={styles.featureTitle}>NextAuth.js</h3>
                <p className={styles.featureDescription}>
                  Autenticación completa con manejo de sesiones, tokens y callbacks
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌐</div>
                <h3 className={styles.featureTitle}>OAuth Providers</h3>
                <p className={styles.featureDescription}>
                  Integración con Google y GitHub para autenticación social
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🛡️</div>
                <h3 className={styles.featureTitle}>Seguridad</h3>
                <p className={styles.featureDescription}>
                  CSRF protection, JWT tokens seguros y validación de sesiones
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⚡</div>
                <h3 className={styles.featureTitle}>Performance</h3>
                <p className={styles.featureDescription}>
                  Optimizaciones de carga, lazy loading y gestión eficiente de estado
                </p>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>📱</div>
                <h3 className={styles.featureTitle}>Responsive</h3>
                <p className={styles.featureDescription}>
                  Diseño adaptable para dispositivos móviles y escritorio
                </p>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className={styles.techStack}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Stack Tecnológico</h2>
            </div>
            
            <div className={styles.techGrid}>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>⚛️</span>
                <span className={styles.techName}>React</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>▲</span>
                <span className={styles.techName}>Next.js</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>🔑</span>
                <span className={styles.techName}>NextAuth</span>
              </div>
              <div className={styles.techItem}>
                <span className={styles.techIcon}>🟢</span>
                <span className={styles.techName}>Node.js</span>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.footerInfo}>
              <h3 className={styles.footerTitle}>NextAuth Laboratorio</h3>
              <p className={styles.footerDescription}>
                Desarrollado por <strong>Milward Fernando Nina Mayta</strong>
              </p>
              <p className={styles.footerDescription}>
                Docente: <strong>Renato Usnayo Cáceres</strong>
              </p>
            </div>
            
            <div className={styles.footerLinks}>
              <a 
                href="https://nextjs.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                Next.js Docs
              </a>
              <a 
                href="https://next-auth.js.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                NextAuth.js
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                GitHub
              </a>
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; 2024 NextAuth Lab. Proyecto académico.</p>
          </div>
        </footer>
      </div>
    </>
  );
}