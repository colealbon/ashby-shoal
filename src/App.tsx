import type {
  Component
} from 'solid-js';
import { TiAnchor } from 'solid-icons/ti'

const App: Component = () => {
  return (
    <div class='font-sans h-screen mb-20 mt-0 bg-blue rounded-2'>
      <h1 class='color-white rounded flex flex-row justify-center'>
        <div class='mt-10 flex flex-row '>
          ashby<TiAnchor fill-opacity='50%'/>shoal
        </div>
      </h1>
      <main>
        <div class='flex flex-col text-center'>
          <div>
            <pre>
              37°&nbsp;50'&nbsp;46"&nbsp;N
              :
              122°&nbsp;18'&nbsp;58"&nbsp;W
            </pre>
          </div>
          <div class='w-full flex-content-between'>
            <span>
              <a href='https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=9414816'>tide</a>
            </span>
            <span class='text-transparent'> | </span>
            <span>
            <a href='https://forecast.weather.gov/MapClick.php?textField1=37.50&textField2=-122.18'>weather</a>
            </span>
            <span class='text-transparent'> | </span>
            <span>
              <a href="mailto: skipper@ashby-shoal.com">email</a>
            </span>
          </div>

        </div>
      </main>
    </div>
  )
};
export default App;