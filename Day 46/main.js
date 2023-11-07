const base = document.querySelector('.frame')

        for (let i = 1; i <= 6; i++) {
            addRing(i)
        }

        function addRing(e) {
            const ring = document.createElement('div')
            base.appendChild(ring)
            ring.className = "ring ring-" + e
            for(let i=1;i <= 12; i++){
                const dot = document.createElement('div')
                ring.appendChild(dot)
                dot.className = "dot dot-" + i
            }
        }