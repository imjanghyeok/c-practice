import zlib from "zlib";
import fs from "fs";
import path from "path";
import https from "https";

const baseDirectory = ".git";
const indexPath = path.join(baseDirectory, "index");
const headPath = path.join(baseDirectory, "HEAD");


const options = {
    hostname: "gist.github.com",
    port: 443,
    path: "/f0bafdde7b185b1c0e7e5ab6cac23846.git",
    method: "GET",
    headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36",
        "Accept": "*/*"
    }
};


class Git {
    constructor() {
    }

    clone() {
        const req = https.request(options, res => {
            console.log(`응답 상태 코드: ${res.statusCode}`);

            res.on('data', d => {
                process.stdout.write(d);
            });
        });

        req.on('error', e => {
            console.error(`에러 발생: ${e.message}`);
        });
    }

}

export { Git }
