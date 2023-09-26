import type {
  Component
} from 'solid-js';
import { createSignal } from 'solid-js'
import { TiAnchor } from 'solid-icons/ti'

const App: Component = () => {
  function createStoredSignal<T>(
    key: string,
    defaultValue: T,
    storage = localStorage
  ): Signal<T> {
    const initialValue = storage.getItem(key) != undefined
      ? JSON.parse(`${storage.getItem(key)}`) as T
      : defaultValue;
    const [value, setValue] = createSignal<T>(initialValue);
    const setValueAndStore = ((arg: any) => {
      const v = setValue(arg);
      storage.setItem(key, JSON.stringify(v));
      return v;
    }) as typeof setValue;
    return [value, setValueAndStore];
  }

  const [latestGeoLocation, setLatestGeoLocation] = createStoredSignal('latestGeolocation', null)

  // createEffect(() => {
  //   function getLocation() {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition((current => setCurrentPosition(current));
  //     } else {
  //       //x.innerHTML = "Geolocation is not supported by this browser.";
  //     }
  //   }
  // })

  return (
    <div class='font-sans h-screen bg-blue'>
      <h1 class='color-white rounded flex flex-row justify-center'>
        <div class='mt-20 flex flex-row '>
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