REACT_APP_TWITCH_CLIENT=
REACT_APP_TWITCH_SECRET=
REACT_APP_GRAPHCMS_ENDPOINT=

use `process.env.VARIABLE-NAME`

example of how to use graphcms api
```
useEffect(() => {
    const fetchItems = async () => {
      const { items } = await request(
        process.env.REACT_APP_GRAPHCMS_ENDPOINT ? process.env.REACT_APP_GRAPHCMS_ENDPOINT : "",
        `
          { 
            items {
              values
            }
          }
        `
      );
      setValue(items);
    };

    fetchItems();
  }, []);
```