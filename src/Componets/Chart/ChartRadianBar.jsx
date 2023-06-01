import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";
const data = [
    {
        name: "Bank",
        uv: 31.47,
        pv: 456789012,
        fill: "#F3BA2F"

    },
    {
        name: "Token",
        uv: 26.69,
        pv: 156789012,
        fill: " #54C2C1"

    },
    {
        name: "Stock",
        uv: 15.69,
        pv: 6789012,
        fill: " #0F0F3F"
    },
    {
        name: "Cash",
        uv: 8.22,
        pv: 56789012,
        fill: " #9020E9"

    }

];

const style = {
    top: 0,
    left: 350,
    lineHeight: "24px"
};
const CustomizedLegend = (value, entry) => {
    return (
        <>
            <div>
                <span style={{ color: '#5f5F76', marginLeft: '10px', marginRight: '30px' }}>{entry.payload.name}</span>
                <span style={{ color: '#0F0F3F', fontWeight: 700 }}>${entry.payload.uv.toFixed(2)}</span>
            </div>
        </>
    );
};
  
const ChartRadianBar = () => {

    return (

        <div>
            <p
                style={{
                    color: "#4A4A65",
                    fontWeight: 700,
                    fontSize: "32px",
                }}
            >
                Money Allocation
            </p>
            <RadialBarChart
                width={500}
                height={300}
                cx={150}
                cy={150}
                innerRadius={20}
                outerRadius={100}
                barSize={10}
                data={data}
            >
                <RadialBar
                    minAngle={15}
                    background
                    clockWise
                    dataKey="uv"

                />
                <Legend
                iconType="cicle"
                iconSize={10}
                width={120}
                height={140}
                layout="horizontal"
                verticalAlign="middle"
                wrapperStyle={style}
                formatter={CustomizedLegend}

               
              
              
            />
           
          


            </RadialBarChart>

        </div>




    );
}
export default ChartRadianBar;