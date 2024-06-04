// Currently there are words from June 2, 2024 to June 30, 2024 in the database
// If you would like to change the date for testing,
// set option. Example: option = "June 15, 2024"
// in this exact format: Month Day, Year
const option = ""

function useDate() {
    if (option == "") {
        let now = new Date()
        return(now)
    } else {
        let now = new Date(option)
        return(now)
    }
}

export default useDate