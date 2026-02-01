/**
 * Swiss Modernism with Financial Report Aesthetic
 * - Precise grid-based layout (8px system)
 * - Information-dense with clear hierarchy
 * - Desaturated palette: navy blue (#1e3a8a) + muted gold (#d4af37)
 * - Helvetica-like typography (Inter) with generous line-height
 * - Hairline dividers and subtle interactions
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Briefcase, CheckCircle2, Clock, DollarSign, Globe, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-medium tracking-tight text-foreground">
                Python Career Roadmap
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Análise Estratégica para USD 20.000+/mês
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                Jan 2026
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border/50 bg-card">
        <div className="container py-16">
          <div className="grid grid-cols-12 gap-8">
            {/* Left: Current State */}
            <div className="col-span-12 md:col-span-5">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  Situação Atual
                </span>
                <div>
                  <div className="text-5xl font-light text-muted-foreground/60">
                    USD 1.000
                  </div>
                  <div className="text-sm text-muted-foreground mt-2">
                    por mês
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>Técnico de Infraestrutura</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>5 anos em TI (infraestrutura/suporte)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span>0 anos em desenvolvimento Python</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Center: Arrow */}
            <div className="col-span-12 md:col-span-2 flex items-center justify-center">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            {/* Right: Target State */}
            <div className="col-span-12 md:col-span-5">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-wider text-accent">
                  Objetivo
                </span>
                <div>
                  <div className="text-5xl font-light text-primary">
                    USD 20.000
                  </div>
                  <div className="text-sm text-foreground mt-2">
                    por mês
                  </div>
                </div>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span>Senior Python Engineer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span>5-8 anos em desenvolvimento Python</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span>Mercado internacional (EUA, Europa, Remote)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="text-center p-6 border border-border/50 bg-background">
                <div className="text-3xl font-light text-primary mb-2">20-30x</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Gap Salarial
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="text-center p-6 border border-border/50 bg-background">
                <div className="text-3xl font-light text-primary mb-2">24-36</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Meses Estimados
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="text-center p-6 border border-border/50 bg-background">
                <div className="text-3xl font-light text-accent mb-2">C1-C2</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Inglês Necessário
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12">
        <Tabs defaultValue="market" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 h-auto p-1">
            <TabsTrigger value="market" className="text-xs uppercase tracking-wider py-3">
              Mercado
            </TabsTrigger>
            <TabsTrigger value="gap" className="text-xs uppercase tracking-wider py-3">
              Gap Analysis
            </TabsTrigger>
            <TabsTrigger value="roadmap" className="text-xs uppercase tracking-wider py-3">
              Roadmap
            </TabsTrigger>
            <TabsTrigger value="cv" className="text-xs uppercase tracking-wider py-3">
              CV Otimizado
            </TabsTrigger>
          </TabsList>

          {/* Tab 1: Market Analysis */}
          <TabsContent value="market" className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium mb-2">Mapeamento de Cargos USD 20K+/mês</h2>
              <p className="text-sm text-muted-foreground">
                Cargos Python que pagam a partir de USD 20.000 por mês no mercado internacional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cargo 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium">Senior Python Engineer</CardTitle>
                      <CardDescription className="mt-1">L5-L6 (Amazon, Google, Meta)</CardDescription>
                    </div>
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-2xl font-light text-primary">USD 20-30K</div>
                    <div className="text-xs text-muted-foreground">por mês (USD 240-360K/ano)</div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>EUA, Canadá, Europa</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>5-8 anos de experiência</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <span>Full-time, alguns remote</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Requisitos Principais
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Python avançado (3.9+)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Django/FastAPI em produção</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>AWS/GCP/Azure avançado</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Docker + Kubernetes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>System design e microservices</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Cargo 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium">Staff Python Engineer</CardTitle>
                      <CardDescription className="mt-1">L6-L7 (FAANG, Unicórnios)</CardDescription>
                    </div>
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-2xl font-light text-primary">USD 30-45K</div>
                    <div className="text-xs text-muted-foreground">por mês (USD 360-540K/ano)</div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>EUA (principalmente)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>8-12 anos de experiência</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <span>Full-time, raras remote</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Requisitos Principais
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Todos os requisitos de Senior +</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Liderança técnica de múltiplos times</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Experiência em escala (milhões de usuários)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Contribuições open-source relevantes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Papers técnicos ou palestras</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Cargo 3 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium">ML Engineer (Python)</CardTitle>
                      <CardDescription className="mt-1">Senior-Staff Level</CardDescription>
                    </div>
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-2xl font-light text-primary">USD 25-50K</div>
                    <div className="text-xs text-muted-foreground">por mês (USD 300-600K/ano)</div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>EUA (SF, Seattle), Remote (crescente)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>5-10 anos de experiência</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <span>Full-time, alguns remote</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Requisitos Principais
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Python avançado + ML frameworks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>TensorFlow, PyTorch, scikit-learn</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>MLOps (MLflow, Kubeflow, SageMaker)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Data engineering (Spark, Airflow)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Math: álgebra linear, estatística</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Cargo 4 */}
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium">Python Contractor/Freelancer</CardTitle>
                      <CardDescription className="mt-1">B2B, Global Remote</CardDescription>
                    </div>
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-2xl font-light text-primary">USD 24-48K</div>
                    <div className="text-xs text-muted-foreground">por mês (USD 150-300/hora)</div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-muted-foreground" />
                      <span>Global, 100% remote</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span>6-10 anos de experiência</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                      <span>Contractor, B2B, PJ</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Requisitos Principais
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Portfolio robusto e demonstrável</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Reputação em plataformas (Toptal, Gun.io)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Especialização em nicho específico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Network forte e referências</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Capacidade de trabalhar de forma autônoma</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-8" />

            <div>
              <h3 className="text-xl font-medium mb-4">Empresas que Mais Pagam</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-border/50 p-4 bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">OpenAI</span>
                    <DollarSign className="w-4 h-4 text-accent" />
                  </div>
                  <div className="text-2xl font-light text-primary">USD 71K</div>
                  <div className="text-xs text-muted-foreground">por mês (mediana)</div>
                </div>
                <div className="border border-border/50 p-4 bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">xAI</span>
                    <DollarSign className="w-4 h-4 text-accent" />
                  </div>
                  <div className="text-2xl font-light text-primary">USD 54K</div>
                  <div className="text-xs text-muted-foreground">por mês (mediana)</div>
                </div>
                <div className="border border-border/50 p-4 bg-card">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Netflix</span>
                    <DollarSign className="w-4 h-4 text-accent" />
                  </div>
                  <div className="text-2xl font-light text-primary">USD 52K</div>
                  <div className="text-xs text-muted-foreground">por mês (mediana)</div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 2: Gap Analysis */}
          <TabsContent value="gap" className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium mb-2">Análise de Gaps Críticos</h2>
              <p className="text-sm text-muted-foreground">
                Comparação entre perfil atual e perfil ideal para USD 20K+/mês
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Gap 1: Experiência */}
              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium">Experiência Profissional</CardTitle>
                      <CardDescription className="mt-1">Gap Crítico - Bloqueador</CardDescription>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Atual</span>
                      <span className="font-medium">0 anos em desenvolvimento</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Ideal</span>
                      <span className="font-medium">5-8 anos em Python</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <Separator />
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Ação necessária:</span> Conseguir primeiro emprego como Python Developer (aceitar júnior) e acumular 3-5 anos de experiência em desenvolvimento.
                  </div>
                </CardContent>
              </Card>

              {/* Gap 2: Portfolio */}
              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium">Portfolio de Projetos</CardTitle>
                      <CardDescription className="mt-1">Gap Crítico - Bloqueador</CardDescription>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Atual</span>
                      <span className="font-medium">0 projetos demonstráveis</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Ideal</span>
                      <span className="font-medium">5-7 projetos completos</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <Separator />
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Ação necessária:</span> Criar 3-5 projetos Python completos nos próximos 6 meses, documentar com README profissional e contribuir para open-source.
                  </div>
                </CardContent>
              </Card>

              {/* Gap 3: Inglês */}
              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium">Proficiência em Inglês</CardTitle>
                      <CardDescription className="mt-1">Gap Crítico - Bloqueador</CardDescription>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Atual</span>
                      <span className="font-medium">Intermediário (B1-B2)</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Ideal</span>
                      <span className="font-medium">Fluente (C1-C2)</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <Separator />
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Ação necessária:</span> Estudo intensivo de inglês (1h/dia), conversação com nativos (iTalki, Cambly) e imersão em conteúdo técnico. Meta: C1 em 12-18 meses.
                  </div>
                </CardContent>
              </Card>

              {/* Gap 4: Posicionamento */}
              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg font-medium">Posicionamento Profissional</CardTitle>
                      <CardDescription className="mt-1">Gap Crítico - Bloqueador</CardDescription>
                    </div>
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Atual</span>
                      <span className="font-medium">Técnico de Infraestrutura</span>
                    </div>
                    <Progress value={20} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Ideal</span>
                      <span className="font-medium">Senior Python Engineer</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <Separator />
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Ação necessária:</span> Reescrever título no LinkedIn para "Python Backend Developer", atualizar seção About focando em desenvolvimento e criar versão em inglês do perfil completo.
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-8" />

            <div>
              <h3 className="text-xl font-medium mb-4">Resumo Executivo</h3>
              <div className="border border-border/50 p-6 bg-card space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Gap Total
                    </div>
                    <div className="text-3xl font-light text-destructive">20-30x</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Diferença salarial
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Tempo Estimado
                    </div>
                    <div className="text-3xl font-light text-primary">24-36</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Meses até objetivo
                    </div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Viabilidade
                    </div>
                    <div className="text-3xl font-light text-accent">Alta</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Com dedicação e estratégia
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="text-sm text-muted-foreground leading-relaxed">
                  O candidato está em transição de carreira (infraestrutura → desenvolvimento), o que representa um desafio significativo. O gap principal não é apenas técnico, mas de <span className="font-medium text-foreground">experiência comprovada</span> em desenvolvimento de software. É possível alcançar USD 20K+/mês, mas requer dedicação intensa, tempo (24-36 meses) e estratégia clara. O risco principal é tentar pular etapas, resultando em rejeições e frustração.
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Tab 3: Roadmap */}
          <TabsContent value="roadmap" className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium mb-2">Roadmap Estratégico</h2>
              <p className="text-sm text-muted-foreground">
                Plano de ação detalhado para alcançar USD 20K+/mês em 24-36 meses
              </p>
            </div>

            {/* Fase 1: Curto Prazo */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium">Curto Prazo (0-3 meses)</h3>
                  <p className="text-sm text-muted-foreground">Fundação e Posicionamento</p>
                </div>
              </div>

              <div className="ml-11 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">O que estudar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Python Avançado (4-6 semanas)</div>
                        <div className="text-sm text-muted-foreground">
                          Type hints, async/await, decorators, context managers, design patterns, performance optimization
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Framework Backend (4-6 semanas)</div>
                        <div className="text-sm text-muted-foreground">
                          FastAPI OU Django REST Framework (escolher um), autenticação (JWT, OAuth2), testing (pytest)
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Inglês Técnico (diário, 30min/dia)</div>
                        <div className="text-sm text-muted-foreground">
                          Vocabulário técnico, leitura de documentação, tech talks em inglês, prática de escrita técnica
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">O que construir</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Projeto 1: REST API Completa (2-3 semanas)</div>
                        <div className="text-sm text-muted-foreground">
                          API de gerenciamento com CRUD, autenticação, testes (coverage &gt;80%), documentação Swagger, deploy em cloud
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Projeto 2: API com Integrações (2-3 semanas)</div>
                        <div className="text-sm text-muted-foreground">
                          Integração com APIs externas (Stripe, SendGrid, AWS S3), background tasks (Celery + Redis), rate limiting
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Portfolio Website (1 semana)</div>
                        <div className="text-sm text-muted-foreground">
                          Site pessoal com projetos, links para GitHub e LinkedIn, blog técnico (opcional)
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">O que comprovar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">LinkedIn otimizado (título: "Python Backend Developer", perfil em inglês)</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">GitHub ativo (2 projetos completos, commits regulares)</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">CV reescrito (versão em inglês, foco 100% em desenvolvimento)</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Fase 2: Médio Prazo */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium">Médio Prazo (3-9 meses)</h3>
                  <p className="text-sm text-muted-foreground">Especialização e Experiência</p>
                </div>
              </div>

              <div className="ml-11 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">O que estudar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Cloud & DevOps (2-3 meses)</div>
                        <div className="text-sm text-muted-foreground">
                          AWS (EC2, Lambda, S3, RDS), Docker & Kubernetes, CI/CD (GitHub Actions), certificação AWS Developer Associate
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">System Design (2-3 meses)</div>
                        <div className="text-sm text-muted-foreground">
                          Distributed systems, database scaling, caching strategies (Redis), load balancing
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Algoritmos e Estruturas de Dados (contínuo)</div>
                        <div className="text-sm text-muted-foreground">
                          LeetCode: 100+ problemas (easy + medium), 3-4 problemas por semana
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">O que construir</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Projeto 3: Sistema Escalável (2-3 meses)</div>
                        <div className="text-sm text-muted-foreground">
                          Microservices architecture, message queue (RabbitMQ/Kafka), monitoring (Prometheus + Grafana), deploy em Kubernetes
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Projeto 4: Contribuição Open-Source (contínuo)</div>
                        <div className="text-sm text-muted-foreground">
                          Contribuir para projetos Python populares (Django, FastAPI), objetivo: 5-10 PRs aceitos
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">O que comprovar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">Conseguir primeiro emprego como Python Developer (aceitar júnior, USD 3-5K/mês)</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">AWS Certified Developer Associate</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">Network internacional (300+ conexões no LinkedIn)</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            {/* Fase 3: Longo Prazo */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium">Longo Prazo (9-18 meses)</h3>
                  <p className="text-sm text-muted-foreground">Senioridade e Transição para USD 20K+</p>
                </div>
              </div>

              <div className="ml-11 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">O que estudar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Especialização Avançada (escolher uma área)</div>
                        <div className="text-sm text-muted-foreground">
                          Machine Learning Engineering, Fintech/Payment Systems, ou High-Scale Backend
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Liderança Técnica</div>
                        <div className="text-sm text-muted-foreground">
                          Mentoria de desenvolvedores júnior, code review best practices, technical writing, apresentações técnicas
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Inglês Fluente (C1-C2)</div>
                        <div className="text-sm text-muted-foreground">
                          Conversação diária, mock interviews em inglês, apresentações técnicas em inglês
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">O que construir</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Projeto 6: Sistema de Produção Completo (3-4 meses)</div>
                        <div className="text-sm text-muted-foreground">
                          Aplicação end-to-end com 1000+ usuários reais, monitoring, alerting, on-call, CI/CD completo, case study com métricas
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="text-sm font-medium">Conteúdo Técnico</div>
                        <div className="text-sm text-muted-foreground">
                          10-15 artigos técnicos publicados, 1-2 palestras em meetups/conferências
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base font-medium">O que comprovar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">2-3 anos como Python Developer (total 5-8 anos em tech)</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">Portfolio robusto (5-7 projetos + open-source)</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">200+ problemas LeetCode, 10+ mock interviews de system design</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="text-sm">Aplicar para 50-100 vagas USD 20K+ (FAANG, unicórnios, remote-first)</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Tab 4: CV Otimizado */}
          <TabsContent value="cv" className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium mb-2">CV Otimizado</h2>
              <p className="text-sm text-muted-foreground">
                Versões reescritas do currículo (Português e Inglês) focadas em desenvolvimento Python
              </p>
            </div>

            <div className="border border-border/50 p-6 bg-card space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Observação Importante</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Os CVs otimizados foram criados com base no roadmap estratégico e representam o perfil ideal que o candidato deve construir. As seções de "Projetos" e "Habilidades" são baseadas em projetos que ainda precisam ser desenvolvidos. O candidato deve usar estes CVs como referência para guiar seu desenvolvimento profissional nos próximos meses.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">CV em Português</CardTitle>
                  <CardDescription className="mt-1">
                    Versão otimizada para mercado brasileiro e empresas latinas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Currículo reescrito com foco em desenvolvimento Python, incluindo projetos demonstráveis, habilidades técnicas específicas e experiência quantificada.
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Principais Mudanças
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Título mudado para "Python Backend Developer"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Seção de projetos técnicos adicionada</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Habilidades técnicas específicas listadas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Experiência quantificada com métricas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Links para GitHub e portfolio adicionados</span>
                      </li>
                    </ul>
                  </div>
                  <Separator />
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/CV_Tiago_Torres_PT.md" download>
                      Download CV (PT)
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">CV em Inglês</CardTitle>
                  <CardDescription className="mt-1">
                    Versão otimizada para mercado internacional (EUA, Europa, Remote)
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">
                    Resume rewritten with focus on Python development, including demonstrable projects, specific technical skills, and quantified experience.
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      Key Changes
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Title changed to "Python Backend Developer"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Technical projects section added</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Specific technical skills listed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Experience quantified with metrics</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Links to GitHub and portfolio added</span>
                      </li>
                    </ul>
                  </div>
                  <Separator />
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/CV_Tiago_Torres_EN.md" download>
                      Download Resume (EN)
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card mt-16">
        <div className="container py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              Análise criada por Manus AI • Janeiro 2026
            </div>
            <div className="text-xs text-muted-foreground">
              Fontes: Levels.fyi, ZipRecruiter, Glassdoor, Reddit, Medium
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
