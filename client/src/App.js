import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { themeSettings } from 'theme'
import Dashboard from 'scenes/dashboard'
import Layout from 'scenes/layout'
import Products from 'scenes/products';
import Customers from 'scenes/customers';
import Transactions from 'scenes/transactions'
import Geography from 'scenes/geography'
import Overview from 'scenes/overview'
import Daily from 'scenes/daily'
import Monthly  from 'scenes/monthly'
import Breakdown from 'scenes/breakdown'
import Admin from 'scenes/admin'
import Performance from 'scenes/performance'

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
          <Routes>
            <Route element={<Layout></Layout>}>
              <Route path='/' element={<Navigate to='/dashboard' replace></Navigate>}></Route>
              <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
              <Route path='/products' element={<Products></Products>}></Route>
              <Route path='/customers' element={<Customers></Customers>}></Route>
              <Route path='/transactions' element={<Transactions></Transactions>}></Route>
              <Route path='/geography' element={<Geography></Geography>}></Route>
              <Route path='/daily' element={<Daily></Daily>}></Route>
              <Route path='/monthly' element={<Monthly></Monthly>}></Route>
            <Route path='/overview' element={<Overview></Overview>}></Route>
              <Route path='/breakdown' element={<Breakdown></Breakdown>}></Route>
              <Route path='/admin' element={<Admin></Admin>}></Route>
              <Route path='/performance' element={<Performance></Performance>}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
