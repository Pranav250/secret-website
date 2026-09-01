"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };

  const restart = () => {
    setPage(1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <main className="site">

      {/* Floating Hearts */}
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
        <section className="section center">
          <div className="content">

            <div className="heart">❤️</div>

            <p className="small">
              THERE IS SOMETHING...
            </p>

            <h1>
              Hii 
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
        </section>
      )}

      {/* PAGE 2 */}
      {page === 2 && (
        <section className="section center">
          <div className="content">

            <div className="emoji">✨</div>

            <p className="small">
              JUST A LITTLE SOMETHING...
            </p>

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

            <p className="small">
              SOMEONE SPECIAL...
            </p>

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

            <p className="small">
              एक छोटीशी TRY...
            </p>

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

      {/* PAGE 5 - FULL POEM ON ONE PAGE */}
      {page === 5 && (
        <section className="section poem-section">

          <div className="poem-card">

            <div className="poem-decoration">🌹</div>

            <p className="small">
              तुझ्यासाठी...
            </p>

            <h2 className="poem-title">
              एक छोटीशी कविता
            </h2>

            <div className="line"></div>

            <div className="poem">

              <p>
                तुझ्या त्या इंस्टाग्राम च्या पोस्ट मधे ,
              </p>

              <p>
                काहीतरी खास जाणवलं,
              </p>

              <p>
                एक फोटो पाहिला तुझा,
              </p>

              <p>
                आणि नकळत मन फोटो मधे हरवलं… ❤️
              </p>

              <p>
                साडीमधे तुझ रूप काही वेगळंच दिसलं,
              </p>

              <p>
                नाकातली नथ आणि कपाळावरची चंद्रकोर
              </p>

              <p>
                पाहून मन तिथेच थांबलं… 🌙
              </p>

              <p>
                खरं तर,
              </p>

              <p>
                तुझ्या डोळ्यांत काहीतरी खास आहे,
              </p>

              <p>
                जे फोटोमधूनही जाणवल …
              </p>

              <p>
                म्हणूनच मनाला सारखं वाटतं,
              </p>

              <p className="last-line">
                तुझ्यासोबत बोलावं… ❤️
              </p>

            </div>

            <div className="line"></div>

            <button onClick={nextPage}>
              Next <span>→</span>
            </button>

          </div>

        </section>
      )}

      {/* PAGE 6 */}
      {page === 6 && (
        <section className="section center final-page">

          <div className="content">

            <div className="big-heart">
              ❤️
            </div>

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

            <button
              className="restart"
              onClick={restart}
            >
              पुन्हा सुरुवातीपासून ↗
            </button>

          </div>

        </section>
      )}

      {/* CSS */}
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
          background: #160F1B;
          color: #F8E7D8;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        .site {
          min-height: 100svh;

          overflow: hidden;

          position: relative;

          background:
            radial-gradient(
              circle at 15% 10%,
              rgba(143, 61, 97, 0.45),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 90%,
              rgba(184, 137, 98, 0.25),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #241523 0%,
              #160F1B 50%,
              #2A1727 100%
            );
        }

        .section {
          min-height: 100svh;

          width: 100%;

          padding: 50px 20px;

          display: flex;

          align-items: center;

          justify-content: center;

          text-align: center;
        }

        .center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content {
          width: min(1000px, 100%);

          padding: 35px;

          border-radius: 30px;

          background:
            rgba(36, 21, 35, 0.55);

          border:
            1px solid rgba(233, 167, 184, 0.16);

          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.35);

          backdrop-filter: blur(15px);

          animation: fadeIn 0.9s ease;
        }

        .small {
          color: #D8A8B8;

          font-size: 11px;

          letter-spacing: 0.25em;

          margin-bottom: 25px;
        }

        h1 {
          font-family: Georgia, serif;

          font-weight: 400;

          font-size:
            clamp(55px, 9vw, 120px);

          line-height: 0.95;

          color: #F8E7D8;
        }

        h1 i {
          color: #E9A7B8;

          font-style: normal;
        }

        h2 {
          font-family: Georgia, serif;

          font-weight: 400;

          font-size:
            clamp(38px, 6vw, 72px);

          line-height: 1.1;

          color: #F8E7D8;
        }

        .description {
          margin-top: 30px;

          color: #CBB8C4;

          font-size: 16px;

          line-height: 1.8;
        }

        .special {
          margin-top: 30px;

          font-family: Georgia, serif;

          font-size: 23px;

          line-height: 1.6;

          color: #D6BFCA;
        }

        .heart {
          font-size: 65px;

          margin-bottom: 20px;

          animation:
            heartbeat 1.7s ease infinite;

          filter:
            drop-shadow(
              0 0 25px
              rgba(233, 167, 184, 0.5)
            );
        }

        .emoji {
          font-size: 60px;

          margin-bottom: 25px;

          animation:
            floating 3s ease-in-out infinite;
        }

        button {
          margin-top: 40px;

          padding: 15px 30px;

          border: none;

          border-radius: 999px;

          background: #8F3D61;

          color: white;

          font-size: 14px;

          cursor: pointer;

          display: inline-flex;

          align-items: center;

          gap: 18px;

          transition: all 0.3s ease;

          box-shadow:
            0 15px 35px
            rgba(143, 61, 97, 0.35);
        }

        button:hover {
          transform:
            translateY(-4px);

          background: #B34E76;

          box-shadow:
            0 20px 45px
            rgba(179, 78, 118, 0.4);
        }

        button span {
          font-size: 18px;
        }

        /* POEM */

        .poem-section {
          padding-top: 55px;
          padding-bottom: 55px;
        }

        .poem-card {
          width: min(900px, 100%);

          padding:
            55px 60px;

          border-radius: 35px;

          background:
            linear-gradient(
              145deg,
              rgba(42, 23, 39, 0.92),
              rgba(22, 15, 27, 0.95)
            );

          border:
            1px solid
            rgba(233, 167, 184, 0.2);

          box-shadow:
            0 35px 100px
            rgba(0, 0, 0, 0.45);

          animation:
            poemAppear 1s ease;
        }

        .poem-decoration {
          font-size: 45px;

          margin-bottom: 15px;
        }

        .poem-title {
          margin-bottom: 10px;

          font-size:
            clamp(34px, 5vw, 55px);
        }

        .line {
          width: 100px;

          height: 1px;

          margin: 25px auto;

          background: #E9A7B8;
        }

        .poem {
          font-family:
            Georgia,
            "Noto Serif Devanagari",
            serif;

          font-size:
            clamp(19px, 2.1vw, 25px);

          line-height: 1.65;

          color: #F3DFD5;
        }

        .poem p {
          margin-bottom: 7px;

          animation:
            poemText 0.8s ease both;
        }

        .poem p:nth-child(1) {
          animation-delay: 0.1s;
        }

        .poem p:nth-child(2) {
          animation-delay: 0.2s;
        }

        .poem p:nth-child(3) {
          animation-delay: 0.3s;
        }

        .poem p:nth-child(4) {
          animation-delay: 0.4s;
        }

        .poem p:nth-child(5) {
          animation-delay: 0.5s;
        }

        .poem p:nth-child(6) {
          animation-delay: 0.6s;
        }

        .poem p:nth-child(7) {
          animation-delay: 0.7s;
        }

        .poem p:nth-child(8) {
          animation-delay: 0.8s;
        }

        .poem p:nth-child(9) {
          animation-delay: 0.9s;
        }

        .poem p:nth-child(10) {
          animation-delay: 1s;
        }

        .poem p:nth-child(11) {
          animation-delay: 1.1s;
        }

        .poem p:nth-child(12) {
          animation-delay: 1.2s;
        }

        .last-line {
          color: #E9A7B8;

          font-size:
            clamp(22px, 2.5vw, 29px);

          margin-top: 15px !important;
        }

        /* FINAL */

        .big-heart {
          font-size: 75px;

          margin-bottom: 20px;

          animation:
            heartbeat 2s ease infinite;

          filter:
            drop-shadow(
              0 0 30px
              rgba(233, 167, 184, 0.5)
            );
        }

        .divider {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 15px;

          margin: 35px auto;
        }

        .divider span {
          width: 60px;

          height: 1px;

          background: #70566A;
        }

        .signature {
          margin-top: 30px;

          font-family: Georgia, serif;

          font-size: 24px;

          color: #E9A7B8;
        }

        .restart {
          background: transparent;

          color: #D6BFCA;

          border:
            1px solid #70566A;

          box-shadow: none;
        }

        /* FLOATING HEARTS */

        .hearts span {
          position: fixed;

          bottom: -40px;

          font-size: 20px;

          opacity: 0.45;

          pointer-events: none;

          z-index: 10;

          animation:
            rise 8s linear infinite;
        }

        .hearts span:nth-child(1) {
          left: 8%;
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

        /* ANIMATIONS */

        @keyframes fadeIn {

          from {
            opacity: 0;
            transform:
              translateY(25px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
          }

        }

        @keyframes poemAppear {

          from {
            opacity: 0;
            transform:
              translateY(35px)
              scale(0.98);
          }

          to {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }

        }

        @keyframes poemText {

          from {
            opacity: 0;
            transform:
              translateY(12px);
          }

          to {
            opacity: 1;
            transform:
              translateY(0);
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
            transform:
              translateY(0);
          }

          50% {
            transform:
              translateY(-10px);
          }

          100% {
            transform:
              translateY(0);
          }

        }

        @keyframes rise {

          0% {
            transform:
              translateY(0)
              rotate(0deg);

            opacity: 0;
          }

          20% {
            opacity: 0.45;
          }

          100% {
            transform:
              translateY(-110vh)
              rotate(360deg);

            opacity: 0;
          }

        }

        /* MOBILE */

        @media (max-width: 700px) {

          .section {
            padding:
              30px 15px;
          }

          .content {
            padding:
              30px 18px;

            border-radius:
              24px;
          }

          h1 {
            font-size: 52px;
          }

          h2 {
            font-size: 35px;
          }

          .special {
            font-size: 19px;
          }

          .poem-card {
            padding:
              38px 20px;

            border-radius:
              25px;
          }

          .poem {
            font-size: 18px;

            line-height: 1.65;
          }

          .poem p {
            margin-bottom: 9px;
          }

          .poem-title {
            font-size: 34px;
          }

        }

      `}</style>

    </main>
  );
}
