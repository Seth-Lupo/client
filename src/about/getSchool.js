

export default () => {
    
    let schoolMap = {
        projects: "Tufts",
    }
    
    let regex = /\/\w+/g
    let s = window.location.pathname
    let matches = s.match(/\w+/g)
   

    if (matches == null || matches.length == 0) {
        return "Tufts"
    } else {
        
        let word = matches[0]
        if (word in schoolMap) {
            return schoolMap[word]
        } else {
            return false
        }
    }
    
    return 
}
