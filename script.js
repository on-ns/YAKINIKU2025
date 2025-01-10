var audio = document.getElementById('audio');
        var audioIcon = document.getElementById('audioIcon');

        function changeIconColor() {
            if (audio.paused) {
                audioIcon.style.fill = 'gray';
            } else {
                audioIcon.style.fill = '#c3a559';
            }
        }

        audioIcon.addEventListener('click', function() {
            if (audio.paused) {
                audio.play();
                audioIcon.style.fill = '#c3a559';
            } else {
                audio.pause();
                audioIcon.style.fill = 'gray';
            }
        });

        // 音声が終了したらアイコンの色をリセット
        audio.addEventListener('ended', function() {
            audioIcon.style.fill = 'gray';
        });


