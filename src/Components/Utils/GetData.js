export const getData = async (filename) => {
    const res = await fetch(filename,
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    )
    //   .then(function(response){
    //     console.log(response)
    //     return response.json();
    //   })
    //   .then(function(myJson) {
    //   });
    const json = await res.json();
    return json;
}