const getMap = async (data: any) => {
  const res = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${data}.json?limit=1&access_token=pk.eyJ1Ijoicm9hY3UiLCJhIjoiY2xhcmMzMXpyMThkYjN2bnZoZDhoNTlyeiJ9.TQJEyuVsnPmqtgzeuKCKWw`
  );
  const mapdata: any = await res.json();
  return mapdata;
};

export default getMap;
