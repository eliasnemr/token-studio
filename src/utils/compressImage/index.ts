export const compressImage = async (fileAsUrl: string): Promise<string> => {
    // Extract the MIME type from the base64 string
    const mimeType = fileAsUrl.substring(fileAsUrl.indexOf(":") + 1, fileAsUrl.indexOf(";"));

    return new Promise((resolve) => {
        const img = new Image();
        img.src = fileAsUrl;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

            const MAX_IMAGE_SIZE = 50; // for that 50K HD resolution

            let imageWidth = img.width;
            let imageHeight = img.height;

            if (imageWidth > MAX_IMAGE_SIZE || imageHeight > MAX_IMAGE_SIZE) {
                // Calculate the aspect ratio
                const aspectRatio = imageWidth / imageHeight;

                // Calculate the new width and height
                if (imageWidth > imageHeight) {
                    imageWidth = MAX_IMAGE_SIZE;
                    imageHeight = MAX_IMAGE_SIZE / aspectRatio;
                } else {
                    imageHeight = MAX_IMAGE_SIZE;
                    imageWidth = MAX_IMAGE_SIZE * aspectRatio;
                }
            }

            canvas.width = imageWidth;
            canvas.height = imageHeight;

            ctx.drawImage(img, 0, 0, imageWidth, imageHeight);

            const quality = 0.7; // Set quality for compression
            const compressedImage = canvas.toDataURL(mimeType, quality);

            // Extract the base64 content (the part after the comma)
            const pureCompressedImage = compressedImage.slice(compressedImage.indexOf(',') + 1);

            // Create an XML structure to hold the base64 image data
            const xmlString = '<artimage></artimage>';
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

            // Insert the base64 image content into the XML structure
            xmlDoc.firstElementChild!.innerHTML = pureCompressedImage;

            // Serialize the XML back into a string
            const serializer = new XMLSerializer();
            const serializedXML = serializer.serializeToString(xmlDoc);

            // Resolve the promise with the serialized XML
            resolve(serializedXML);
        };

        img.onerror = () => {
            // In case of error, resolve with the original image URL as a fallback
            resolve(fileAsUrl);
        };
    });
};


export const base64ToBlob = (base64: string): Blob => {
    const byteString = atob(base64.split(',')[1]);
    const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];

    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
        intArray[i] = byteString.charCodeAt(i);
    }

    return new Blob([intArray], { type: mimeString });
};
