async function infinityLoop() {
    setTimeout(() => {
        while (true) {
            console.log(2)
        }
    },10000)
}

infinityLoop()

