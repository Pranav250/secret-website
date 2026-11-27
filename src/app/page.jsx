import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main className="home-page">

      <div className="invitation-container">

        {/* Anniversary Banner */}
        <div className="banner">
          <Image
            src="/banner.png"
            alt="राधा कृष्ण नृत्य पाठक ४० वा वर्धापन दिन"
            width={1600}
            height={900}
            priority
            className="banner-image"
          />
        </div>

        {/* Welcome Text */}
        <div className="welcome-section">

          <h1>
            🎉 चला, साजरा करूया ४० वर्षांचा उत्सव! 🎉
          </h1>

          <p>
            कार्यक्रमाची संपूर्ण माहिती पाहण्यासाठी खाली क्लिक करा.
          </p>

          {/* Clickable Button */}
          <a href="/program" className="program-button">
            🌺 कार्यक्रमाची माहिती पाहा 🌺
          </a>

          <div className="footer-text">
            <p>आपली उपस्थिती हीच आमच्यासाठी आनंदाची पर्वणी!</p>
            <span>श्री राधा-कृष्ण सेवा संस्था</span>
          </div>

        </div>
      </div>

    </main>
  );
}
