document.addEventListener("DOMContentLoaded", () => {
    
    console.log("SHE-SECURE Script Loaded! Page is ready.");

    // --- CLICK SOUND (FOR ALL BUTTONS *EXCEPT* PANIC) ---
    const clickSound = new Audio("data:audio/mpeg;base64,SUQzBAAAAAAAIENNNAAAAAASTk9OWgAAAAlVUkwAAAAAAAD/23cFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArEADgAEvA8g/gEwAIdQufFwAAB4NDn/eQf8AQAAAANsAR0BwxwA8AMcAcMcAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHInput.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gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmVuYqRwAAAABJTkZPAAAAAQAABAAwADhQYWNrZWQgd2l0aCBlYXN5Q0RBLVNSVgAAYl5CAAAAAEj/tvgAAABEAACAADhQYWNrZWQgd2l0aCBFYXN5Q0QtREFDAAAAbGF2ZjU2LjE1LjEwMgAAAAD/wA5vYAAAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/44AAA/gD/4NwhwEcwn8B4B8ARo1jYXcAAAAA");

    // Get all buttons *except* the panic button
    const actionButtons = document.querySelectorAll(
        ".action-grid .action-card, .btn-directions" // Removed .filter-btn as it's no longer in HTML
    );
    
    console.log(`Found ${actionButtons.length} buttons to add 'click' sound to.`);

    actionButtons.forEach(button => {
        button.addEventListener("click", () => {
            console.log("Button clicked! Playing click sound...");
            clickSound.currentTime = 0; // Rewind to start
            const playPromise = clickSound.play();

            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // It's okay if this fails silently
                });
            }
        });
    });

    // --- PANIC BUTTON ALARM (SIREN) ---
    const panicButton = document.getElementById('panic-button');
    
    // Only run this code if the panic button is on the page (index.html)
    if (panicButton) {
        // Create the loud alarm sound (siren)
        const alarmSound = new Audio("data:audio/mpeg;base64,SUQzBAAAAAAAIENNNAAAAAASTk9OWgAAAAlVUkwAAAAAAAD/23cFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1LMFsQBPAN8/gEwAIdQufFwAAB4NDn/eQf8AQAAAANsAR0BwxwA8AMcAcMcAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHMVsQBP/23cFAAE9En8AIAAAAAAv/T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/img/T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0SgD/23cFAAABAEngAIAAAAAA1P/T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0A//aJwA/9t3BQABPQ5/ACAAAAAAMP/T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/9P/0//T/QWAP/bdwUAAAEASAACAAAAAADx/9P/0//T/9P/0//T/9P/0//T/9P/Small/T/9P/0//T/9P/0//T/9P/0//T/9P/Input.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gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmVuYqRwAAAABJTkZPAAAAAQAABAAwADhQYWNrZWQgd2l0aCBlYXN5Q0RBLVNSVgAAYl5CAAAAAEj/tvgAAABEAACAADhQYWNrZWQgd2l0aCBFYXN5Q0QtREFDAAAAbGF2ZjU2LjE1LjEwMgAAAAD/wA5vYAAAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4INgQAEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/4NwhwEcwn8B4B8ARo1jYXcAAAAA/+CDAARbAD/4INgQAEUwCABGTn/wA5vYAAAATVJMzIuODlVTAD/44AAA/gD/4NwhwEcwn8B4B8ARo1jYXcAAAAA");
        alarmSound.loop = true; // Make the alarm loop
        let isAlarmPlaying = false; // Track the state

        // Add a click listener JUST for the panic button
        panicButton.addEventListener('click', (event) => {
            // Stop the "click" sound from also playing
            event.stopPropagation(); 

            if (isAlarmPlaying) {
                // If it's playing, stop it
                alarmSound.pause();
                alarmSound.currentTime = 0; // Rewind
                isAlarmPlaying = false;
                console.log("Alarm OFF");
            } else {
                // If it's stopped, play it
                const playPromise = alarmSound.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.error("Alarm play failed:", error);
                        // Show a message on the modal IF it exists
                        // We must check if showModal is a function, as this script runs on all pages
                        if (typeof showModal === 'function') {
                            showModal("Could not play alarm. Please click the button again and check browser permissions.");
                        }
                    });
                }
                isAlarmPlaying = true;
                console.log("Alarm ON");
            }
        });
    }


    // --- LOCATION & MODAL CODE (for index.html) ---
    const shareLocationButton = document.getElementById("share-location");
    const modalOverlay = document.getElementById("custom-modal");
    const modalMessage = document.getElementById("modal-message");
    const modalCloseBtn = document.getElementById("modal-close-btn");

    // This variable will hold the function IF the modal exists
    let showModal = null;

    // Only set up location/modal logic if all the index.html elements exist
    if (shareLocationButton && modalOverlay && modalMessage && modalCloseBtn) {

        console.log("Setting up modal and location listeners for index.html");

        /**
         * Shows the custom modal with a specific message.
         */
        showModal = function(message) {
            modalMessage.textContent = message;
            modalOverlay.style.display = "flex";
        }

        // Add click listener to the close button
        modalCloseBtn.addEventListener("click", () => {
            modalOverlay.style.display = "none";
        });

        // Also close if clicking the overlay (outside the content)
        modalOverlay.addEventListener("click", (event) => {
            if (event.target === modalOverlay) {
                modalOverlay.style.display = "none";
            }
        });

        // This listener is JUST for the location logic
        shareLocationButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Stop the sound event
            console.log("Share Location button logic running...");

            if (!navigator.geolocation) {
                console.error("Geolocation is not supported.");
                showModal("Geolocation is not supported by your browser.");
                return;
            }
            navigator.geolocation.getCurrentPosition(success, error);
        });

        // Function to handle successful location retrieval
        function success(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            console.log(`Location found: ${latitude}, ${longitude}`);
            
            const googleMapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
            
            if (navigator.share) {
                navigator.share({
                    title: 'My Live Location',
                    text: 'Here is my current location:',
                    url: googleMapsLink,
                })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
            } else {
                // Try clipboard API
                try {
                    const textArea = document.createElement("textarea");
                    textArea.value = googleMapsLink;
                    textArea.style.position = "fixed";
                    textArea.style.top = "0";
                    textArea.style.left = "0";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    
                    const successful = document.execCommand('copy');
                    if (successful) {
                        showModal('Your location link has been copied to the clipboard!\n' + googleMapsLink);
                    } else {
                        showModal('Failed to copy. Here is your link: ' + googleMapsLink);
                    }
                    document.body.removeChild(textArea);

                } catch (err) {
                    showModal('Copying failed. Here is your link: ' + googleMapsLink);
                }
            }
        }

        // Function to handle errors
        function error(err) {
            let message = "Unable to retrieve your location.";
            if (err.code === err.PERMISSION_DENIED) {
                message = "You denied the request for Geolocation. Please enable it in your browser settings.";
            }
            console.error(message);
            showModal(message);
        }
    }

    // --- SAFE LOCATIONS MAP (for safelocations.html) ---
    const mapContainer = document.getElementById('map-container');

    // Only run this if we are on the safelocations.html page
    if (mapContainer) {
        console.log("On Safe Locations page, attempting to load map...");

        /**
         * Creates and embeds a Google Map iframe into the #map-container
         */
        function embedMap(lat, lon, query) {
            mapContainer.innerHTML = ''; // Clear the "Loading map..." text
            const iframe = document.createElement('iframe');
            let src = '';

            if (lat && lon) {
                // If we have coordinates, center the map on them
                console.log(`Loading map with coordinates: ${lat}, ${lon}`);
                src = `https://maps.google.com/maps?q=${lat},${lon}&hl=en&z=15&output=embed`;
            } else if (query) {
                // If no coordinates, use the fallback query
                console.log(`Loading map with query: ${query}`);
                src = `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=en&z=13&output=embed`;
            } else {
                // A final fallback
                console.log("No location or query. Loading default map.");
                src = `https://maps.google.com/maps?q=Shimoga%2C+Karnataka&hl=en&z=13&output=embed`;
            }
            
            iframe.src = src;
            iframe.loading = 'lazy';
            iframe.referrerPolicy = 'no-referrer-when-downgrade';
            
            mapContainer.appendChild(iframe);
        }

        // Check if Geolocation is available
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                // Success: User allowed location
                (position) => {
                    embedMap(position.coords.latitude, position.coords.longitude, null);
                },
                // Error: User denied location or it failed
                (error) => {
                    console.warn(`Geolocation error (${error.code}): ${error.message}`);
                    embedMap(null, null, 'Shimoga, Karnataka');
                }
            );
        } else {
            // Geolocation is not supported by this browser
            console.warn("Geolocation is not supported. Loading default map.");
            embedMap(null, null, 'Shimoga, Karnataka');
        }
    }

    // --- NEW: SUPPORT CHAT (for supportchat.html) ---
    const chatForm = document.getElementById('chat-form');
    
    // Only run this code if we are on the supportchat.html page
    if (chatForm) {
        console.log("On Support Chat page, setting up chatbot...");

        const chatInput = document.getElementById('chat-input');
        const chatWindow = document.getElementById('chat-window');
        
        // --- Gemini API Configuration ---
        const apiKey = ""; // API key is handled by the environment
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
        
        // This is the chatbot's "persona"
        const systemPrompt = "You are 'Sakhi', a compassionate and supportive chatbot for the SHE-SECURE women's safety platform. Your role is to provide comfort, answer questions about safety, and offer resources. You are NOT a medical professional or a legal expert, and you must decline to give medical or legal advice, instead suggesting they contact a professional or use the emergency numbers. Be empathetic, patient, and use reassuring language. Keep your answers concise and clear.";
        
        // This array will store the conversation history for the API
        let chatHistory = [];

        // --- UPDATED: Helper function to fetch with retry (exponential backoff) ---
        /**
         * @param {string} url The API endpoint
         * @param {object} options The fetch options (method, headers, body)
         * @param {number} retries Number of retries
         * @param {number} delay Initial delay in ms
         * @returns {Promise<object>} The JSON response
         */
        async function fetchWithBackoff(url, options, retries = 3, delay = 1000) {
            let lastError;
            // Use a loop for retries
            for (let i = 0; i < retries; i++) {
                try {
                    const response = await fetch(url, options);

                    // 1. Check for a successful response
                    if (response.ok) {
                        return response.json(); // Success!
                    }

                    // 2. Check for retryable server errors
                    if (response.status === 429 || response.status >= 500) {
                        // This is a retryable error
                        lastError = new Error(`HTTP error! status: ${response.status}`);
                        // Wait with exponential backoff
                        await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
                        console.warn(`Retrying... Attempt ${i + 1}`);
                        continue; // Go to the next loop iteration (retry)
                    }

                    // 3. Check for non-retryable client errors (400, 401, 403, 404)
                    // These errors should fail fast
                    let errData;
                    try {
                        errData = await response.json();
                        lastError = new Error(errData.error?.message || `HTTP error! status: ${response.status}`);
                    } catch (jsonError) {
                        // Response wasn't JSON, just use the status
                        lastError = new Error(`HTTP error! status: ${response.status}`);
                    }
                    throw lastError; // Throw to exit the loop and be caught by getBotResponse

                } catch (error) {
                    // This catches network errors (e.g., 'Failed to fetch')
                    lastError = error; // Store the network error
                    console.warn(`Network error, retrying... Attempt ${i + 1}`);
                    await new Promise(res => setTimeout(res, delay * Math.pow(2, i)));
                    // Continue to retry network errors
                }
            }
            // If we've exhausted all retries, throw the last error we saw
            throw lastError;
        }


        // --- Helper function to add a message to the chat window ---
        /**
         * @param {string} message The text to display
         * @param {string} sender 'user', 'bot', or 'bot-loading'
         * @returns {HTMLElement} The created message element
         */
        function addMessageToWindow(message, sender) {
            const messageElement = document.createElement('div');
            messageElement.classList.add('chat-message', `${sender}-message`);
            
            // A simple way to show "..."
            if (sender === 'bot-loading') {
                messageElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            } else {
                messageElement.textContent = message;
            }
            
            chatWindow.appendChild(messageElement);
            // Auto-scroll to the bottom
            chatWindow.scrollTop = chatWindow.scrollHeight;
            return messageElement;
        }

        // --- Main function to get the bot's response ---
        async function getBotResponse(userInput) {
            // Add user message to history
            chatHistory.push({ role: "user", parts: [{ text: userInput }] });

            // Show loading indicator
            const loadingElement = addMessageToWindow("...", 'bot-loading');

            const payload = {
                contents: chatHistory,
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                },
            };

            try {
                const result = await fetchWithBackoff(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (!result.candidates || !result.candidates[0].content) {
                     throw new Error("Invalid API response structure.");
                }

                const botText = result.candidates[0].content.parts[0].text;
                
                // Add bot's actual response to history
                chatHistory.push({ role: "model", parts: [{ text: botText }] });
                
                // Remove the loading "..."
                loadingElement.remove();
                // Add the real bot message
                addMessageToWindow(botText, 'bot');

            } catch (error) {
                console.error("Error fetching bot response:", error);
                // Remove the loading "..."
                loadingElement.remove();
                // Show an error message in the chat
                addMessageToWindow("I'm sorry, I'm having trouble connecting right now. Please try again in a moment.", 'bot');
                
                // Remove the failed user message from history so they can try again
                chatHistory.pop();
            }
        }

        // --- Event Listener for the form submission ---
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const userInput = chatInput.value.trim();

            if (userInput === "") {
                return; // Don't send empty messages
            }

            // Add the user's message to the window
            addMessageToWindow(userInput, 'user');
            // Clear the input field
            chatInput.value = "";
            
            // Get the bot's response
            getBotResponse(userInput);
        });
    }

});
