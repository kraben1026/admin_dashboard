import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from 'react-router-dom';
import Topbar from './pages/global/Topbar';
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import Team from "./pages/team/Team";
import Invoices from "./pages/invoice/Invoice";
import Contacts from "./pages/contacts/Contacts";
import Bar from "./pages/bar/Bar";
import Form from "./pages/form/Form";
import Faq from "./pages/Faq/Faq";
import Pie from "./pages/pie/Pie";
import Line from "./pages/line/Line";
import Geography from "./pages/geography/Geography";
import Calendar from "./pages/calendar/Calendar";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value ={colorMode}>
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <div className='app'>
        <Sidebar />
        <main className='content'>
          <Topbar />
            <Routes>
              <Route path='/' element = {<Dashboard />} />
              <Route path='/team' element = {<Team />} />
              <Route path='/contacts' element = {<Contacts />} />
              <Route path='/invoices' element = {<Invoices />} />
              <Route path='/form' element = {<Form />} />
              <Route path='/bar' element = {<Bar />} />
              <Route path='/pie' element = {<Pie />} />
              <Route path='/line' element = {<Line />} />
              <Route path='/geography' element = {<Geography />} />
              <Route path='/faq' element = {<Faq />} />
              <Route path='/calendar' element = {<Calendar />} /> 
            </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
)
}

export default App;
