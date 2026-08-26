import React, {useMemo, useState} from 'react'
import {  Box, useTheme } from '@mui/material'
import Header from 'components/Header'
import OverviewChart from 'components/OverviewChart'
import { useGetSalesQuery } from 'state/api'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ResponsiveLine } from '@nivo/line'

const Daily = () => {
    const [startDate, setStartDate] = useState(new Date('2021-02-01'))
    const [endDate, setEndDate] = useState(new Date('2021-03-01'))
    const { data } = useGetSalesQuery()
    console.log(data, 'data data')
    const theme = useTheme()
    const [formattedData] = useMemo(() => {
            if (!data) return []
        const { dailyData } = data
  
            const totalUnitsLine = {
              id: 'totalUnits',
              color: theme.palette.secondary[600],
              data:[]
            }
        Object.values(dailyData).forEach(({ date, totalUnits }) =>
        {
            const dateFormatted = new Date(date)
            if (dateFormatted >= startDate && dateFormatted <= endDate) {
                const splitDate = date.substring(date.indexOf('-') + 1)

        totalUnitsLine.data = [
          ...totalUnitsLine.data,
          {x:splitDate, y:totalUnits}
        ]
            }
        })
        const formattedData= [ totalUnitsLine]
        return[ formattedData]
    }, [data, startDate, endDate
    ])
    // const [formattedData] = useMemo(() => {
    //         if (!data) return []
    //     const { dailyData } = data
    //         const totalSalesLine = {
    //           id: 'totalSales',
    //           color: theme.palette.secondary.main,
    //           data:[]
    //         }
    //         const totalUnitsLine = {
            //   id: 'totalUnits',
    //           color: theme.palette.secondary[600],
    //           data:[]
    //         }
        // Object.values(dailyData).forEach(({ date, totalSales, totalUnits }) =>
        // {
        //     const dateFormatted = new Date(date)
        //     if (dateFormatted >= startDate && dateFormatted <= endDate) {
        //         const splitDate = date.substring(date.indexOf('-') + 1)
        //              totalSalesLine.data = [
        //   ...totalSalesLine.data,
        //   {x:splitDate, y:totalSales}
        // ]
        // totalUnitsLine.data = [
        //   ...totalUnitsLine.data,
        //   {x:splitDate, y:totalUnits}
        // ]
        //     }
        // })
    //     const formattedData= [totalSalesLine, totalUnitsLine]
    //     return[ formattedData]
    // }, [data, startDate, endDate
    // ])
  return (
      <Box m='1.5rem 2.5rem'>
          <Header title='daily sales' subtitle='chart of daily sales'></Header>
          <Box height={'75vh'}>
              {/* <Box display={'flex'} justifyContent={'flex-end'}>
                  <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                  ></DatePicker>
                  <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
               minDate={startDate}
                  ></DatePicker>
              </Box> */}

{/* <ResponsiveLine 
      data={formattedData}
      theme={{
            axis:{
                domain:{
                    line:{
                        stroke:theme.palette.secondary[200]
                    }
                },
                legend:{
                    text:{
                        fill:theme.palette.secondary[200]
                    }
                },
                ticks:{
                    line:{
                        stroke:theme.palette.secondary[200],
                        strokeWidth:1
                    },
                    text:{
                        fill:theme.palette.secondary[200]
                    }
                }
            },
            legends:{
                text:{
                    fill:theme.palette.secondary[200]
                }
            },
            tooltip:{
                container:{
                    color:theme.palette.primary.main
                }
            }
        }}
        margin={{ top: 20, right:50, bottom: 50, left: 70 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
      axisBottom={{
       
        legend:'Month'
      }}
      axisLeft={{
        legend: 'count', legendOffset: -40,
        legend: 'sales',
        legendOffset:-60
      }}
          enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
      pointLabelYOffset={-12}
      curve='catmullRom'
        enableTouchCrosshair={true}
        useMesh={true}
      legends={
      
        [
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 30,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
      ]}
    /> */}











































              {/* {data ? (
                   <ResponsiveLine 
                        data={formattedData}
                        theme={{
                              axis:{
                                  domain:{
                                      line:{
                                          stroke:theme.palette.secondary[200]
                                      }
                                  },
                                  legend:{
                                      text:{
                                          fill:theme.palette.secondary[200]
                                      }
                                  },
                                  ticks:{
                                      line:{
                                          stroke:theme.palette.secondary[200],
                                          strokeWidth:1
                                      },
                                      text:{
                                          fill:theme.palette.secondary[200]
                                      }
                                  }
                              },
                              legends:{
                                  text:{
                                      fill:theme.palette.secondary[200]
                                  }
                              },
                              tooltip:{
                                  container:{
                                      color:theme.palette.primary.main
                                  }
                              }
                      }}
                      colors={{datum:'color'}}
                          margin={{ top: 50, right:50, bottom: 70, left: 60 }}
                          yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                      axisBottom={{
                            legendOffset:60,
                          tickRotation:90,
                          legend: 'Month'
                        }}
                        axisLeft={{
                          legend: 'count', legendOffset: -40,
                          legend: 'total',
                          legendOffset:-50
                        }}
                            enableGridX={false}
                          enableGridY={false}
                          pointSize={10}
                          pointColor={{ theme: 'background' }}
                          pointBorderWidth={2}
                          pointBorderColor={{ from: 'seriesColor' }}
                        pointLabelYOffset={-12}
                        curve='catmullRom'
                          enableTouchCrosshair={true}
                          useMesh={true}
                        legends={
                         
                          [
                              {
                                  anchor: 'top-right',
                                  direction: 'column',
                                  translateX: 50,
                                  itemWidth: 80,
                                  itemHeight: 22,
                                  symbolShape: 'circle'
                              }
                        ]}
                      />

              ):<>loading</>} */}
      
      
      
      
      
      
      
      
      
      <ResponsiveLine 
        data={formattedData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{ legend: 'transportation', legendOffset: 36 }}
        axisLeft={{ legend: 'count', legendOffset: -40 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
      
      
      
      
      
          </Box>
    </Box>
  )
}

export default Daily