import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";


const ChartLine = () => {
    const data = [
        {
          name: '12:00',
          pv: 55
         
        },
        {
            name: '12:30',
            pv: 38
           
          },
        {
          name: '1:00',
    
          pv: 42
         
        },
        {
            name: '1:30',
      
            pv: 73
           
          },
        {
          name: '2:00',
    
          pv: 40
          
        },
        {
            name: '2:30',
      
            pv: 5
            
          },
        {
          name: '3:00',
    
          pv: 50
          
        },
        {
            name: '3:30',
      
            pv: 70
            
          },
        {
          name: '4:00',
    
          pv: 48
          
        },
        {
            name: '4:30',
      
            pv: 52
            
          },
        {
          name: '5:00',
    
          pv: 64
          
        },
        {
            name: '5:30',
      
            pv: 75
            
          },
        {
          name: '6:00',
          pv: 75
          
        },
        {
            name: '6:30',
      
            pv: 80
            
          },
         
        {
          name: '7:00',
          pv: 78
         
        },
        {
            name: '7:30',
      
            pv: 40
            
          },
        {
          name: '8:00',
          pv: 36
         
        },
        {
            name: '8:30',
      
            pv: 65
            
          },
        {
          name: '9:00',
          pv: 55
         
        },
        {
            name: '9:30',
      
            pv: 39
            
          },
        {
          name: '10:00',
          pv: 42
          
        },
        {
            name: '10:30',
      
            pv: 45
            
          },
        {
          name: '11:00',
          pv: 39
        
        },
      ];
    
    const HiddenDot = () => (
        <circle cx={0} cy={0} r={0} fill="transparent" stroke="none" />
    );
    return (
        <>
            <p
                style={{
                    color: "#4A4A65",
                    fontWeight: 700,
                    fontSize: "32px",
                }}
            >
                Token Price
            </p>
            <div style={{ backgroundcolor: "#fff" }}>
                <LineChart
                    width={636}
                    height={304.39}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid vertical={false} stroke="#DEDEE7" />
                    <XAxis dataKey="name" tick={{ fill: "#A4A4B2" }} tickLine={false} />
                    <YAxis domain={[0, 80]} tick={{ fill: "#A4A4B2" }} tickLine={false} />
                    <Tooltip />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9747FF" />
                            <stop offset="100%" stopColor="#14F4C9" />
                        </linearGradient>
                    </defs>
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="url(#gradient)"
                        strokeWidth={2}
                        dot={<HiddenDot />}
                    />
                </LineChart>
            </div >
        </>
    );
}
export default ChartLine;