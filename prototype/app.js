document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const urlInput = document.getElementById('youtube-url');
    const reelViewer = document.getElementById('reel-viewer');

    const dummyReels = [
        {
            title: "What is a Neural Network?",
            concept: "Concept 1/5",
            bullets: [
                "Layers of interconnected nodes",
                "Inputs are multiplied by weights",
                "Activation functions introduce non-linearity"
            ],
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
        },
        {
            title: "Backpropagation Explained",
            concept: "Concept 2/5",
            bullets: [
                "Calculates the gradient of the loss function",
                "Updates weights using chain rule",
                "Minimizes the error iteratively"
            ],
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop"
        }
    ];

    let currentReelIndex = 0;

    generateBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        
        if (!url) {
            alert("Please paste a YouTube URL to see the magic!");
            return;
        }

        // Simulate Loading State
        reelViewer.innerHTML = `
            <div class="loader">
                <div class="spinner"></div>
                <p style="color: white; font-weight: 600;">Extracting Concepts...</p>
            </div>
        `;

        // Simulate Pipeline Processing (API Call)
        setTimeout(() => {
            renderReel(currentReelIndex);
            
            // Allow clicking on the reel to "scroll" to the next one
            reelViewer.addEventListener('click', handleScroll);
        }, 2000);
    });

    function renderReel(index) {
        const reel = dummyReels[index];
        reelViewer.innerHTML = `
            <div class="dynamic-reel" style="background-image: url('${reel.image}')">
                <div class="reel-content">
                    <div class="concept-badge">${reel.concept}</div>
                    <h3 class="reel-title">${reel.title}</h3>
                    <ul class="reel-bullets">
                        ${reel.bullets.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                        <span style="font-size: 0.75rem; color: #cbd5e1;">Tap to scroll</span>
                        <div style="display: flex; gap: 1rem; font-size: 1.5rem;">
                            <i class="ph-fill ph-heart"></i>
                            <i class="ph-fill ph-chat-circle"></i>
                            <i class="ph-fill ph-share-network"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    function handleScroll() {
        currentReelIndex = (currentReelIndex + 1) % dummyReels.length;
        renderReel(currentReelIndex);
    }
});
