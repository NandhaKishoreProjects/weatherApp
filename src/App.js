import logo from './logo.svg';
import './App.css';
import { SearchContainer } from './components/search-container/search-container';
import { Provider, useSelector } from 'react-redux';
import store from './store/WeatherState';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WeatherDetails } from './components/weather-details/weather-details';



function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000
      }
    }
  });



 // console.log(`${weatherReport} weatherReport`);
  
  return (
    <Provider store={store}>
    <QueryClientProvider client={ queryClient }>
   
    <div className="App">
        <SearchContainer>
       
          </SearchContainer>
          
    </div>
   
    </QueryClientProvider>
    </Provider>
  );
}

export default App;
