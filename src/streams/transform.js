import stream from 'stream'

const revChunk = (chunk, encoding, callback) => {
    const chunkStr = chunk.toString().slice(0, -1);
    const reversed = chunkStr.split("").reverse().join("");
    callback(null, reversed + "\n");
};

const transform = async () => {
    stream.pipeline(
        process.stdin,
        new stream.Transform({ transform: revChunk }),
        process.stdout,
        (error) => {
            if (error) throw error;
        }
    );
};


await transform();
