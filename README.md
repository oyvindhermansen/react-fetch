# React-fetch

Ajax with React Component

## Props

| Name         |      Type   |  Default |
|--------------|-------------|----------|
| url          |  string     | ' '      |
| method       | string      | GET      |
| asJSON       | boolean     | true     |
| options      | object      | {}       |
| forceRefetch | boolean     | false    |
| withEvent    | boolean     | false    |

## Children returns

| Name         |      Type   | 
|--------------|-------------|
| data         | any         |
| loading      | boolean     |
| error        | boolean     |
| errorInfo    | string      |
| fetchData    | function    |

## Usage

> This shows an example in it's most simplistic form. A regular GET request to fetch some JSON.

```jsx
import Fetch from 'react-fetch';

const App = () => {
  return (
    <Fetch
      url={'some-api-url'},
      withEvent={true},
    >
      {({
        data,
        loading,
        error,
        errorInfo,
        fetchData
      }) => {
        return (
          <div>
            <button onClick={fetchData}>Fetch some data</button>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div>
                {data.map(value => {
                  return <p>{value}</p>
                })}
              </div>
            )}
          </div>
        )
      }}
    </Fetch>
  )
}
```

