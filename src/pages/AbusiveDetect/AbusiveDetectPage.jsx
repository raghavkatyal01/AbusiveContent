import React, { useState } from "react";
import "./Abusive.css";
import profile from "../../assets/profile.webp";
import Highlighter from "react-highlight-words";

function AbusiveDetectPage() {
  const [score, setScore] = useState("");
  const [textArea, setTextArea] = useState("");
  const [color, setColor] = useState("");
  const [result, setResult] = useState("none")
  const searchWords = [
    "bakland",
    "bhadva",
    "bhootnika",
    "chinaal",
    "chup",
    "chutia",
    "ghasti",
    "chutiya",
    "haraami",
    "haraam",
    "hijra",
    "hinjda",
    "jaanvar",
    "kutta",
    "kutiya",
    "khota",
    "auladheen",
    "jaat",
    "najayaz",
    "gandpaidaish",
    "saala",
    "kutti",
    "soover",
    "tatti",
    "potty",
    "bahenchod",
    "bahanchod",
    "bahencho",
    "bancho",
    "bahenke",
    "laude",
    "takke",
    "betichod",
    "bhaichod",
    "bhains",
    "jhalla",
    "jhant",
    "nabaal",
    "pissu",
    "kutte",
    "maadherchod",
    "madarchod",
    "padma",
    "raand",
    "jamai",
    "randwa",
    "randi",
    "bachachod",
    "bachichod",
    "soower",
    "bachchechod",
    "ullu",
    "pathe",
    "banda",
    "booblay",
    "booby",
    "buble",
    "babla",
    "bhonsriwala",
    "bhonsdiwala",
    "ched",
    "chut",
    "chod",
    "chodu",
    "chodra",
    "choochi",
    "chuchi",
    "gaandu",
    "gandu",
    "gaand",
    "lavda",
    "lawda",
    "lauda",
    "lund",
    "balchod",
    "lavander",
    "muth",
    "maacho",
    "mammey",
    "tatte",
    "toto",
    "toota",
    "backar",
    "bhandwe",
    "bhosadchod",
    "bhosad",
    "bumchod",
    "bum",
    "bur",
    "chatani",
    "cunt",
    "cuntmama",
    "chipkali",
    "pasine",
    "jhaat",
    "chodela",
    "bhagatchod",
    "chhola",
    "chudai",
    "chudaikhana",
    "chunni",
    "choot",
    "bhoot",
    "dhakkan",
    "bhajiye",
    "fateychu",
    "gandnatije",
    "lundtopi",
    "gaandu",
    "gaandfat",
    "gaandmasti",
    "makhanchudai",
    "gaandmarau",
    "gandu",
    "chaatu",
    "beej",
    "choosu",
    "fakeerchod",
    "lundoos",
    "shorba",
    "binbheja",
    "bhadwe",
    "parichod",
    "nirodh",
    "pucchi",
    "baajer",
    "choud",
    "bhosda",
    "sadi",
    "choos",
    "maka",
    "chinaal",
    "gadde",
    "joon",
    "chullugand",
    "doob",
    "khatmal",
    "gandkate",
    "bambu",
    "lassan",
    "danda",
    "keera",
    "keeda",
    "hazaarchu",
    "paidaishikeeda",
    "kali",
    "safaid",
    "poot",
    "behendi",
    "chus",
    "machudi",
    "chodoonga",
    "baapchu",
    "laltern",
    "suhaagchudai",
    "raatchuda",
    "kaalu",
    "neech",
    "chikna",
    "meetha",
    "beechka",
    "chooche",
    "patichod",
    "rundi",
    "makkhi",
    "biwichod",
    "chodhunga",
    "haathi",
    "kute",
    "jhanten",
    "kaat",
    "gandi",
    "gadha",
    "bimaar",
    "badboodar",
    "dum",
    "raandsaala",
    "phudi",
    "chute",
    "kussi",
    "khandanchod",
    "ghussa",
    "maarey",
    "chipkili",
    "unday",
    "budh",
    "chaarpai",
    "chodun",
    "chatri",
    "chode",
    "chodho",
    "mullekatue",
    "mullikatui",
    "mullekebaal",
    "momedankatue",
    "katua",
    "chutiyapa",
    "bc",
    "mc",
    "chudwaya",
    "kutton",
    "jungli",
    "vahiyaat",
    "jihadi",
    "atankvadi",
    "atankwadi",
  ]

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://api-inference.huggingface.co/models/ganeshkharad/gk-hinglish-sentiment",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify({ inputs: textArea }),
      }
    );
    const result = await response.json();
    console.log(result);
    if (result && result[0][0].score) {
      // setScore(result.score);
      if (result[0][0].label === "LABEL_0") {
        // result[0][0].label="Not Hate"
        setScore("ABUSIVE");
        setColor("red");
      } else if (result[0][0].label === "LABEL_2") {
        // result[0][2].label="Hate"
        setScore("NOT ABUSIVE");
        setColor("green");
      } else {
        // result[0][1].label="Neutral"
        setColor("blue");
        setScore("NEUTRAL");
      }
    } else {
      alert("Error: Failed to get score from the API");
    }
    // setHighlightedText(textArea);
    setResult("block");
  };

  return (
    <>
      <div className="cont">
        <div className="nav">
          <ul className="content">
            <div className="left">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <div className="dropdown">
                <li>Resources</li>
                <div className="dropdown-options">
                  <a href="#">GetText</a>
                  <a href="#">Blog</a>
                  <a href="#">About Us</a>
                </div>
              </div>
            </div>
            <div className="right">
              <a href="/">Login</a>
              <img src={profile} alt="profile icon" />
            </div>
          </ul>
        </div>
        <div className="main">
          <b>
            <h1 className="h">Abusive Content detection</h1>
          </b>
          <div className="main-out">


          <textarea
            className="text"
            placeholder="Enter the text"
            onChange={(e) => setTextArea(e.target.value)}
            value={textArea}
          ></textarea>
          <div className="text" style={{display:result}}>
            <Highlighter
              highlightClassName="YourHighlightClass"
              searchWords={searchWords}
              autoEscape={true}
              textToHighlight={textArea}
            />
          </div>
          </div>
        </div>
        <button className="btn" type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <div className="circle" style={{ backgroundColor: `${color}` }}>
          <span>{score}</span>
        </div>
        <h3 className="footer">score</h3>
      </div>
    </>
  );
}

export default AbusiveDetectPage;
