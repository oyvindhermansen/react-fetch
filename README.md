# React-fetch

Ajax with React Component

## Props

| Name         |      Type   |  Default | Description |
|--------------|-------------|----------|-------------|
| url          |  string     | ' '      | the URL you want to fetch from
| method       | string      | GET      | GET, POST, PUT and DELETE
| asJSON       | boolean     | true     | If you want your data response as JSON or not
| options      | object      | {}       | Options such as Headers and body. (It's using regular fetch() internally)
| forceRefetch | boolean     | false    | Used with `withEvent`-prop, if you want to fetch again on each click or just the first click.
| withEvent    | boolean     | false    | If not used, `componentDidMount` fires the fetching instead of an event of your choice.

## Children returns:

| Name         |    Type          |    Default   | 
|--------------|------------------|--------------|
| data         | any              | null
| loading      | boolean          | false
| error        | boolean          | false
| errorInfo    | null or object   | null
| fetchData    | null or function | depends on `withEvent`-prop

## Usage

> This shows an example in it's most simplistic form. A regular GET request to fetch some JSON.

```jsx
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
                {data !== null && data.map(value => {
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