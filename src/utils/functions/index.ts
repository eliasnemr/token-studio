

/** Copy to clipboard */
export async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
    } else {
        return copy(text);
    }
}

// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript/33928558#33928558
export function copy(text: string) {
    const input = document.createElement('textarea');
    input.textContent = text;
    document.body.appendChild(input);
    input.select();
    const result = document.execCommand('copy');
    document.body.removeChild(input);
    return Promise.resolve(result);
}

// hex to string
export const hexToString = (str1: string) => {
    if (typeof str1 === 'string') {
        const hex = str1.toString();
        let str = '';
        for (let n = 0; n < hex.length; n += 2) {
            str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }
        return str;
    } else {
        console.error(`Can't call hexToString on non-string type.`);
    }
};

// string to hex
export const strToHex = (str: string) => {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
        hex += '' + str.charCodeAt(i).toString(16);
    }
    return hex;
};

// contains text filter
export const containsText = (text: string, searchText: string) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

// is it a string
export const isPropertyString = (prop: any) => (typeof prop === 'string' ? true : false);

// does user have funds to spend?
export const checkFunds = (balance: any[], tokenid: string, amount: number) => {
    const tkn = balance.find((v) => v.tokenid === tokenid);
    return parseInt(tkn.sendable) > amount;
};


export const isValidURLSecureOnly = (urlString: string) => {
    try {
        const url = new URL(urlString);
        return url.protocol === 'https:';
    } catch (err) {
        console.error(err);
        throw err;
    }
};

export const numberWithCommas = (x: string) => {
    try {
        const parts = x.toString().split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return parts.join('.');
    } catch (err) {
        console.error(err);
        return x;
    }
};
/**
 *
 * @param imageData tokens image uri
 * @param tokenid tokens id for reference
 */
export const makeTokenImage = (imageData: string, tokenid: string): string | undefined => {
    let imageUrl;
    try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(imageData, 'application/xml');
        const errorNode = doc.querySelector('parsererror');
        if (errorNode) {
            console.error('Token does not contain an image', tokenid);
        } else {
            const imageString = doc.getElementsByTagName('artimage')[0].innerHTML;
            imageUrl = `data:image/jpeg;base64,${imageString}`;
        }

        return imageUrl;
    } catch (err) {
        console.error(`Failed to create image data ${tokenid}`, err);
    }

    return undefined;
};


export const isValidURLAll = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    } catch (error) {
      return false; // Return false if the URL is invalid
    }
  };