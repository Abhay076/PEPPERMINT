import Card from "./Card";

const Body = () => {
  return (
    <div>
      <div className="heading">
        <h1>Careers</h1>
      </div>
      <div className="about">
        <h2>About Peppermint</h2>
        <p>
          Peppermint is an award-winning robotics company, supported by SINE
          IIT-Bombay and Qualcomm. Peppermint develops and deploys Industrial
          and Enterprise robots and platforms for mobility-led services. The
          Engineering team has 50+ years of experience in building deep-tech and
          robotics products. Robots built on the Peppermint Platform are
          deployed across 13 cities in 4 countries!
        </p>
      </div>
      <div className="hr"></div>

      <div className="heading">
        <h3 style={{ color: "#50ebec" }}>We ar hiring</h3>
        <h1>Current Openings</h1>
      </div>
      <div className="body">
        <div className="restaurant-list">
          <Card
            role="SDE II"
            fullName="Software Development Engineer"
            tech1="Python, API, MongoDB."
            tech2="Dockers, Flutter."
            tech3="Mobile/Web App Development"
          />
          <Card
            role="RE - I (PERCEPTION)"
            fullName="Robotics Engineer I"
            tech1="C++, ROS1/ROS2,"
            tech2="SLAM, OpenCV"
            tech3="CUDA, Pytorch."
            tech4="TensorFlow, Navigation"
          />
          <Card
            role="SCE I"
            fullName="Supply Chain Engineer"
            tech1="Lean Six Sigma"
            tech2="Supply chain management"
            tech3="Inventory"
            tech4="JIT"
          />
        </div>
      </div>
      <div className="about">
        <p>
          “If you are excited about the prospect of building awesome tech and
          robots, we’d love to hear from you”. Please email us at &nbsp;
          <a href="hr@getpeppermint.co" style={{ color: "#50ebec" }}>
            hr@getpeppermint.co
          </a>
        </p>
      </div>
    </div>
  );
};

export default Body;
