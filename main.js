    // select images of webpage
    const contents = document.querySelectorAll('img');
    console.log(contents);

    // declare googlyeyes var and set to createElement(img)method
    // set attribute of googlyeyes var of src = googlyeyes img
    // const eyes = document.createElement('img');
    // eyes.setAttribute('src', 'https://i.imgur.com/44r1bmL.png');
    // eyes.setAttribute('src', 'chrome-extension://jecojjflpmbfmjmeemkcaomchlmaicjn/assets/googly-eyes.png')


    // access size attribute of eyes

    // iterate through contents object
    for (let prop in contents) {
    // key into img parent and set css style position to relative
    // key into img and set css style position to relative
        // console.log(contents[prop].parentNode)
    // key into each img parent and add googlyeyes img as child
        contents[prop].setAttribute('src', 'https://i.imgur.com/44r1bmL.png')
        // contents[prop].parentNode.appendChild(eyes);
    // possible check css properties of img to filter out small imgs
        // contents[prop].parentNode.removeChild(contents[prop]);
    }
