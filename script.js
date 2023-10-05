function searchGoogle() {
    let query = document.querySelector('.query').value;
    let url = 'https://www.google.com/search?q=' + encodeURIComponent(query);
    window.location.href = url;
    return false; // Prevent form submission
}