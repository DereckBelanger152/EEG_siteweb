import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Nathaniel D'Amours",
    text: "President",
    imgSrc: "/portrait/Nathaniel.jpg",
    linkedIn: "https://www.linkedin.com/in/nathaniel-damours",
  },
  {
    title: "Mathieu Bazinet",
    text: "Formation VP",
    imgSrc: "/portrait/Mathieu.jpg",
    linkedIn: "https://www.linkedin.com/in/mathieu-bazinet-196523a6",
  },
  {
    title: "Jordan Mathieu",
    text: "Partnership VP",
    imgSrc: "/portrait/Jordan.jpg",
    linkedIn: "https://www.linkedin.com/in/jordan-math/",
  },
  {
    title: "Louis-Étienne Messier",
    text: "Recruiting VP",
    imgSrc: "/portrait/Louis.jpg",
    linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
  },
  {
    title: "Anthony Lavertu",
    text: "External Affairs VP",
    imgSrc: "/portrait/Anthony.jpg",
    linkedIn: "https://www.linkedin.com/in/anthony-lavertu-2a29a7179/",
  },
  {
    title: "Alexandrine Lehoux",
    text: "Partnership VP",
    imgSrc: "/portrait/Alexandrine.jpg",
    linkedIn: "https://www.linkedin.com/in/alexandrine-lehoux-b511771b7/",
  },
  {
    title: "Almaoudata Walet Babahmed",
    text: "Competition VP",
    imgSrc: "/portrait/almaoudata.jpeg",
    linkedIn: "https://www.linkedin.com/in/alma-walet-93418b325/",
  },
  {
    title: "Yves Mamadou Faye",
    text: "Communication VP",
    imgSrc: "/portrait/Yves.png",
    linkedIn: "https://www.linkedin.com/in/yves-faye-3b45062a5/",
  },
  {
    title: "Deoth Guei",
    text: "Team Lead (F1 Tenth Team 1)",
    imgSrc: "/portrait/deoth.jpeg",
    linkedIn: "https://www.linkedin.com/in/deoth-guei-382269191/",
  },
  {
    title: "Alban Sarrazin",
    text: "Team Lead (F1 Tenth Team 2)",
    imgSrc: "/portrait/alban.jpeg",
    linkedIn: "https://www.linkedin.com/in/alban-sarrazin-561803252/",
  },
  {
    title: "Benjamin Leblanc",
    text: "Team Lead (TreeCore)",
    imgSrc: "/portrait/benjamin.jpeg",
    linkedIn: "https://www.linkedin.com/in/benjamin-leblanc-a9217128b/",
  },
  {
    title: "Louis-Étienne Messier",
    text: "Team Lead (FlappyEEG)",
    imgSrc: "/portrait/Louis.jpg",
    linkedIn: "https://www.linkedin.com/in/louis-etienne-messier-2361311ba/",
  },
  {
    title: "Dereck Bélanger",
    text: "CIA Website Manager",
    imgSrc: "/portrait/Dereck.HEIC",
    linkedIn: "https://www.linkedin.com/in/dereck-bélanger-437259338/",
  },
];

const Management = () => {
  const renderCards = (
    cards: { title: string; text: string; imgSrc: string; linkedIn: string }[],
    title: string
  ) => (
    <motion.section
      className="max-w-7xl mx-auto px-4 pb-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-6xl font-bold mb-4 text-center mt-20 pb-16">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
          {title}
        </span>
      </h1>
      <Row xs={1} sm={2} md={3} className="g-3 justify-content-center">
        {cards.map((card, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <motion.a
              href={card.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card
                className="bg-red-900/80 border custom-border-red custom-hover-border-red text-white mb-24"
                style={{ width: "14rem" }}
              >
                <Card.Img
                  variant="top"
                  src={card.imgSrc}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-gray-200">
                    {card.title}
                  </Card.Title>
                  <Card.Text className="text-gray-400">{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </motion.a>
          </Col>
        ))}
      </Row>
    </motion.section>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {renderCards(cardData.slice(0, 8), "Executive Team")}
      {renderCards(cardData.slice(8, 12), "Leadership Team")}
      {renderCards(cardData.slice(12), "Associates")}
    </motion.div>
  );
};

export default Management;
