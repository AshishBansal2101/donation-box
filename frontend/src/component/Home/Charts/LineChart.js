/*!
  =========================================================
  * Muse Ant Design Dashboard - v1.0.0
  =========================================================
  * Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
  * Copyright 2021 Creative Tim (https://www.creative-tim.com)
  * Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
  * Coded by Creative Tim
  =========================================================
  * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import ReactApexChart from "react-apexcharts";
import { Typography } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";

function LineChart() {
	const { Title, Paragraph } = Typography;

	return (
		<>
			<div className="linechart">
				<div>
					<Title level={5}>Growth</Title>
					<Paragraph className="lastweek">
						than last year <span className="bnb2">+3%</span>
					</Paragraph>
				</div>
				<div className="sales">
					<ul>
						<li>{<MinusOutlined />} Litreacy Rate</li>
						<li>{<MinusOutlined />} Annual Change</li>
					</ul>
				</div>
			</div>

			<ReactApexChart
				className="full-width"
				options={lineChart.options}
				series={lineChart.series}
				type="area"
				height={350}
				width={"100%"}
			/>
		</>
	);
}

export default LineChart;
