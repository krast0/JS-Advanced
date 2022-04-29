function attachEventsListeners() {

    let inputDays = document.getElementById('days')
    let inputHours = document.getElementById('hours')
    let inputMinutes = document.getElementById('minutes')
    let inputSeconds = document.getElementById('seconds')
    
    let units = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
    document.getElementById('daysBtn').addEventListener('click',changeUnit)
    document.getElementById('hoursBtn').addEventListener('click',changeUnit)
    document.getElementById('minutesBtn').addEventListener('click',changeUnit)
    document.getElementById('secondsBtn').addEventListener('click',changeUnit)


    function convert(value,time) {
        
        let days = value / units[time]

        return {
            days:days,
            hours:days * units.hours,
            minutes:days * units.minutes,
            seconds:days * units.seconds
        }
    }
    function changeUnit(event) {
        let unit = event.target.parentElement.querySelector('input[type="text"]')
        
        let time = convert(Number(unit.value),unit.id)
        
        console.log(time);

        inputDays.value = time.days
        inputHours.value = time.hours
        inputMinutes.value = time.minutes
        inputSeconds.value = time.seconds
    }
    




}