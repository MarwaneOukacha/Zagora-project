import { Card, Title, BarChart, Grid, Col, Metric, Text } from "@tremor/react";
import "../Dashboard.css"
const chartdata = [
  {
    class: "Nursery",
    "Number of boys": 21,
    "Number of girls": 18,
  },
  {
    class: "LKG",
    "Number of boys": 14,
    "Number of girls": 11,
  },
  {
    class: "UKG",
    "Number of boys": 9,
    "Number of girls": 15,
  },
  {
    class: "Class 1",
    "Number of boys": 19,
    "Number of girls": 24,
  },
  {
    class: "Class 2",
    "Number of boys": 26,
    "Number of girls": 8,
  },
  {
    class: "Class 3",
    "Number of boys": 10,
    "Number of girls": 12,
  },
  {
    class: "Class 4",
    "Number of boys": 14,
    "Number of girls": 12,
  },
  {
    class: "Class 5",
    "Number of boys": 15,
    "Number of girls": 9,
  },
];

const kpiData = [
  {
    title: "Student Strength",
    metric: "114",
  },
  {
    title: "No. of Girls",
    metric: "54",
  },
  {
    title: "No. of Boys",
    metric: "60",
  },
];

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h3 className="header-title">Hello Admin!</h3>
      </header>

      <div className="dashboard-content">
        {/* Grid for KPIs */}
        <div className="kpi-grid">
          {kpiData.map((item) => (
            <div key={item.title} className="kpi-card">
              <Text>{item.title}</Text>
              <Metric>{item.metric}</Metric>
            </div>
          ))}
        </div>

        {/* Card with Bar Chart */}
        <div className="chart-card">
          <Title>Class-wise student distribution</Title>
          <BarChart
            data={chartdata}
            dataKey="class"
            categories={["Number of boys", "Number of girls"]}
            colors={["blue", "fuchsia"]}
            marginTop="mt-6"
            stack={true}
            yAxisWidth="w-6"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
