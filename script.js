//function to get information from the Advice Slip API
const adviceSlip = async () => {
    //fetches the advice slip
    let adviceSlip = await fetch("http://api.adviceslip.com/advice")
    let adviceData =  await adviceSlip.json()

    // set variables for the the API data
    let slip = adviceData.slip
    let adviceID = slip.id
    let advice = slip.advice

    // update the HTML with the advice slip data
    document.getElementById("advice-number").innerHTML = adviceID
    document.getElementById("advice-text").innerHTML = advice
}