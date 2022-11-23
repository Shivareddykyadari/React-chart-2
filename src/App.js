import './App.css';
import {Bar} from 'react-chartjs-2'
import { Chart,LinearScale,CategoryScale,BarElement } from 'chart.js';
Chart.register(
  LinearScale,CategoryScale,BarElement
)

                     //npm i react-chartjs-2 .

const labels=['x','y','z']

const data={
  labels,
  datasets:[
    {
      label:"x",
      data:[100,120,50,150],
      backgroundColor:['pink','blue','red'],
      
    },
  ]
}

function App() {
  return (
    <div style={{width:'50%',margin:'auto' , paddingTop:'10%'}} >
      <h1>React-Vertical-Chart-Showing Given Data</h1>
         <Bar data={data} />
    </div>
  );
}

export default App;
