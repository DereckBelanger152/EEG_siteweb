import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Hand, Camera, Cpu, CheckCircle, Users, Brain } from "lucide-react";
import TeamMemberCard from "../components/TeamMemberCard";

function ASLDecoder() {
  const { t } = useTranslation();

  const teamMembers = [
    { name: "Amen Ouannes", role: "Team Lead" },
    { name: "Vincent Bellemare" },
    { name: "Hiba Arfaoui" },
    { name: "Guillhem Ané" },
    { name: "Nidel Kouicem" },
  ];

  const features = [
    {
      icon: <Camera className="w-8 h-8 text-red-400" />,
      title: t("asldecoder.features.camera.title"),
      description: t("asldecoder.features.camera.description"),
    },
    {
      icon: <Brain className="w-8 h-8 text-red-400" />,
      title: t("asldecoder.features.ai.title"),
      description: t("asldecoder.features.ai.description"),
    },
    {
      icon: <Hand className="w-8 h-8 text-red-400" />,
      title: t("asldecoder.features.gestures.title"),
      description: t("asldecoder.features.gestures.description"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>ASL Decoder - {t("asldecoder.meta.title")}</title>
        <meta name="description" content={t("asldecoder.meta.description")} />
        <meta name="keywords" content={t("asldecoder.meta.keywords")} />
        <meta
          name="author"
          content="Club Intelligence Artificielle - Université Laval"
        />
        <meta
          property="og:title"
          content={`ASL Decoder - ${t("asldecoder.meta.title")}`}
        />
        <meta
          property="og:description"
          content={t("asldecoder.meta.description")}
        />
        <meta
          property="og:image"
          content="https://cia.ift.ulaval.ca/project/asl.png"
        />
        <meta
          property="og:url"
          content="https://cia.ift.ulaval.ca/asl-decoder"
        />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://cia.ift.ulaval.ca/asl-decoder" />
      </Helmet>

      <section className="relative overflow-hidden">
        <motion.div
          className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Completed Badge */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">
                {t("asldecoder.status.completed")}
              </span>
            </div>
          </motion.div>

          {/* Hero Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                      ASL Decoder
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                    {t("asldecoder.hero.subtitle")}
                  </h2>
                </div>

                <motion.p
                  className="text-lg text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {t("asldecoder.hero.description")}
                </motion.p>

                {/* Team Lead */}
                <motion.div
                  className="flex items-center gap-3 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Users className="w-5 h-5 text-red-400" />
                  <span>
                    <strong>Team Lead:</strong> Amen Ouannes
                  </span>
                </motion.div>
              </div>

              {/* Right Side - Hero Image */}
              <motion.div
                className="flex justify-center lg:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="relative">
                  <img
                    src="/project/asl.png"
                    alt="ASL Decoder"
                    className="w-full max-w-md rounded-2xl shadow-xl border border-red-600/30"
                  />
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/20 to-red-900/20 rounded-2xl blur opacity-50 -z-10" />
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text gradient-text-red">
              {t("asldecoder.features.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl p-6 !border !border-red-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technology Stack */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-red-500/10 to-transparent rounded-3xl p-8 !border !border-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-8 h-8 text-red-400" />
                <h2 className="text-2xl font-bold text-white">
                  {t("asldecoder.tech.title")}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {(
                  t("asldecoder.tech.items", {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-red-500/10 text-red-300 rounded-lg !border !border-red-500/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold gradient-text gradient-text-red mb-4">
                {t("asldecoder.team.title")}
              </h2>
              <p className="text-gray-400 text-lg">
                {t("asldecoder.team.subtitle")}
              </p>
            </div>

            <div className="flex flex-wrap justify-center max-w-full gap-4">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard
                    icon={<Hand className="w-8 h-8" />}
                    title={member.name}
                    description={member.role || ""}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </section>
    </>
  );
}

export default ASLDecoder;
