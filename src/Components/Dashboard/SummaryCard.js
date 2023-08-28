import React, {useMemo} from 'react';
import { MDBCard, MDBCardText } from 'mdb-react-ui-kit';
import CanvasJSReact from '@canvasjs/react-charts';

const TransactionChart = (dataPoints) => {
    var CanvasJSChart =  CanvasJSReact.CanvasJSChart;

    const options = {
        animationEnabled: true,
        axisX: {
          title: 'Date',
          valueFormatString: 'MMM DD'
        },
        axisY: {
          title: 'Balance'
        },
        height: 200,

        data: [{
          type: 'spline',
          markerSize: 10,
          xValueFormatString: 'MMM DD',
          yValueFormatString: '#,##0.00',
          dataPoints: dataPoints
        }]
      }

    return(
        <div className='px-5'>
            <CanvasJSChart options={options}/>
        </div>
    )
}

export const SummaryCard = () => {
    const data = [
        { x: new Date('2023-08-10'), y: 1200 },
        { x: new Date('2023-08-11'), y: 1250 },
        { x: new Date('2023-08-12'), y: 1220 },
        { x: new Date('2023-08-13'), y: 1250 },
        { x: new Date('2023-08-14'), y: 1220 },
        { x: new Date('2023-08-18'), y: 150 },
        { x: new Date('2023-08-23'), y: 10 },
    ]
    

    return (
        <MDBCard className='mx-2 mt-4 h-50' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', color: '#fff' }}>
            <MDBCardText className='pt-3 ps-5 fs-3'>Balance Summary</MDBCardText>
            {TransactionChart(data)}
        </MDBCard>
    )
}