import type {
  Component
} from 'solid-js';
import { TiAnchor } from 'solid-icons/ti'

const App: Component = () => {
  return (
    <div class='font-sans h-screen mb-20 mt-0 bg-blue rounded-2'>
      <h1 class='color-white rounded flex flex-row justify-center'>
        <div class='mt-10 flex flex-row '>
          <div>
            <TiAnchor />
          </div>
          ashby shoal
        </div>
      </h1>
      <div class='flex flex-col text-2xl text-center'>
        <div>
          37°&nbsp;50'&nbsp;46"&nbsp;N
        </div>
        <div>
          122°&nbsp;18'&nbsp;58"&nbsp;W
        </div>
        <div>
          San Francisco Station:&nbsp;9414290
        </div>
        <a href='https://tidesandcurrents.noaa.gov/noaatidepredictions.html?id=9414816'>tide</a>
        <a href='https://forecast.weather.gov/MapClick.php?textField1=37.50&textField2=-122.18'>weather</a>
        <a href = "mailto: skipper@ashby-shoal.com">Send Email</a>
      </div>
    </div>
  )
};
export default App;