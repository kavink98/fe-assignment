export const getData = async (filename) => {
    const res = await fetch(filename,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    const json = await res.json();
    return json;
}