function autocomplete(input, latInput, lngInput) {

    if (!input) return; // skip this fn from running if there is no input on the page

    const dropdown = new google.maps.places.Autocomplete(input);

    dropdown.addListener('place_changed', () => {
        const place = dropdown.getPlace();
        latInput.value = place.geometry.location.lat();
        lngInput.value = place.geometry.location.lng();
    });

    // if someone hits enter on address field, don't submit the form

    // we can have .on because of blind.js adding 'on' to everything
    input.on('keydown', (e) => {
        // 13 is enter
        if (e.keyCode === 13) e.preventDefault();
    });
}

export default autocomplete;