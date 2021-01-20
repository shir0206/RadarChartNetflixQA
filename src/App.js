import React, { useEffect, useRef, useState } from "react";
import Chartjs from "chart.js";
import "./styles.css";
import { Bar, Radar } from "react-chartjs-2";

const chartDataBar = {
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
      label: "# of TV-Shows in Brazil",
      data: [0, 5, 8, 4, 1, 1],

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
      label: "# of TV-Shows in China",
      data: [6, 8, 17, 4, 2, 17],

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
      label: "# of TV-Shows in Russia",
      data: [1, 2, 6, 6, 4, 1],

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
      label: "# of TV-Shows in Turkey",
      data: [5, 2, 21, 10, 0, 5],

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
};

const chartDataRadar = {
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
};

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

  // const updateDataset = (datasetIndex, newData) => {
  //   chartInstance.data.datasets[datasetIndex].data = newData;
  //   chartInstance.update();
  // };

  const [started, setStarted] = useState(false);
  const [ms, setMs] = useState(0);
  const [report, setReport] = useState(false);
  const [radar, setRadar] = useState(false);
  const [bar, setBar] = useState(false);

  const questionsRadar = [
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

  const questionsBar = [
    "דוגמא: כמה סדרות ילדים יש ברוסיה?",
    "כמה סדרות מסוג דרמה יש בסין?",
    "כמה סדרות מסוג אקשיין, רומנטיקה וקומדיה יש ברוסיה?",
    "לאיזו מדינה יש הכי הרבה סדרות מסוג פשע?",
    "לאיזו 2 מדינות יש אותה כמות של סדרות באותה הקטגוריה?",
    "לאיזו מדינות אין סדרות מכל 4 הקטגוריות?",
    "לאיזו מדינה יש 5 סדרות מסוג אקשיין?",
    "לאיזו מדינה יש הכי הרבה סדרות?",
    "באיזו קטגוריה יש הכי הרבה סדרות לברזיל?",
    "הסוף! תודה על ההשתתפות :)"
  ];

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

      <button
        onClick={() => {
          setRadar(false);
          setBar(true);
          setIndex(0);
          setAllAnswer([]);
          setReport(false);
        }}
      >
        Bar
      </button>

      <button
        onClick={() => {
          setRadar(true);
          setBar(false);
          setIndex(0);
          setAllAnswer([]);
          setReport(false);
        }}
      >
        Radar
      </button>
      {bar && (
        <Bar
          data={chartDataBar}
          options={{
            title: {
              display: true,
              text: "Bar Chart",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom",
              labels: {
                fontColor: "#000"
              }
            }
          }}
        />
      )}

      {radar && (
        <Radar
          data={chartDataRadar}
          options={{
            title: {
              display: true,
              text: "Radar Chart",
              fontSize: 25
            },
            legend: {
              display: true,
              position: "bottom",
              labels: {
                fontColor: "#000"
              }
            },
            scale: {
              angleLines: {
                display: false
              },
              ticks: {
                suggestedMin: -10,
                suggestedMax: 45
              }
            }
          }}
        />
      )}
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
          {radar && (
            <h4>
              {index + 1}. {questionsRadar[index]}
            </h4>
          )}
          {bar && (
            <h4>
              {index + 1}. {questionsBar[index]}
            </h4>
          )}
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
        <h6>{ms}</h6>

        {report && (
          <>
            <h4>{radar ? "Radar Answers" : "Bar Answers"}</h4>
            <ol>{listItems}</ol>
          </>
        )}
      </div>
    </div>
  );
};

export default Chart;
