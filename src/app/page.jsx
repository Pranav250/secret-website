"use client";

import { useEffect, useState } from "react";

const poem = [
  "तुझ्या त्या इंस्टाग्राम च्या पोस्ट मधे ,",
  "काहीतरी खास जाणवलं,",
  "एक फोटो पाहिला तुझा,",
  "आणि नकळत मन फोटो मधे हरवलं… ❤️",
  "साडीमधे तुझ रूप काही वेगळंच दिसलं,",
  "नाकातली नथ आणि कपाळावरची चंद्रकोर",
  "पाहून मन तिथेच थांबलं… 🌙",
  "खरं तर,",
  "तुझ्या डोळ्यांत काहीतरी खास आहे,",
  "जे फोटोमधूनही जाणवल …",
  "म्हणूनच मनाला सारखं वाटतं,",
  "तुझ्यासोबत बोलावं… ❤️",
];

export default function Home() {
  const [page, setPage] = useState(1);
  const [poemIndex, setPoemIndex] = useState(0);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const nextPoem = () => {
    if (poemIndex < poem.length - 1) {
      setPoemIndex((prev) => prev + 1);
    } else {
      setPage(6);
    }
  };

  const restart = () => {
    setPage(1);
    setPoemIndex(0);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <main className="site">

      <div className="ambient ambientOne"></div>
      <div className="ambient ambientTwo"></div>
      <div className="ambient ambientThree"></div>

      <div className="hearts">
        <span>❤️</span>
        <span>💕</span>
        <span>💗</span>
        <span>❤️</span>
        <span>💖</span>
        <span>💕</span>
        <span>❤️</span>
      </div>

      {/* PAGE 1 */}
      {page === 1 && (
        <section className="section intro">
          <div className="tiny-top">
            <span>एक छोटीशी गोष्ट</span>
            <span>FOR VIDHI ❤️</span>
          </div>

          <div className="content">
            <div className="heart">❤️</div>

            <p className="overline">THERE IS SOMETHING...</p>

            <h1>
              Hii Vidhi
              <br />
              <i>This is for You !!!</i>
            </h1>

            <p className="description">
              काहीतरी छोटंसं...
              <br />
              पण मनापासून केलंय. ❤️
            </p>

            <button onClick={nextPage}>
              Next <span>→</span>
            </button>
          </div>

          <div className="bottom-note">
            <span>01</span>
            <div></div>
            <span>एक मिनिट दे.</span>
          </div>
        </section>
      )}

      {/* PAGE 2 */}
      {page === 2 && (
        <section className="section center">
          <div className="content">
            <div className="emoji">✨</div>

            <p className="small">JUST A LITTLE SOMETHING...</p>

            <h2>
              There’s a reason I made
              <br />
              this little website…
            </h2>

            <p className="description">
              कदाचित तुला पुढे गेल्यावर समजेल. ❤️
            </p>

            <button onClick={nextPage}>
              Next <span>→</span>
            </button>
          </div>
        </section>
      )}

      {/* PAGE 3 */}
      {page === 3 && (
        <section className="section center">
          <div className="content">
            <div className="emoji">🌸</div>

            <p className="small">SOMEONE SPECIAL...</p>

            <h2>
              About someone who caught
              <br />
              my attention.
            </h2>

            <p className="special">
              And somehow… that someone is you. ❤️
            </p>

            <button onClick={nextPage}>
              Next <span>→</span>
            </button>
          </div>
        </section>
      )}

      {/* PAGE 4 */}
      {page === 4 && (
        <section className="section center">
          <div className="content">
            <div className="emoji">🌙</div>

            <p className="small">एक छोटीशी TRY...</p>

            <h2 className="marathi-heading">
              तुझ्यासाठी मी एक कविता
              <br />
              लिहायचा TRY केलाय
            </h2>

            <p className="special marathi">
              PLZ राग नको मानू ❤️
            </p>

            <button onClick={nextPage}>
              कविता <span>❤️</span>
            </button>
          </div>
        </section>
      )}

      {/* PAGE 5 - POEM */}
      {page === 5 && (
        <section className="section poem-section">

          <div className="poem-top">
            <span>तुझ्यासाठी एक कविता</span>
            <span>
              {String(poemIndex + 1).padStart(2, "0")} /{" "}
              {String(poem.length).padStart(2, "0")}
            </span>
          </div>

          <div className="poem-container">

            <div className="poem-counter">
              {String(poemIndex + 1).padStart(2, "0")}
            </div>

            <div className="poem-line" key={poemIndex}>
              {poem[poemIndex]}
            </div>

            <div className="poem-progress">
              <span
                style={{
                  width: `${((poemIndex + 1) / poem.length) * 100}%`,
                }}
              ></span>
            </div>

            <p className="reading">
              {poemIndex < poem.length - 1
                ? "वाचत जा..."
                : "शेवटची ओळ... ❤️"}
            </p>

            <button className="poem-button" onClick={nextPoem}>
              {poemIndex < poem.length - 1 ? "पुढे →" : "शेवट पाहा →"}
            </button>

          </div>
        </section>
      )}

      {/* PAGE 6 */}
      {page === 6 && (
        <section className="section center final-page">
          <div className="content">

            <div className="big-heart">❤️</div>

            <p className="small">
              AND THAT'S ALL I WANTED TO SAY...
            </p>

            <h1>
              And somehow…
              <br />
              <i>that someone is you.</i>
            </h1>

            <div className="divider">
              <span></span>
              ✦
              <span></span>
            </div>

            <p className="description">
              ही छोटीशी website इथे संपते...
              <br />
              पण कदाचित गोष्ट नाही. ❤️
            </p>

            <p className="signature">
              — फक्त तुझ्यासाठी
            </p>

            <button className="restart" onClick={restart}>
              पुन्हा सुरुवातीपासून ↗
            </button>

          </div>
        </section>
      )}

      <style jsx global>{`

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          min-height: 100%;
        }

        body {
          background: #f8eee9;
          color: #542f37;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        button {
          font-family: inherit;
        }

        .site {
          min-height: 100svh;
          position: relative;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(255, 210, 218, 0.75),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 90%,
              rgba(220, 188, 150, 0.35),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #fff8f4 0%,
              #f8eee9 48%,
              #f0dfe0 100%
            );
        }

        .ambient {
          position: absolute;
          width: 430px;
          height: 430px;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          opacity: 0.28;
        }

        .ambientOne {
          background: #e6a6b1;
          top: -250px;
          left: -160px;
        }

        .ambientTwo {
          background: #d9b38a;
          right: -220px;
          bottom: -230px;
        }

        .ambientThree {
          background: #efc4c9;
          top: 40%;
          right: 15%;
          opacity: 0.13;
        }

        .section {
          min-height: 100svh;
          width: 100%;
          padding: 45px 7vw;

          display: flex;
          align-items: center;
          justify-content: center;

          position: relative;
          text-align: center;
        }

        .content {
          animation: enter 1s ease both;
          max-width: 1000px;
        }

        .tiny-top,
        .poem-top {
          position: absolute;
          top: 38px;
          left: 7vw;
          right: 7vw;

          display: flex;
          justify-content: space-between;

          color: #9c737a;
          font-size: 10px;
          letter-spacing: 0.2em;
        }

        .overline,
        .small {
          color: #a06f77;
          font-size: 11px;
          letter-spacing: 0.25em;
          margin-bottom: 25px;
        }

        h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;

          font-size: clamp(60px, 10vw, 130px);
          line-height: 0.9;

          letter-spacing: -0.07em;

          color: #542f37;
        }

        h1 i {
          color: #a85c6a;
          font-style: normal;
        }

        h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;

          font-size: clamp(40px, 6vw, 75px);
          line-height: 1.05;

          color: #542f37;
        }

        .description {
          margin-top: 30px;

          color: #89676d;
          font-size: 16px;
          line-height: 1.8;
        }

        .special {
          margin-top: 30px;

          font-family: Georgia, serif;
          font-size: 22px;
          line-height: 1.6;

          color: #785960;
        }

        .heart {
          font-size: 60px;
          margin-bottom: 20px;

          animation: heartbeat 1.7s ease infinite;
        }

        .emoji {
          font-size: 60px;
          margin-bottom: 25px;

          animation: floating 3s ease-in-out infinite;
        }

        button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 20px;

          margin-top: 40px;

          border: 1px solid #713f49;
          border-radius: 999px;

          padding: 15px 28px;

          background: #713f49;
          color: white;

          font-size: 14px;

          cursor: pointer;

          transition: all 0.3s ease;
        }

        button:hover {
          transform: translateY(-4px);

          box-shadow:
            0 15px 35px rgba(113, 63, 73, 0.25);

          background: #8b5360;
        }

        button span {
          font-size: 18px;
        }

        .bottom-note {
          position: absolute;

          bottom: 35px;
          left: 7vw;
          right: 7vw;

          display: flex;
          align-items: center;

          gap: 15px;

          color: #a1787e;
          font-size: 10px;
        }

        .bottom-note div {
          width: 50px;
          height: 1px;
          background: #c9a4a8;
        }

        /* POEM */

        .poem-section {
          flex-direction: column;
        }

        .poem-container {
          width: min(900px, 100%);
        }

        .poem-counter {
          color: #b07b83;
          font-size: 11px;
          letter-spacing: 0.2em;
          margin-bottom: 30px;
        }

        .poem-line {
          min-height: 180px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;

          font-family: Georgia, "Times New Roman", serif;

          font-size: clamp(32px, 5vw, 65px);

          line-height: 1.25;

          color: #542f37;

          animation: poemIn 0.8s ease both;
        }

        .poem-progress {
          width: min(350px, 80%);
          height: 2px;

          margin: 30px auto 0;

          background: rgba(132, 76, 87, 0.15);
        }

        .poem-progress span {
          display: block;

          height: 100%;

          background: #a85c6a;

          transition: width 0.5s ease;
        }

        .reading {
          margin-top: 15px;

          color: #ad858b;

          font-size: 11px;
          letter-spacing: 0.15em;
        }

        .poem-button {
          margin-top: 30px;

          background: transparent;
          border: 0;

          color: #713f49;
        }

        /* FINAL */

        .big-heart {
          font-size: 75px;

          animation: heartbeat 2s ease infinite;

          margin-bottom: 20px;
        }

        .divider {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 12px;

          margin: 35px auto;
        }

        .divider span {
          width: 55px;
          height: 1px;
          background: #c9a4a8;
        }

        .signature {
          margin-top: 30px;

          font-family: Georgia, serif;

          font-size: 24px;

          color: #a85c6a;
        }

        .restart {
          background: transparent;

          color: #713f49;

          border: 0;

          font-size: 12px;
        }

        /* FLOATING HEARTS */

        .hearts span {
          position: fixed;

          bottom: -40px;

          font-size: 20px;

          opacity: 0.5;

          pointer-events: none;

          z-index: 5;

          animation: rise 8s linear infinite;
        }

        .hearts span:nth-child(1) {
          left: 8%;
          animation-delay: 0s;
        }

        .hearts span:nth-child(2) {
          left: 22%;
          animation-delay: 2s;
        }

        .hearts span:nth-child(3) {
          left: 38%;
          animation-delay: 4s;
        }

        .hearts span:nth-child(4) {
          left: 55%;
          animation-delay: 1s;
        }

        .hearts span:nth-child(5) {
          left: 70%;
          animation-delay: 3s;
        }

        .hearts span:nth-child(6) {
          left: 83%;
          animation-delay: 5s;
        }

        .hearts span:nth-child(7) {
          left: 94%;
          animation-delay: 6s;
        }

        @keyframes enter {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes poemIn {
          from {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.12);
          }
        }

        @keyframes floating {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

          100% {
            transform: translateY(0);
          }
        }

        @keyframes rise {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }

          20% {
            opacity: 0.5;
          }

          100% {
            transform: translateY(-110vh) rotate(360deg);
            opacity: 0;
          }
        }

        @media (max-width: 700px) {

          .section {
            padding: 35px 22px;
          }

          .tiny-top,
          .poem-top {
            left: 22px;
            right: 22px;
            top: 25px;
          }

          .bottom-note {
            left: 22px;
            right: 22px;
            bottom: 25px;
          }

          h1 {
            font-size: 55px;
          }

          h2 {
            font-size: 36px;
          }

          .special {
            font-size: 19px;
          }

          .poem-line {
            min-height: 230px;
            font-size: 30px;
          }

          .poem-container {
            padding-top: 30px;
          }

          .poem-top {
            font-size: 8px;
          }
        }

      `}</style>

    </main>
  );
}
