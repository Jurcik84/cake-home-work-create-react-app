
const CAKES_END_POINT = `http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes/`;



export async function fetchAllCakes() {

    try {
        const url = CAKES_END_POINT;

        const resposne = await fetch(url);

        if (resposne.status === 200) {

            const cakes = await resposne.json();

            return cakes;
        }

        else {

            return []
        }
    }

    catch (error) {

        console.error('fetchAllCake:ERROR')

    }
}



export async function fetchCakeById(cakeId) {


    try {

        const url = CAKES_END_POINT;

        const resposne = await fetch(url + cakeId);

        if (resposne.status === 200) {

            const cake = await resposne.json();

            return cake;
        }

        else {
            return {}
        }
    }

    catch (error) {

        console.error("fetchCakeById:ERROR")
    }
}

