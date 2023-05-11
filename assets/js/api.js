
async function fetchProfileData() {
    const response = await fetch('https://raw.githubusercontent.com/jmdonizetti/js-developer-portfolio/main/data/profile.json')
    return response.json()
}
