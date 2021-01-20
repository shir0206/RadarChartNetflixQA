import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import "./styles.css";

const chartConfig = {
  type: "radar",
  data: {
    labels: [
      "TV Action & Adventure",
      "TV Comedies",
      "TV Dramas",
      "CrimeTV Shows",
      "Kids'TV",
      "RomanticTV Shows"
    ],
    datasets: [
      {
        label: "# of TV-Shows in Israel",
        data: [3, 1, 5, 3, 0, 0],

        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)"
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(54, 162, 235,1)",
          "rgba(54, 162, 235, 1)"
        ],

        borderWidth: 1
      },
      {
        label: "# of TV-Shows in Japan",
        data: [3, 6, 19, 3, 13, 17],

        backgroundColor: [
          "rgba(255, 128, 0, 0.2)",
          "rgba(255, 128, 0, 0.2)",
          "rgba(255, 128, 0, 0.2)",
          "rgba(255, 128, 0, 0.2)",
          "rgba(255, 128, 0, 0.2)",
          "rgba(255, 128, 0, 0.2)"
        ],
        borderColor: [
          "rgba(255, 128, 0, 1)",
          "rgba(255, 128, 0, 1)",
          "rgba(255, 128, 0, 1)",
          "rgba(255, 128, 0, 1)",
          "rgba(255, 128, 0, 1)",
          "rgba(255, 128, 0, 1)"
        ],
        borderWidth: 1
      },
      {
        label: "# of TV-Shows in United Kingdom",
        data: [2, 35, 22, 42, 12, 9],

        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)"
        ],
        borderWidth: 1
      },
      {
        label: "# of TV-Shows in Spain",
        data: [2, 5, 7, 17, 3, 8],

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 99, 132, 0.2)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)"
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: "Radar Chart",
      fontSize: 25
    },
    scale: {
      angleLines: {
        display: false
      },
      ticks: {
        suggestedMin: -1,
        suggestedMax: 45
      }
    }
  }
};

const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [allAnswer, setAllAnswer] = useState([]);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  const questions = [
    "דוגמא: כמה סדרות ילדים יש באנגליה?",
    "כמה סדרות מסוג דרמה יש ביפן?",
    "כמה סדרות מסוג אקשיין, רומנטיקה וקומדיה יש בישראל?",
    "לאיזו מדינה יש הכי הרבה סדרות מסוג פשע?",
    "לאיזו 2 מדינות יש אותה כמות של סדרות באותה הקטגוריה?",
    "לאיזו מדינות אין סדרות מכל 4 הקטגוריות?",
    "לאיזו מדינה יש 5 סדרות מסוג קומדיה?",
    "לאיזו מדינה יש הכי הרבה סדרות?",
    "באיזו קטגוריה יש הכי הרבה סדרות ליפן?",
    "הסוף! תודה על ההשתתפות :)"
  ];

  const [started, setStarted] = useState(false);
  const [ms, setMs] = useState(0);
  const [report, setReport] = useState(false);

  const intervalRef = useRef();

  useEffect(() => {
    if (started) {
      const startTime = Date.now() - ms;
      const id = setInterval(() => {
        setMs(Date.now() - startTime);
      }, 16);
      intervalRef.current = id;
    }
    return () => clearInterval(intervalRef.current);
  });

  const listItems = allAnswer.map((item) => (
    <li key={index.toString()}>
      <b>Answer:</b> {item.answer} <b>| Time (ms):</b> {item.ms}
    </li>
  ));

  return (
    <div>
      <h1 className="x">Number of TV-Shows in Netflix</h1>
      <canvas ref={chartContainer} />

      <hr></hr>

      <button
        onClick={() => {
          setStarted(true);
        }}
      >
        Start
      </button>

      {started && (
        <div className="qstn">
          <h4>
            {index + 1}. {questions[index]}
          </h4>
          <input
            onChange={(e) => {
              setAnswer(e.target.value);
            }}
            value={answer}
          ></input>
          <br></br>
          <button
            onClick={() => {
              allAnswer[index] = { answer: answer, ms: ms };
              console.log("answer=", { answer, ms });

              setAllAnswer(allAnswer);
              console.log("allAnswer=", allAnswer);

              setIndex(index + 1);
              setMs(0);
              setAnswer("");
            }}
          >
            Submit
          </button>
        </div>
      )}

      <div>
        <hr></hr>
        <button
          onClick={() => {
            setReport(true);
            setMs(0);
            setStarted(false);
          }}
        >
          Report
        </button>
        <h4>{ms}</h4>

        {report && <ol>{listItems}</ol>}
      </div>
    </div>
  );
};

export default Chart;
