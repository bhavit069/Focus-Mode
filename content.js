chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    // Check if the message requests the detectFD action
    if (request.action === "homescreen") {
        homescreen();
    }

    if (request.action === "video") {
        view();
    }
});

function path() {
    const currentPath = window.location.pathname;
    return currentPath;
}


function homescreen() {
    let current = path();
    if (current == '/' || current == 'undefined') {
        console.log('Home screen block enabled!')
        // Get the elements by ID
        const primaryDiv = document.getElementById('primary');
        const sectionsDiv = document.getElementById('sections');
    
        // Apply styles to the elements
        if (primaryDiv) {
            if (primaryDiv) {
                primaryDiv.remove();
            }
        }
    
        if (sectionsDiv) {
            sectionsDiv.style.filter = 'blur(30px)';
        }
    }
}

function view() {
    let current = path();
    if (current == '/watch') { 

        console.log('Video is on watch view')
        // setTimeout(() => {
        console.log('Started?')
        try {
            // Remove elements by ID
            const secondaryDiv = document.getElementById('secondary');
            const guideIconDiv = document.getElementById('guide-icon');
            const contentsDiv = document.getElementById('contents');
    
            // Remove the elements if they exist
            if (secondaryDiv) {
                secondaryDiv.remove();
            }
    
            if (guideIconDiv) {
                guideIconDiv.remove();
            }
    
            if (contentsDiv) {
                contentsDiv.remove();
            }
        } catch (err) {
            console.log(err)
        }
        // }, 500);
    }
}