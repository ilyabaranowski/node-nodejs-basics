const parseEnv = () => {
    const prefix = 'RSS_';
    const envVariables = process.env;
    let result = '';
    for (let key in envVariables) {
        if (key.slice(0, 4) === prefix) {
            result += `${key} = ${envVariables[key]}`;
        }
    }
    console.log(result.slice(0, -2));
};

parseEnv();
