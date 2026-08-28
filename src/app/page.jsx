"use client";

import { useEffect, useState } from "react";

const moments = [
  {
    number: "०१",
    text: "काही लोक भेटतात...",
    sub: "आणि काही लोक नकळत लक्षात राहतात.",
  },
  {
    number: "०२",
    text: "काही क्षण छोटे असतात...",
    sub: "पण त्यांची आठवण मोठी असते.",
  },
  {
    number: "०३",
    text: "काही व्यक्ती खास असतात...",
    sub: "कारण त्यांना खास होण्यासाठी काही करावंच लागत नाही.",
  },
];

const poem = [
  "काही सांगायचं होतं...",
  "पण शब्द सापडत नव्हते.",
  "म्हणून शब्द लिहिले नाहीत...",
  "तर एक छोटीशी गोष्ट बनवली.",
  "ही गोष्ट कुठून सुरू झाली,",
  "हे मलाही कधी कळलं नाही.",
  "कदाचित एका साध्या बोलण्यातून...",
  "कदाचित एका छोट्याशा हसण्यातून...",
  "किंवा कदाचित...",
  "तू 'तू' असल्यामुळे.",
];

export default function Home() {
  const [screen, setScreen] = useState("intro");
  const [moment, setMoment] = useState(0);
  const [poemIndex, setPoemIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [answer, setAnswer] = useState(null);

  const transition = (next) => {
    setIsChanging(true);

    setTimeout(() => {
      setScreen(next);
      setIsChanging(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 450);
  };

  const nextMoment = () => {
    if (moment < moments.length - 1) {
      setIsChanging(true);

      setTimeout(() => {
        setMoment((prev) => prev + 1);
        setIsChanging(false);
      }, 500);
    } else {
      transition("poem");
    }
  };

  const nextPoem = () => {
    if (poemIndex < poem.length - 1) {
      setIsChanging(true);

      setTimeout(() => {
        setPoemIndex((prev) => prev + 1);
        setIsChanging(false);
      }, 550);
    } else {
      transition("reveal");
    }
  };

  const chooseAnswer = (value) => {
    setAnswer(value);
    transition("ending");
  };

  const restart = () => {
    setScreen("intro");
    setMoment(0);
    setPoemIndex(0);
    setAnswer(null);
  };

  useEffect(() => {
    if (screen !== "poem") return;

    const timer = setTimeout(() => {
      if (poemIndex < poem.length - 1) {
        setPoemIndex((prev) => prev + 1);
      } else {
        transition("reveal");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [screen, poemIndex]);

  return (
    <main className="site">
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />
      <div className="ambient ambientThree" />

      <div className="noise" />

      <div className={`page ${isChanging ? "changing" : ""}`}>

        {/* ================= INTRO ================= */}

        {screen === "intro" && (
          <section className="section intro">
            <div className="tiny-top">
              <span>एक छोटीशी गोष्ट</span>
            </div>

            <div className="intro-content">
              <div className="symbol">
                <span />
                <span />
                <span />
              </div>

              <p className="overline">थांब जरा...</p>

              <h1>
                हे तुझ्यासाठी
                <br />
                <i>आहे.</i>
              </h1>

              <p className="intro-description">
                पण नक्की का आहे,
                <br />
                ते आत्ता सांगणार नाही.
              </p>

              <button
                className="main-button"
                onClick={() => transition("moments")}
              >
                <span>सुरू करूया</span>
                <b>→</b>
              </button>
            </div>

            <div className="bottom-note">
              <span>01</span>
              <div />
              <span>एक मिनिट दे.</span>
            </div>
          </section>
        )}

        {/* ================= MOMENTS ================= */}

        {screen === "moments" && (
          <section className="section moments">
            <div className="section-header">
              <span>एक विचार</span>
              <span>
                {String(moment + 1).padStart(2, "0")} / 03
              </span>
            </div>

            <div className="moment-content">
              <div className="moment-number">
                {moments[moment].number}
              </div>

              <div className="moment-line" />

              <div
                className="moment-text"
                key={moment}
              >
                <p>{moments[moment].text}</p>

                <h2>
                  {moments[moment].sub}
                </h2>
              </div>

              <button
                className="round-button"
                onClick={nextMoment}
                aria-label="पुढे"
              >
                →
              </button>
            </div>

            <div className="moment-footer">
              <div className="progress-dots">
                {moments.map((_, index) => (
                  <span
                    key={index}
                    className={index === moment ? "active" : ""}
                  />
                ))}
              </div>

              <p>
                पुढे काय आहे हे तुलाच शोधायचं आहे.
              </p>
            </div>
          </section>
        )}

        {/* ================= POEM ================= */}

        {screen === "poem" && (
          <section className="section poem-section">
            <div className="poem-top">
              <span>एक छोटीशी कविता</span>
              <span>०३</span>
            </div>

            <div className="poem-container">
              <div className="poem-counter">
                {String(poemIndex + 1).padStart(2, "0")}
              </div>

              <div
                className="poem-line"
                key={poemIndex}
              >
                {poem[poemIndex]}
              </div>

              <div className="poem-under">
                <div className="poem-progress">
                  <span
                    style={{
                      width: `${
                        ((poemIndex + 1) / poem.length) * 100
                      }%`,
                    }}
                  />
                </div>

                <p>
                  {poemIndex < poem.length - 1
                    ? "वाचत जा..."
                    : "आता शेवटचं."}
                </p>
              </div>

              <button
                className="poem-next"
                onClick={nextPoem}
              >
                <span>
                  {poemIndex < poem.length - 1
                    ? "पुढे"
                    : "शेवट पाहा"}
                </span>
                <b>→</b>
              </button>
            </div>
          </section>
        )}

        {/* ================= REVEAL ================= */}

        {screen === "reveal" && (
          <section className="section reveal-section">
            <div className="reveal-top">
              <span>आता खरं सांगतो</span>
            </div>

            <div className="reveal-content">
              <p className="reveal-small">
                इतकं सगळं वाचलंस...
              </p>

              <h1>
                आता एकच
                <br />
                <i>गोष्ट</i>
              </h1>

              <div className="reveal-divider">
                <span />
                <span>✦</span>
                <span />
              </div>

              <p className="reveal-main">
                या सगळ्या शब्दांमागची
                <br />
                व्यक्ती...
              </p>

              <div className="name-placeholder">
                <span>ती व्यक्ती</span>
                <strong>तू आहेस.</strong>
              </div>

              <p className="reveal-description">
                खरं सांगायचं तर,
                <br />
                हे इतकं साधं सांगता आलं असतं...
                <br />
                पण मला साधं सांगायचंच नव्हतं.
              </p>

              <button
                className="main-button"
                onClick={() => transition("letter")}
              >
                <span>आता शेवटचं वाच</span>
                <b>→</b>
              </button>
            </div>
          </section>
        )}

        {/* ================= LETTER ================= */}

        {screen === "letter" && (
          <section className="section letter-section">
            <div className="letter-card">
              <div className="letter-heading">
                <span>शेवटी काही शब्द...</span>

                <div className="mini-flower">
                  ✦
                </div>
              </div>

              <div className="letter-text">
                <p>
                  कधी कधी एखाद्या व्यक्तीला
                  <br />
                  आपल्या आयुष्यात किती महत्त्व आहे,
                  <br />
                  हे सांगण्यासाठी मोठमोठे शब्द
                  <br />
                  लागत नाहीत.
                </p>

                <p>
                  फक्त एवढंच पुरेसं असतं की,
                  <br />
                  त्या व्यक्तीचा विचार आला
                  <br />
                  की चेहऱ्यावर नकळत हसू येतं.
                </p>

                <p>
                  आणि हो...
                  <br />
                  तुझ्याबद्दल असंच काहीसं आहे.
                </p>

               

                <p>
                  कारण तू परफेक्ट आहेस म्हणून नाही,
                  <br />
                  तर तू जशी आहेस...
                  <br />
                  तशीच खूप खास आहेस.
                </p>

                <p>
                  पुढे काय होईल,
                  <br />
                  हे मला माहीत नाही.
                  <br />
                  पण एक गोष्ट नक्की —
                </p>

                <p className="last-line">
                  ही गोष्ट इथे संपवायची नाही.
                </p>
              </div>

              <div className="letter-sign">
                <span>— मनापासून</span>
              </div>

              <button
                className="main-button"
                onClick={() => transition("question")}
              >
                <span>एक प्रश्न आहे</span>
                <b>→</b>
              </button>
            </div>
          </section>
        )}

        {/* ================= QUESTION ================= */}

        {screen === "question" && (
          <section className="section question-section">
            <div className="question-content">
              <p className="question-small">
                इतकं सगळं सांगितलं...
              </p>

              <h1>
                आता तुझी
                <br />
                <i>पाळी.</i>
              </h1>

              <p className="question-text">
                माझ्यासोबत ही गोष्ट
                <br />
                पुढे लिहिशील?
              </p>

              <div className="answer-buttons">
                <button
                  className="yes-button"
                  onClick={() => chooseAnswer("yes")}
                >
                  <span>हो ❤️</span>
                </button>

                <button
                  className="maybe-button"
                  onClick={() => chooseAnswer("maybe")}
                >
                  <span>आधी थोडं बोलूया →</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* ================= ENDING ================= */}

        {screen === "ending" && (
          <section className="section ending-section">
            <div className="ending-content">
              <div className="ending-symbol">
                ♡
              </div>

              {answer === "yes" ? (
                <>
                  <p className="ending-small">
                    मग ठरलं...
                  </p>

                  <h1>
                    ही फक्त
                    <br />
                    <i>सुरुवात</i> आहे.
                  </h1>

                  <p className="ending-text">
                    पुढची पानं आपण दोघं मिळून लिहूया.
                  </p>
                </>
              ) : (
                <>
                  <p className="ending-small">
                    तेही चालेल...
                  </p>

                  <h1>
                    काही गोष्टींना
                    <br />
                    <i>वेळ</i> द्यावा लागतो.
                  </h1>

                  <p className="ending-text">
                    बाकीची गोष्ट आपण हळूहळू बोलून ठरवूया.
                  </p>
                </>
              )}

              <div className="ending-line" />

              <p className="ending-signature">
                ही वेबसाइट इथे संपते...
                <br />
                पण कदाचित गोष्ट नाही.
              </p>

              <button
                className="restart-button"
                onClick={restart}
              >
                पुन्हा सुरुवातीपासून ↗
              </button>
            </div>
          </section>
        )}
      </div>

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

        .noise {
          position: fixed;
          inset: 0;
          z-index: 20;
          pointer-events: none;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.7'/%3E%3C/svg%3E");
        }

        .page {
          position: relative;
          z-index: 2;
          transition:
            opacity 0.45s ease,
            transform 0.45s ease;
        }

        .page.changing {
          opacity: 0;
          transform: translateY(12px);
        }

        .section {
          min-height: 100svh;
          width: 100%;
          padding: 45px 7vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* INTRO */

        .intro {
          text-align: center;
        }

        .tiny-top {
          position: absolute;
          top: 38px;
          left: 7vw;
          right: 7vw;
          display: flex;
          justify-content: space-between;
          color: #a3767d;
          font-size: 10px;
          letter-spacing: 0.2em;
        }

        .intro-content {
          animation: enter 1.2s ease both;
        }

        .symbol {
          display: flex;
          justify-content: center;
          gap: 6px;
          margin-bottom: 28px;
        }

        .symbol span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #b56c79;
        }

        .symbol span:nth-child(2) {
          transform: translateY(-5px);
        }

        .overline {
          color: #a06f77;
          font-size: 11px;
          letter-spacing: 0.3em;
          margin-bottom: 25px;
        }

        .intro h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: clamp(60px, 10vw, 135px);
          line-height: 0.88;
          letter-spacing: -0.075em;
          color: #542f37;
        }

        .intro h1 i {
          color: #a85c6a;
        }

        .intro-description {
          margin-top: 35px;
          color: #89676d;
          font-size: 16px;
          line-height: 1.8;
        }

        .main-button {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          border: 1px solid #713f49;
          background: #713f49;
          color: #fff8f4;
          border-radius: 999px;
          padding: 15px 21px 15px 25px;
          margin-top: 42px;
          cursor: pointer;
          font-size: 13px;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .main-button b {
          font-size: 18px;
          font-weight: 300;
        }

        .main-button:hover {
          transform: translateY(-4px);
          background: #844d58;
          box-shadow: 0 15px 35px rgba(113, 63, 73, 0.2);
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

        /* MOMENTS */

        .moments {
          flex-direction: column;
          align-items: stretch;
        }

        .section-header {
          position: absolute;
          top: 38px;
          left: 7vw;
          right: 7vw;
          display: flex;
          justify-content: space-between;
          color: #9c737a;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .moment-content {
          width: min(1000px, 100%);
          display: grid;
          grid-template-columns: 80px 1px 1fr 70px;
          align-items: center;
          gap: 35px;
        }

        .moment-number {
          color: #b26d79;
          font-family: Georgia, serif;
          font-size: 24px;
        }

        .moment-line {
          width: 1px;
          height: 180px;
          background: rgba(132, 76, 87, 0.22);
        }

        .moment-text {
          animation: textIn 0.7s ease both;
        }

        .moment-text p {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(34px, 5vw, 70px);
          line-height: 1;
          letter-spacing: -0.055em;
          color: #542f37;
        }

        .moment-text h2 {
          max-width: 650px;
          margin-top: 28px;
          font-size: clamp(17px, 2vw, 23px);
          line-height: 1.6;
          font-weight: 400;
          color: #88676d;
        }

        .round-button {
          width: 62px;
          height: 62px;
          border-radius: 50%;
          border: 1px solid rgba(113, 63, 73, 0.3);
          background: rgba(255, 248, 244, 0.5);
          color: #713f49;
          font-size: 24px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .round-button:hover {
          background: #713f49;
          color: white;
          transform: translateX(4px);
        }

        .moment-footer {
          position: absolute;
          bottom: 38px;
          left: 7vw;
          right: 7vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #a27a80;
          font-size: 11px;
        }

        .progress-dots {
          display: flex;
          gap: 8px;
        }

        .progress-dots span {
          width: 28px;
          height: 2px;
          background: #dbc4c6;
          transition: all 0.5s ease;
        }

        .progress-dots span.active {
          width: 55px;
          background: #a85c6a;
        }

        /* POEM */

        .poem-section {
          flex-direction: column;
          background:
            radial-gradient(
              circle at center,
              rgba(255, 221, 224, 0.5),
              transparent 50%
            );
        }

        .poem-top {
          position: absolute;
          top: 38px;
          left: 7vw;
          right: 7vw;
          display: flex;
          justify-content: space-between;
          color: #9e737b;
          font-size: 10px;
          letter-spacing: 0.2em;
        }

        .poem-container {
          width: min(900px, 100%);
          text-align: center;
        }

        .poem-counter {
          font-size: 10px;
          color: #b07b83;
          letter-spacing: 0.25em;
          margin-bottom: 35px;
        }

        .poem-line {
          min-height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(31px, 5vw, 68px);
          line-height: 1.12;
          letter-spacing: -0.055em;
          color: #542f37;
          animation: poemIn 0.9s ease both;
        }

        .poem-under {
          margin: 35px auto 0;
          width: min(350px, 80%);
        }

        .poem-progress {
          height: 2px;
          width: 100%;
          background: rgba(132, 76, 87, 0.12);
        }

        .poem-progress span {
          display: block;
          height: 100%;
          background: #a85c6a;
          transition: width 0.5s ease;
        }

        .poem-under p {
          margin-top: 13px;
          color: #ad858b;
          font-size: 10px;
          letter-spacing: 0.1em;
        }

        .poem-next {
          margin-top: 35px;
          border: 0;
          background: transparent;
          color: #713f49;
          display: inline-flex;
          align-items: center;
          gap: 20px;
          cursor: pointer;
          font-size: 12px;
        }

        .poem-next b {
          font-size: 20px;
          font-weight: 300;
          transition: transform 0.3s ease;
        }

        .poem-next:hover b {
          transform: translateX(6px);
        }

        /* REVEAL */

        .reveal-section {
          text-align: center;
        }

        .reveal-top {
          position: absolute;
          top: 38px;
          left: 7vw;
          right: 7vw;
          color: #9c737a;
          font-size: 10px;
          letter-spacing: 0.2em;
        }

        .reveal-content {
          animation: enter 1s ease both;
        }

        .reveal-small {
          color: #9b6f77;
          font-size: 12px;
          margin-bottom: 25px;
        }

        .reveal-content h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 400;
          font-size: clamp(58px, 9vw, 120px);
          line-height: 0.9;
          letter-spacing: -0.07em;
        }

        .reveal-content h1 i {
          color: #a85c6a;
        }

        .reveal-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 35px auto;
        }

        .reveal-divider span:not(:nth-child(2)) {
          width: 50px;
          height: 1px;
          background: #c9a4a8;
        }

        .reveal-divider span:nth-child(2) {
          color: #b06b78;
          font-size: 12px;
        }

        .reveal-main {
          color: #89676d;
          line-height: 1.7;
          font-size: 15px;
        }

        .name-placeholder {
          margin: 25px 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .name-placeholder span {
          color: #a2777e;
          font-size: 12px;
        }

        .name-placeholder strong {
          font-family: Georgia, serif;
          font-size: clamp(38px, 6vw, 65px);
          font-weight: 400;
          color: #a85c6a;
          letter-spacing: -0.05em;
        }

        .reveal-description {
          color: #87676c;
          font-size: 14px;
          line-height: 1.8;
        }

        /* LETTER */

        .letter-section {
          padding: 80px 24px;
        }

        .letter-card {
          width: min(720px, 100%);
          padding: 60px clamp(25px, 6vw, 70px);
          background: rgba(255, 248, 244, 0.52);
          border: 1px solid rgba(125, 72, 82, 0.12);
          border-radius: 30px;
          box-shadow:
            0 30px 90px rgba(90, 46, 57, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(18px);
          animation: enter 1s ease both;
        }

        .letter-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #9d737b;
          font-size: 10px;
          letter-spacing: 0.2em;
          margin-bottom: 55px;
        }

        .mini-flower {
          color: #b16a77;
          font-size: 18px;
        }

        .letter-text {
          font-family: Georgia, "Times New Roman", serif;
          color: #604149;
          font-size: clamp(19px, 2.5vw, 25px);
          line-height: 1.65;
          letter-spacing: -0.015em;
        }

        .letter-text p {
          margin-bottom: 30px;
        }

        .letter-text .highlight {
          font-size: clamp(38px, 6vw, 62px);
          color: #a85c6a;
          line-height: 1;
          margin: 50px 0;
        }

        .last-line {
          color: #542f37;
          font-weight: 600;
        }

        .letter-sign {
          color: #a77b82;
          font-size: 11px;
          margin-top: 50px;
        }

        /* QUESTION */

        .question-section {
          text-align: center;
        }

        .question-content {
          animation: enter 1s ease both;
        }

        .question-small {
          color: #9c7078;
          font-size: 11px;
          letter-spacing: 0.1em;
          margin-bottom: 25px;
        }

        .question-content h1 {
          font-family: Georgia, serif;
          font-size: clamp(65px, 10vw, 125px);
          line-height: 0.85;
          font-weight: 400;
          letter-spacing: -0.08em;
        }

        .question-content h1 i {
          color: #a85c6a;
        }

        .question-text {
          margin-top: 35px;
          font-family: Georgia, serif;
          font-size: 23px;
          line-height: 1.5;
          color: #785960;
        }

        .answer-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .answer-buttons button {
          border-radius: 999px;
          padding: 16px 25px;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.3s ease;
        }

        .yes-button {
          border: 1px solid #713f49;
          background: #713f49;
          color: white;
        }

        .yes-button:hover {
          background: #a85c6a;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(113, 63, 73, 0.2);
        }

        .maybe-button {
          border: 1px solid rgba(113, 63, 73, 0.25);
          background: rgba(255, 255, 255, 0.25);
          color: #713f49;
        }

        .maybe-button:hover {
          background: rgba(255, 255, 255, 0.6);
          transform: translateY(-3px);
        }

        /* ENDING */

        .ending-section {
          text-align: center;
        }

        .ending-content {
          animation: enter 1.2s ease both;
        }

        .ending-symbol {
          font-family: Georgia, serif;
          font-size: 75px;
          line-height: 1;
          color: #b06371;
          animation: heartbeat 2s ease infinite;
        }

        .ending-small {
          color: #9e737a;
          font-size: 11px;
          letter-spacing: 0.15em;
          margin-top: 25px;
        }

        .ending-content h1 {
          margin-top: 25px;
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: clamp(55px, 9vw, 115px);
          line-height: 0.9;
          letter-spacing: -0.075em;
        }

        .ending-content h1 i {
          color: #a85c6a;
        }

        .ending-text {
          margin-top: 35px;
          color: #87666d;
          font-family: Georgia, serif;
          font-size: 20px;
        }

        .ending-line {
          width: 50px;
          height: 1px;
          background: #c7a0a6;
          margin: 35px auto;
        }

        .ending-signature {
          color: #a47b81;
          font-size: 12px;
          line-height: 1.8;
        }

        .restart-button {
          margin-top: 35px;
          border: 0;
          background: transparent;
          color: #713f49;
          font-size: 11px;
          cursor: pointer;
        }

        /* ANIMATIONS */

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

        @keyframes textIn {
          from {
            opacity: 0;
            transform: translateX(25px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
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
            transform: scale(1.1);
          }
        }

        /* MOBILE */

        @media (max-width: 700px) {
          .section {
            padding: 35px 22px;
          }

          .tiny-top,
          .section-header,
          .poem-top,
          .reveal-top {
            left: 22px;
            right: 22px;
            top: 25px;
          }

          .bottom-note {
            left: 22px;
            right: 22px;
            bottom: 25px;
          }

          .moment-content {
            grid-template-columns: 35px 1px 1fr;
            gap: 17px;
          }

          .moment-number {
            font-size: 17px;
          }

          .moment-line {
            height: 210px;
          }

          .moment-text p {
            font-size: 35px;
          }

          .moment-text h2 {
            font-size: 17px;
          }

          .round-button {
            grid-column: 3;
            width: 52px;
            height: 52px;
            margin-top: 25px;
          }

          .moment-footer {
            left: 22px;
            right: 22px;
            bottom: 25px;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .poem-line {
            min-height: 210px;
            font-size: 32px;
          }

          .letter-card {
            padding: 45px 25px;
            border-radius: 24px;
          }

          .letter-heading {
            margin-bottom: 40px;
          }

          .letter-text {
            font-size: 20px;
          }

          .letter-text .highlight {
            font-size: 46px;
          }

          .answer-buttons {
            flex-direction: column;
            align-items: stretch;
            padding: 0 15px;
          }

          .answer-buttons button {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}