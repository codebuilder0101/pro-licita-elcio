import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  Star,
  Lock,
  Quote,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SITE,
  HERO,
  PAINS,
  MODULES,
  BENEFITS,
  BONUS,
  TESTIMONIALS,
  FAQ,
} from "@/lib/landing-content";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ============================================================
 * Reusable presentational components
 * ============================================================ */

function CtaButton({
  children,
  variant = "primary",
  href = SITE.checkoutUrl,
  className = "",
  event = "InitiateCheckout",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
  className?: string;
  event?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 text-base font-semibold tracking-tight transition-all duration-200 will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles =
    variant === "primary"
      ? "bg-[var(--emerald-accent)] text-white shadow-[0_10px_30px_-12px_rgba(16,140,90,0.55)] hover:translate-y-[-1px] hover:shadow-[0_18px_40px_-12px_rgba(16,140,90,0.6)]"
      : "bg-transparent text-[var(--navy-deep)] border border-[var(--border)] hover:bg-[var(--bone)]";
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      data-cta-event={event}
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="size-4" />
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--graphite)]/70">
          <span className="inline-block h-px w-6 bg-[var(--gold)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-medium text-[var(--navy-deep)] md:text-[2.5rem] md:leading-[1.1]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base text-[var(--graphite)] md:text-lg">{intro}</p>
      )}
    </div>
  );
}

function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`px-5 py-20 md:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

/* ============================================================
 * Page
 * ============================================================ */

function LandingPage() {
  const waHref = `https://wa.me/${SITE.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(SITE.whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-[var(--bone)] text-[var(--navy-deep)]">
      {/* ============ NAV ============ */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-[var(--bone)]/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center">
            <img
              src="/logo.jpeg"
              alt={SITE.productName}
              className="h-9 w-auto md:h-10"
              loading="eager"
            />
          </a>
          <a
            href={SITE.checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cta-event="InitiateCheckout"
            className="hidden rounded-md bg-[var(--navy-deep)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--navy)] md:inline-block"
          >
            Quero acessar
          </a>
        </div>
      </header>

      {/* ============ HERO ============ */}
      <section
        id="top"
        className="relative overflow-hidden bg-[var(--navy-deep)] text-[var(--bone)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-noise opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 size-[28rem] rounded-full bg-[var(--gold)]/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -left-24 size-[28rem] rounded-full bg-[var(--emerald-accent)]/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-12 md:gap-10 md:px-8 md:py-32">
          <div className="md:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold)]">
              <Sparkles className="size-3.5" /> {HERO.eyebrow}
            </div>
            <h1 className="text-balance font-display text-4xl font-medium leading-[1.05] text-white md:text-6xl">
              {HERO.headline}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              {HERO.sub}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton>{HERO.primaryCta}</CtaButton>
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-1.5 rounded-md px-5 py-4 text-sm font-medium text-white/80 transition hover:text-white"
              >
                {HERO.secondaryCta} →
              </a>
            </div>

            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/55">
              <span className="inline-flex items-center gap-1.5">
                <Lock className="size-3.5" /> {HERO.microcopy}
              </span>
            </p>
          </div>

          {/* Hero visual: e-book do método */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-sm md:max-w-none">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--gold)]/25 via-transparent to-[var(--emerald-accent)]/20 blur-3xl" />
              <div className="relative">
                <img
                  src="/book-image.png"
                  alt="E-book do método Licitação Premium"
                  className="relative mx-auto w-full max-w-[420px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
                  loading="eager"
                />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-[11px] uppercase tracking-[0.16em] text-white/50">
                <div className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-3">+1.200<br /><span className="text-white/40 normal-case tracking-normal">alunos</span></div>
                <div className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-3">7 dias<br /><span className="text-white/40 normal-case tracking-normal">garantia</span></div>
                <div className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-3">4,9★<br /><span className="text-white/40 normal-case tracking-normal">avaliação</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PAIN POINTS ============ */}
      <Section id="dores" className="bg-[var(--bone)]">
        <SectionHeader
          eyebrow="POR QUE TANTAS EMPRESAS SÃO DESCLASSIFICADAS"
          title="Não é falta de oportunidade. É falta de quem te mostre as regras do jogo por dentro"
          intro=""
        />
        <div className="grid gap-4 md:grid-cols-2">
          {PAINS.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition hover:border-[var(--gold)]/40 hover:shadow-[0_12px_40px_-20px_rgba(15,23,42,0.25)]"
            >
              <h3 className="text-lg font-semibold text-[var(--navy-deep)]">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]">{p.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-[var(--graphite)]">Você não precisa de sorte. Precisa de alguém que conhece o outro lado da mesa</p>
          <CtaButton>Quero o método agora</CtaButton>
        </div>
      </Section>

      {/* ============ OPPORTUNITY ============ */}
      <Section className="bg-white">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeader
              eyebrow="A virada de chave"
              title="O governo compra todos os dias. Em todo o Brasil. De empresas de todos os tamanhos"
              intro="São mais de R$ 200 bilhões em contratos públicos movimentados por ano — e a maior parte vai para empresas que simplesmente aprenderam a participar do processo certo"
              align="left"
            />
            <ul className="space-y-3">
              {[
                "Demanda contínua e regulada por lei — o governo não entra em crise de vendas",
                "Pagamento previsível — contratos com prazo, valor e obrigações definidas",
                "Mercado ainda pouco saturado para quem domina o processo",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[var(--graphite)]">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--emerald-accent)]/10 text-[var(--emerald-accent)]">
                    <Check className="size-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-black/5 bg-[var(--navy-deep)] p-8 text-white">
              <Quote className="size-6 text-[var(--gold)]" />
              <p className="mt-4 font-display text-xl leading-snug">
                “Não é privilégio. Não é indicação. É método e trabalho.”
              </p>
              <div className="mt-6 h-px bg-white/10" />
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-white/50">
                Elcio Brack, pregoeiro +12 anos, jurídico preventivo
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ METHOD / OVERVIEW ============ */}
      <Section className="bg-[var(--bone)]">
        <SectionHeader
          eyebrow="O método"
          title="O que eu via como pregoeiro — agora você vai saber também"
          intro="Conteúdo direto, em partes curtas e aplicáveis, criado por quem conduziu centenas de pregões do outro lado da tela"
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Direto ao ponto", desc: "Páginas curtas e sem enrolação. Você aplica no próximo edital enquanto ainda está aprendendo" },
            { title: "Visão de dentro", desc: "Editais reais analisados com o olhar de quem os conduziu — não de quem apenas os estudou" },
            { title: "Para qualquer segmento", desc: "Produtos, serviços, obras, TI, alimentação, locação. O método funciona independente do seu nicho" },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-black/5 bg-white p-7">
              <h3 className="text-lg font-semibold text-[var(--navy-deep)]">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--graphite)]">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-[var(--graphite)]">Sua próxima licitação pode ser diferente</p>
          <CtaButton>Quero garantir meu acesso</CtaButton>
        </div>
      </Section>

      {/* ============ MODULES ============ */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="Conteúdo programático"
          title="O que você vai aprender — e aplicar na próxima licitação"
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 md:grid-cols-2">
          {MODULES.map((m) => (
            <div key={m.n} className="bg-white p-7 transition hover:bg-[var(--bone)]">
              <div className="flex items-baseline gap-4">
                <span className="font-display text-2xl text-[var(--gold)]">{m.n}</span>
                <h3 className="text-lg font-semibold text-[var(--navy-deep)]">{m.title}</h3>
              </div>
              <p className="mt-2 pl-12 text-sm leading-relaxed text-[var(--graphite)]">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============ BENEFITS ============ */}
      <Section className="bg-[var(--bone)]">
        <SectionHeader
          eyebrow="Resultados esperados"
          title="Depois do guia, você para de perder.
E começa a chegar preparado"
        />
        <ul className="grid gap-x-8 gap-y-5 md:grid-cols-2">
          {BENEFITS.map((b) => (
            <li key={b} className="flex items-start gap-3 border-b border-black/5 pb-5 text-[var(--navy-deep)]">
              <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--emerald-accent)] text-white">
                <Check className="size-3" />
              </span>
              <span className="text-[15px] leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <p className="text-sm text-[var(--graphite)]">Cada um desses resultados está a um guia de distância</p>
          <CtaButton>Quero começar agora</CtaButton>
        </div>
      </Section>

      {/* ============ BONUSES ============ */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow={BONUS.sectionEyebrow}
          title={BONUS.sectionTitle}
        />
        <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-black/5 bg-gradient-to-br from-white to-[var(--bone)] shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)]">
          <div className="flex flex-col gap-4 border-b border-black/5 bg-[var(--navy-deep)] px-7 py-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--gold)]">
                {BONUS.badge}
              </span>
              <h3 className="mt-1 font-display text-xl text-white md:text-2xl">
                {BONUS.title}
              </h3>
              <p className="mt-1 text-sm text-white/70">{BONUS.tagline}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">Valor</div>
                <div className="font-display text-xl text-white">{BONUS.value}</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--emerald-accent)]">
                <Check className="size-3.5" /> {BONUS.valueLabel}
              </div>
            </div>
          </div>

          <div className="px-7 py-8">
            <p className="text-[15px] leading-relaxed text-[var(--graphite)]">
              {BONUS.intro}
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2">
              {BONUS.features.map((f) => (
                <li
                  key={f.title}
                  className="flex gap-3 rounded-xl border border-black/5 bg-white p-4"
                >
                  <span className="text-2xl leading-none" aria-hidden>
                    {f.icon}
                  </span>
                  <div>
                    <div className="text-[15px] font-semibold text-[var(--navy-deep)]">
                      {f.title}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--graphite)]">
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-xl bg-[var(--navy-deep)]/[0.04] px-5 py-4 text-center text-[15px] font-medium text-[var(--navy-deep)]">
              {BONUS.footer}
            </div>
          </div>
        </article>
      </Section>

      {/* ============ AUTHORITY ============ */}
      <Section className="bg-[var(--navy-deep)] text-white">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-xs overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02]">
              <img
                src="/elcio.png"
                alt="Elcio — especialista em licitações"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 p-4 text-xs uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                Elcio · Especialista em licitações
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--gold)]">
              <span className="inline-block h-px w-6 bg-[var(--gold)]" /> Quem te ensina
            </div>
            <h2 className="font-display text-3xl font-medium leading-tight md:text-5xl">
              Aprenda a transformar licitações em oportunidades reais de faturamento
            </h2>
            <p className="mt-5 max-w-xl text-white/70">
              Ex-pregoeiro e assessor especialista com mais de 12 anos de experiência ajudando empresas a interpretar editais, evitar erros e entrar no mercado público com mais segurança
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "12+ anos de experiência prática",
                "Centenas de editais analisados",
                "Mentoria a empresas de todo o Brasil",
                "Foco em método replicável",
              ].map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-white/80">
                  <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[var(--gold)]" />
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col items-start gap-2">
              <p className="text-sm text-white/70">Aprenda direto de quem vive o mercado público.</p>
              <CtaButton>Quero aprender com o especialista</CtaButton>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ TESTIMONIALS ============ */}
      <Section className="bg-[var(--bone)]">
        <SectionHeader
          eyebrow="Resultados de alunos"
          title="O que dizem quem já aplicou o método."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-xl border border-black/5 bg-white p-7"
            >
              <div>
                <div className="flex gap-0.5 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15px] leading-relaxed text-[var(--graphite)]">
                  “{t.text}”
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-black/5 pt-4">
                <div className="text-sm font-semibold text-[var(--navy-deep)]">{t.name}</div>
                <div className="text-xs text-[var(--graphite)]/70">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* ============ OFFER ============ */}
      <Section id="oferta" className="bg-white">
        <SectionHeader
          eyebrow="Sua decisão hoje"
          title="A oportunidade está aberta: acesso completo + bônus liberados hoje"
        />
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border-2 border-[var(--navy-deep)]/10 bg-gradient-to-b from-white to-[var(--bone)] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)]">
          <div className="border-b border-black/5 bg-[var(--navy-deep)] px-7 py-5 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              Oferta por tempo limitado
            </p>
            <h3 className="mt-1 font-display text-2xl text-white md:text-3xl">
              {SITE.productName}
            </h3>
          </div>

          <div className="space-y-5 px-7 py-8">
            <ul className="space-y-3 text-sm text-[var(--graphite)]">
              {[
                "Aprenda a interpretar editais sem travar",
"Evite erros que eliminam empresas",
"Acesso vitalício",
"Suporte direto por WhatsApp",
"Atualizações futuras incluídas",
              ].map((i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 shrink-0 text-[var(--emerald-accent)]" />
                  {i}
                </li>
              ))}
            </ul>

            <div className="rounded-xl bg-[var(--navy-deep)]/[0.04] px-5 py-6 text-center">
              <p className="text-sm text-[var(--graphite)] line-through">{SITE.priceFrom}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--graphite)]/70">
                Por apenas
              </p>
              <p className="mt-1 font-display text-4xl font-medium text-[var(--navy-deep)] md:text-5xl">
                {SITE.priceInstallment}
              </p>
              <p className="mt-1 text-sm text-[var(--graphite)]">
                ou {SITE.priceFull} à vista
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--emerald-accent)]/10 px-3 py-1 text-xs font-medium text-[var(--emerald-accent)]">
                {SITE.pricePerDay}
              </p>
            </div>

            <CtaButton className="w-full !py-5 text-base">
              Quero dominar licitações agora
            </CtaButton>

            <div className="flex items-start gap-3 rounded-xl border border-[var(--emerald-accent)]/20 bg-[var(--emerald-accent)]/5 px-4 py-3 text-sm leading-relaxed text-[var(--graphite)]">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[var(--emerald-accent)]" />
              <p>
                Você tem uma semana inteira para acessar todo o conteúdo. Se sentir que não é para você, devolvemos 100% do valor — sem perguntas, sem burocracia.
              </p>
            </div>
          </div>
        </div>
      </Section>


      {/* ============ FAQ ============ */}
      <Section className="bg-white">
        <SectionHeader
          eyebrow="Dúvidas frequentes"
          title="Antes de decidir, é normal ter perguntas."
        />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-black/10"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-[var(--navy-deep)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-[15px] leading-relaxed text-[var(--graphite)]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* ============ FINAL CTA ============ */}
      <Section className="bg-[var(--navy-deep)] text-white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
            <span className="inline-block h-px w-6 bg-[var(--gold)]" /> Última decisão
          </div>
          <h2 className="font-display text-3xl font-medium leading-tight md:text-5xl">
            Cada edital que passa é uma oportunidade que você deixa na mesa.
          </h2>
          <p className="mt-5 text-white/70">
            O governo compra todos os dias. Enquanto muitas empresas deixam oportunidades passarem por falta de conhecimento, outras aprendem a interpretar editais, evitar erros e entrar no jogo com estratégia
          </p>
          <div className="mt-9 flex justify-center">
            <CtaButton>Quero entrar no mercado público agora</CtaButton>
          </div>
        </div>
      </Section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-black/5 bg-[var(--bone)] px-5 py-12 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          <div>
            <div className="font-display text-base font-semibold text-[var(--navy-deep)]">
              {SITE.productName}
            </div>
            <p className="mt-2 max-w-xs text-sm text-[var(--graphite)]">
              {SITE.productSubtitle}
            </p>
          </div>
          <div className="text-sm text-[var(--graphite)]">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--graphite)]/70">
              Suporte
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--navy-deep)] hover:text-[var(--emerald-accent)]"
            >
              <MessageCircle className="size-4" /> WhatsApp de atendimento
            </a>
          </div>
          <div className="text-sm text-[var(--graphite)]">
            <div className="mb-2 text-xs uppercase tracking-[0.18em] text-[var(--graphite)]/70">
              Legal
            </div>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-[var(--navy-deep)]">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-[var(--navy-deep)]">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-black/5 pt-6 text-xs text-[var(--graphite)]/70">
          <p>
            © {new Date().getFullYear()} {SITE.productName}. Todos os direitos reservados.
          </p>
          <p className="mt-2 max-w-3xl">
            <strong>Disclaimer:</strong> este site não é afiliado ao Facebook, Instagram, Google ou Eduzz. Os resultados apresentados são individuais e dependem de aplicação, contexto e esforço de cada aluno. Nada aqui constitui promessa de retorno financeiro.
          </p>
        </div>
      </footer>

      {/* ============ MOBILE STICKY CTA ============ */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <a
          href={SITE.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-cta-event="InitiateCheckout"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--emerald-accent)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_-12px_rgba(16,140,90,0.55)]"
        >
          Quero garantir meu acesso <ArrowRight className="size-4" />
        </a>
      </div>

      {/* ============ FLOATING WHATSAPP ============ */}
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-20 right-4 z-40 grid size-12 place-items-center rounded-full bg-[var(--emerald-accent)] text-white shadow-lg transition hover:scale-105 md:bottom-6 md:right-6"
      >
        <MessageCircle className="size-5" />
      </a>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
