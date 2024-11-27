document.getElementById('start').addEventListener('click', async () => {
    try {
    
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        
        const video = document.getElementById('video');
        video.srcObject = stream;

        
        const audio = document.getElementById('audio');
        audio.srcObject = stream;

        
        const mediaRecorder = new MediaRecorder(stream);
        let chunks = [];
        
        mediaRecorder.ondataavailable = (event) => {
            chunks.push(event.data);
        };
        
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunks, { type: 'video/webm' });
            audio.src = URL.createObjectURL(blob);
        };
        
        document.getElementById('stop').addEventListener('click', () => {
            mediaRecorder.stop();
        });

        mediaRecorder.start();
    } catch (err) {
        console.error('Erro ao acessar a mídia: ', err);
    }
});