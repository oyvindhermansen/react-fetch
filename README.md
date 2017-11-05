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
| data         |  any        |
| loading      | boolean     |
| error        | boolean     |
| errorInfo    | string      |
| fetchData    | function    |

## Usage

```jsx
import Fetch from 'react-fetch';

const App = () => {
  return (
    <Fetch
      url={'some-api-url'},
      method={'POST'},
      options={{
        headers: /* header settings */,
        body: { my: 'data' }
      }},
      asJSON={true},
      withEvent={true},
      forceRefetch={true}
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
            {loading ? (
              <h1>Loading...</h1>
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

