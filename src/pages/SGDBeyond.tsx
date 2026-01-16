import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import {
  TrendingDown,
  BookOpen,
  Target,
  Lightbulb,
  Zap,
  Award,
  Code,
  FileText,
  CheckCircle,
  Sparkles,
  GraduationCap,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

function SGDResearch() {
  const { t } = useTranslation();

  const deliverables = t("sgdbeyond.objectives.deliverables.items", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
  }>;

  const timeline = t("sgdbeyond.timeline.weeks", {
    returnObjects: true,
  }) as Array<{
    period: string;
    title: string;
    description: string;
  }>;

  const benefits = t("sgdbeyond.benefits.items", {
    returnObjects: true,
  }) as Array<{
    title: string;
    description: string;
  }>;

  return (
    <>
      <Helmet>
        <title>SGD Research - Optimisation Stochastique | Club IA ULaval</title>
        <meta
          name="description"
          content="Recherche en optimisation stochastique : améliorer la descente de gradient par injection de bruit intelligent. Publication scientifique au Club IA ULaval."
        />
        <meta
          name="keywords"
          content="SGD, stochastic gradient descent, optimisation, deep learning, recherche, publication scientifique, mathématiques, PyTorch"
        />
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />

        <meta
          property="og:title"
          content="SGD Research - Optimisation Stochastique"
        />
        <meta
          property="og:description"
          content="Projet de recherche visant à améliorer SGD par injection de bruit intelligent. Publication scientifique en cours."
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Club IA - Université Laval" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="SGD Research - Optimisation Stochastique"
        />
        <meta
          name="twitter:description"
          content="Recherche en optimisation pour améliorer l'entraînement des modèles de deep learning"
        />

        <html lang="fr" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ResearchProject",
              "name": "Stochastic Gradient Descent, and Beyond!",
              "description": "Projet de recherche en optimisation stochastique visant à améliorer SGD par injection de bruit intelligent",
              "provider": {
                "@type": "Organization",
                "name": "Club Intelligence Artificielle - Université Laval",
                "url": "https://cia.ift.ulaval.ca"
              },
              "author": {
                "@type": "Person",
                "name": "Benjamin Leblanc",
                "jobTitle": "Team Lead"
              },
              "about": ["Stochastic Optimization", "Deep Learning", "Machine Learning", "Scientific Research"],
              "keywords": ["SGD", "optimization", "deep learning", "research", "gradient descent"]
            }
          `}
        </script>
      </Helmet>

      <section className="relative overflow-hidden">
        <motion.div
          className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-red-500/20 rounded-full">
                <Award className="w-5 h-5 text-red-400" />
                <span className="text-red-300 font-medium">
                  Publication Scientifique
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                <span className="gradient-text gradient-text-red">
                  SGD, and Beyond!
                </span>
              </h1>

              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
                {t("sgdbeyond.hero.paragraph1")}
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                {t("sgdbeyond.hero.paragraph2")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              <motion.div
                className="lg:col-span-2 bg-gradient-to-br from-red-500/10 to-transparent p-8 rounded-3xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {t("sgdbeyond.mission.hypothesis.title")}
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                      {t("sgdbeyond.mission.hypothesis.description")}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {t("sgdbeyond.mission.understanding.title")}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {t("sgdbeyond.mission.understanding.description")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {t("sgdbeyond.mission.goal.title")}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {t("sgdbeyond.mission.goal.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-black to-red-950/20 p-8 rounded-3xl flex flex-col justify-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <GraduationCap className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Team Lead</h3>
                <p className="text-gray-300 mb-4">
                  {t("sgdbeyond.team.lead").split(": ")[1]}
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-red-400" />
                    {t("sgdbeyond.team.size")}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-red-500/5 via-red-500/10 to-red-500/5 rounded-3xl p-6 mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 justify-center">
                <Sparkles className="w-6 h-6 text-red-400" />
                <p className="text-lg text-gray-300 text-center">
                  {t("sgdbeyond.mission.status")}
                </p>
              </div>
            </motion.div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text gradient-text-red">
                {t("sgdbeyond.timeline.title")}
              </h2>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500/50 via-red-500/30 to-transparent hidden md:block" />

                <div className="space-y-6">
                  {timeline.map((week, index) => {
                    const icons = [
                      Sparkles,
                      TrendingDown,
                      FlaskConical,
                      FileText,
                      CheckCircle,
                    ];
                    const Icon = icons[index];
                    return (
                      <motion.div
                        key={index}
                        className="relative flex gap-6 items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-900/10 rounded-2xl flex items-center justify-center relative z-10 border !border-red-500/30">
                          <Icon className="w-7 h-7 text-red-400" />
                        </div>
                        <div className="flex-1 bg-gradient-to-br from-red-500/5 to-transparent rounded-2xl p-6 border !border-red-500/30">
                          <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                            {week.period}
                          </span>
                          <h3 className="text-xl font-bold text-white mt-1 mb-2">
                            {week.title}
                          </h3>
                          <p className="text-gray-400">{week.description}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text gradient-text-red">
                {t("sgdbeyond.objectives.deliverables.title")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deliverables.map((deliverable, index) => {
                  const icons = [Sparkles, FlaskConical, FileText];
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="group relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-900/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl p-6 h-full">
                        <div className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {deliverable.title}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {deliverable.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <motion.div
                className="bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Code className="w-8 h-8 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">
                    {t("sgdbeyond.profiles.programmer.title")}
                  </h2>
                </div>
                <p className="text-gray-400 mb-4">
                  {t("sgdbeyond.profiles.programmer.description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                    t("sgdbeyond.profiles.programmer.skills", {
                      returnObjects: true,
                    }) as string[]
                  ).map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-8 h-8 text-red-400" />
                  <h2 className="text-2xl font-bold text-white">
                    {t("sgdbeyond.profiles.theorist.title")}
                  </h2>
                </div>
                <p className="text-gray-400 mb-4">
                  {t("sgdbeyond.profiles.theorist.description")}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                    t("sgdbeyond.profiles.theorist.skills", {
                      returnObjects: true,
                    }) as string[]
                  ).map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-red-500/20 text-red-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="bg-gradient-to-br from-red-500/5 to-transparent rounded-3xl p-6 mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Lightbulb className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <p className="text-gray-300 text-lg">
                {t("sgdbeyond.profiles.note")}
              </p>
            </motion.div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 gradient-text gradient-text-red">
                {t("sgdbeyond.benefits.title")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => {
                  const icons = [BookOpen, FileText, FlaskConical, Target];
                  const Icon = icons[index];
                  return (
                    <motion.div
                      key={index}
                      className="text-center p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent hover:bg-red-500/15 transition-all border !border-red-500/30"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                    >
                      <Icon className="w-10 h-10 text-red-400 mx-auto mb-3" />
                      <h3 className="font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {benefit.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {t("sgdbeyond.cta.title")}
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                {t("sgdbeyond.cta.description")}
              </p>

              <motion.a
                href="https://discord.gg/ZPVwCjMpAq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-2xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                </svg>
                {t("sgdbeyond.cta.button")}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default SGDResearch;
