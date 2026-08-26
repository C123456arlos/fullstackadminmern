import React from 'react'
import { Box, useTheme } from '@mui/material'
import { useGetGeographyQuery } from 'state/api'
import Header from 'components/Header'
import { ResponsiveChoroplethCanvas } from '@nivo/geo'
import { geoData } from 'state/geoData'

const Geography = () => {
    const theme = useTheme()
    const { data } = useGetGeographyQuery()
  return (
      <Box m='1.5rem 2.5rem'>
          <Header title={'GEOGRAPHY'} subtitle={'find where your users are located'}></Header>
          <Box mt='40px' height={'75vh'} border={`1px solid ${theme.palette.secondary[200]}`}
              borderRadius={'4px'}>
              {data ? (<>
                  <ResponsiveChoroplethCanvas /* or ChoroplethCanvas for fixed dimensions */
        data={data}
        features={geoData.features}
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
        margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
        projectionScale={150}
        projectionTranslation={[0.45, 0.6]}
        domain={[0, 60]}
        unknownColor="#101b42"
        label="properties.name"
        valueFormat=".2s"
        enableGraticule={true}
        borderWidth={1.3}
        borderColor="#ffffff"
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: true,
                translateX: 0,
                itemTextColor:theme.palette.secondary[200],
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 92,
                itemHeight: 18,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 18
            }
        ]}
    />
              </>):<>loading</>}
          </Box>
    </Box>
  )
}

export default Geography