// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2202-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}`);
        const result = await response.json();
        console.log(result);
        if (result.error) throw result.error;
        return result.data.players;
    }   catch (err) {
        console.error(err);
    }
};

//     try {
//         const response = await fetch(`${APIURL}/players`);
//         const result = await response.json();
//         console.log(result());
//         if (result.error) throw result.error;
//         return result.data.players;
//     }   catch (err) {
//         console.error("Hmm, trouble fetching player!" , err);

//     }
// };

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}`);
        const result = await response.json();
        console.log(result);
    }   catch (err) {
        console.error(err);
    }
};    
    // return dispatch => {
    //     dispatch({ type: 'GETTING_PLAYERS'});
    //     fecth(`/api/2202-FTB-ET-WEB-PT/${playerId}/players`) // id into path string 
    //     .then(res => res.json())
    //     .then(responseJSON => { dispatch({ type: 'ADD_PLAYERS' , cards: responseJSON});
    // });
    // }
// };

export const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(`${APIURL}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: 'Rufus',
              breed: 'Irish Setter',
            }),
          }
        );
        const result = await response.json();
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };
    let form = document.querySelector('#new-player-form > form');
    event.preventDefault();
    let playerData = {
        name: form.elements.name.value,
        breed: form.elements.breed.value
      }
      


    // try {
    //     const response = await fetch(`${APIURL}`{
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             name: 'Does this Work',
    //             breed: 'I Hope it does work'
    //         }),
    //     }
    //     );
    //     const result = await respsone.json();
    //     console.log(result);
    // }   catch (err) {
    //     console.error(err);
    // }


export const removePlayer = async (playerId) => {
    fetch(`${APIURL}`);{
    {}
  try {
    const response = await fetch(
      `${APIURL}`,
      {
        method: 'DELETE',
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
};