const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const submit = document.getElementById("submit")

const createCharacter = body => axios.post("http://localhost:4000/api/characters/", body)


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/").then(res => {
            const data = res.data
            alert(data)
        })
}

const checkButton = () => {
    axios.get("http://localhost:4000/api/game/").then(res => {
        const data = res.data
        alert(data)
    })
}

function submitHandler(e) {
    e.preventDefault()

    let cname = document.querySelector("#cname")
    let str = document.querySelector("#str")
    let dex = document.querySelector("#dex")
    let consti = document.querySelector("#consti")
    let int = document.querySelector("#int")
    let wis = document.querySelector("#wis")
    let char = document.querySelector("#char")
    let comli = document.querySelector("#comli")

    let bodyObj = {
        cname: cname.value,
        str: str.value,
        dex: dex.value,
        consti: consti.value,
        int: int.value,
        wis: wis.value,
        char: char.value,
        comli: comli.value
    }

    createCharacter(bodyObj)

    cname.value = ''
    str.value = 0
    dex.value = 0
    consti.value = 0
    int.value = 0
    wis.value = 0
    char.value = 0
    comli.value = 0

}

fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
submit.addEventListener('click', submitHandler)
