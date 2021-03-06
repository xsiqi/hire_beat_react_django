import React from "react";

const whoTitle = "Who we are?";
const whoContent =
  "Founded in New York City in 2020, our mission is to deliver the best possible interview experience to candidates and employers. HireBeat helps its customers to practice interviews online, which makes them more successful and competitive. Through the use of latest AI technologies, our service provides data-driven evaluations to give candidates most accurate and personalized feedback.";
const whatTitle = "What we do?";
const whatContent =
  "We are building an interview training platform with virtual practicing tools and AI-driven analysis to supercharge your interview performance. When preparing for upcoming interviews, it’s not enough to simply search questions online and read advice. You need to siulate the real process and receive practical feedbacks. HireBeat’s mission is to help job seakers gain a competitive advantage through learning, exercising, and growing from the implement of talent intelligent database.";
const contactTitle = "Contact us";
const contactContent =
  "We take our commitment to our users seriously.If you need help with your user account or have questions about how to use the platform, please do not hesitate to contact us through this email.";

const Intro = (props) => {
  return (
    <div
      className="d-flex flex-column align-items-start"
      style={{ marginBottom: 20 }}
    >
      <h1 style={{ color: "black" }}>{props.title}</h1>
      <p style={{ color: "black", fontSize: 15 }}>{props.content}</p>
    </div>
  );
};

export default function Pricing() {
  return (
    <div
      className="container-fluid"
      style={{
        padding: 0,
        //backgroundColor: "white",
      }}
    >
      <div className="company-bg">
        <div className="container" style={{ paddingTop: 70 }}>
          <Intro title={whoTitle} content={whoContent} />
          <Intro title={whatTitle} content={whatContent} />
          <div style={{ width: "50%" }}>
            <Intro title={contactTitle} content={contactContent} />
            <p
              style={{
                color: "#FF6B00",
                fontSize: 15,
                textDecoration: "underline",
              }}
            >
              support@hirebeat.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
