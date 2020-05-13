import React, { useState } from "react";
import { Layout, Select } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function ScoreAgainstChart() {
  const { Option } = Select;
  const { Sider, Content } = Layout;

  const data = [
    {
      name: "Page A",
      Team1: 4000,
      Team2: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      Team1: 3000,
      Team2: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      Team1: 2000,
      Team2: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      Team1: 2780,
      Team2: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      Team1: 1890,
      Team2: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      Team1: 2390,
      Team2: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      Team1: 3490,
      Team2: 4300,
      amt: 2100,
    },
  ];

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  // Hooks:
  const [team1Name, setTeam1Name] = useState("Seahawks");

  // Need API call to get teams:

  // Need API call to

  return (
    <div>
      <Layout>
        <Content style={{ backgroundColor: "white" }}>
          <LineChart
            width={1000}
            height={600}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={team1Name}
              stroke="#8884d8"
              activeDot={{
                r: 8,
              }}
            />{" "}
            <Line type="monotone" dataKey="Team1" stroke="#82ca9d" />
          </LineChart>{" "}
        </Content>
        <Sider style={{ backgroundColor: "white" }}>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={(name) => setTeam1Name(name)}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="Team2">Team2</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Sider>
      </Layout>{" "}
    </div>
  );
}

export default ScoreAgainstChart;
