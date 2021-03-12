const l = 10;
for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
        if (i <= j) {
            process.stdout.write(" " + i + " ");
        }

    }
    console.log("");
}