# React-fetch

Ajax with React Component

### Usage

```jsx
import Fetch from 'react-fetch';

const App = () => {
  return (
    <Fetch
      withEvent={true}, // default false
      url={'some-api-url'} ,
      method={'POST'}, // default GET
      options={{}}, // Default empty object
      asJSON={true}, // Default true
    >
      {({
        data, // actual response
        loading, // loading state
        error, // error state (boolean)
        errorInfo, // error message
        fetchData // event for fetching data
      }) => {
        return (
          <div>
            {/* Handle response */}
          </div>
        )
      }}
    </Fetch>
  )
}
```

